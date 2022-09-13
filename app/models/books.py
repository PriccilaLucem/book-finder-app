from dataclasses import dataclass
from app.configs.database import db
import uuid


books_categories = db.Table('books_categories',
    db.Column('category_id', db.Integer, db.ForeignKey('categories.id')),
    db.Column('book_id', db.Integer(), db.ForeignKey('books.id'))
)

@dataclass
class Book(db.Model):
    book_name: str
    writer: str
    synopsis: str

    FIELDNAMES = ['id', 'book_name', 'writer', 'synopsis']
    __tablename__ = 'books'
    
    id = db.Column(db.Integer, primary_key= True)
    book_name = db.Column(db.String(50), nullable=False)
    writer = db.Column(db.String(50), nullable=False)
    synopsis = db.Column(db.Text, nullable=False)
    categories = db.relationship('Book', secondary=books_categories, backref='books')
    

    @staticmethod
    def validate_args(**kwargs):
        if type(kwargs['book_name']) != str:
            raise TypeError
        if type(kwargs['writer']) != str:
            raise TypeError
        if type(kwargs['synopsis']) != str:
            raise TypeError
        