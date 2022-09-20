from dataclasses import dataclass
from app.configs.database import db


books_categories = db.Table('books_categories',
    db.Column('category_id', db.Integer, db.ForeignKey('categories.id')),
    db.Column('book_id', db.Integer(), db.ForeignKey('books.id'))
)

@dataclass
class Book(db.Model):
    id: int
    book_name: str
    writer: str
    synopsis: str
    categories: dict

    FIELDNAMES = ['id', 'book_name', 'writer', 'synopsis']
    VALID_ARGS = [ 'book_name', 'writer', 'categories']

    __tablename__ = 'books'
    
    id = db.Column(db.Integer, primary_key= True)
    book_name = db.Column(db.String(50), nullable=False)
    writer = db.Column(db.String(50), nullable=False)
    synopsis = db.Column(db.Text, nullable=False)
    categories = db.relationship('Category', secondary=books_categories, uselist=True, backref= db.backref('books', uselist=True, lazy='dynamic'))
    

    @staticmethod
    def validate_args(**kwargs):
        if type(kwargs['book_name']) != str:
            raise TypeError
        if type(kwargs['writer']) != str:
            raise TypeError
        if type(kwargs['synopsis']) != str:
            raise TypeError
        
        return {k:v for(k,v) in kwargs.items() if k in Book.FIELDNAMES}