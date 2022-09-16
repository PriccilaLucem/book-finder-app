from app.models.category_model import Category
from app.configs.database import db

def get_or_create_category(category_list: list):
    get_or_created_category_list = []
    for i in category_list:
        data = {'category_name': Category.validate_arg(i)}    
        
        category = Category.query.filter_by(category_name= i).first()
        if category:
            get_or_created_category_list.append(category)

        else:
            category = Category(**data)
        
            db.session.add(category)
            db.session.commit()

            get_or_created_category_list.append(category)
            
    return get_or_created_category_list
