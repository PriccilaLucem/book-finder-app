from flask import Flask
from app.routes.book_route import books_bp

def init_app(app:Flask):
    app.register_blueprint(books_bp)