from flask import Blueprint

from app.controllers.book_controller import get_all_books, post_book
from app.controllers.category_controller import get_all_categories




books_bp = Blueprint('books_bp', __name__ , url_prefix='/books')


books_bp.post('')(post_book)
books_bp.get('')(get_all_books) 
books_bp.get('/categories')(get_all_categories)