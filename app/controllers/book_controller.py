from flask import jsonify, request
from app.models.book_model import Book
from app.controllers.category_controller import get_or_create_category
from app.configs.database import db

def get_all_books():
    books_list = Book.query.all()
    
    return jsonify(books_list)


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

    