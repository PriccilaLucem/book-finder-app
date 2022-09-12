from dataclasses import dataclass
from app.configs.database import db
from sqlalchemy.orm import validates
import re 
import uuid

@dataclass
class Book(db.Model):
    name: str
    writer: str
    synopsis: str

    FIELDNAMES = ['id', 'name', 'writer', 'synopsis']
    __tablename__ = 'books'
    
    id = db.Column(uuid.UUID(as_uuid=True), primary_key= True, default= uuid.uuid4)
    name = db.Column(db.String(50), nullable=False)
    writer = db.Column(db.String(50), nullable=False)
    synopsis = db.Column(db.Text, nullable=False)
    