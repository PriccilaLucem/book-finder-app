from flask import jsonify, request, current_app
from  werkzeug.exceptions import NotFound
from app.models.books import Book
from sqlalchemy.exc import IntegrityError, ProgrammingError
from app.controllers.category import get_or_create_category

def get_all_books():
    books_list = Book.query.all()
    return jsonify(books_list)


def post_bool():
    data = request.json
    try: 
        data = Book.validate_args(**data)
        category = data['category']
        
    except:
        ...