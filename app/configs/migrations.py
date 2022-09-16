from flask import Flask
from flask_migrate import Migrate


def init_app(app : Flask):
    from app.models.category_model import Category 
    from app.models.book_model import Book
    Migrate(app, app.db)

