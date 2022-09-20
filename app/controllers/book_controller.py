from flask import jsonify, request
from app.models.book_model import Book
from app.models.category_model import Category
from app.controllers.category_controller import get_or_create_category
from app.configs.database import db


def get_all_books():
    args = request.args.items()
    args = {key: value for (key, value) in args if key in Book.VALID_ARGS}
    books_list = Book.query
    if 'writer' in args:
        books_list = books_list.filter(Book.writer.like(f"%{args['writer']}%"))
    if 'book_name' in args:
        books_list = books_list.query.filter(Book.book_name.like(f"%{args['book_name']}%"))
    if 'categories' in args:
        categories = args['categories'].split(',')
        for i in categories:
            books_list = books_list.filter(Book.categories.any(Category.category_name == i ))

    return jsonify(books_list.all())


def post_book():
    data = request.json
    try: 
        categories_list = data.pop('categories')
        
        data = Book.validate_args(**data)
        book = Book(**data)
        categories_list = get_or_create_category(categories_list)
        book.categories.extend(categories_list)

        db.session.add(book)
        db.session.commit()

        return jsonify(book), 201
    except KeyError as e:
        return {"error": f"Missing {e} key"},400

    except AttributeError:
        return {"error": "Category name contains invalid character, ','"}, 400

    except TypeError:
        return {"error": "All the data must be string"}