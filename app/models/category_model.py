from dataclasses import dataclass
from app.configs.database import db

@dataclass
class Category(db.Model):
    id: str
    category_name: str
    
    FIELDNAMES = ['id', 'category_name']
    __tablename__ = 'categories'

    id = db.Column(db.Integer, primary_key=True)
    category_name = db.Column(db.String(20), nullable=False)


    @staticmethod
    def validate_arg(category_name):
        if type(category_name) != str:
            raise TypeError
        if ',' in category_name:
            raise AttributeError
        return category_name