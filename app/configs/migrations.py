from flask import Flask
from flask_migrate import Migrate


def init_app(app : Flask):
    from app.models.category import Category 
    from app.models.books import Book
    Migrate(app, app.db)

