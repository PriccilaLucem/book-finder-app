from flask import Blueprint

from app.controllers.books import get_all_books




books_bp = Blueprint('books_bp', __name__ , url_prefix='/books')


books_bp.post('')
books_bp.get('')(get_all_books) 