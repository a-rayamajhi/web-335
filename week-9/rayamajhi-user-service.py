# ===========================================
# Title: Exercise 9.2
# Author: Professor Krasso
# Date: 11 December 2020
# Modified by: Anil Rayamajhi
# Description: Querying and Creating Documents
# ==========================================

from pymongo import MongoClient
import pprint
import datetime

client = MongoClient('localhost', 27017)
db = client.web335

user = {
    "first_name": "Anil",
    "last_name": "Rayamajhi",
    "email": "anil@ar.io",
    "employee_id": "9876543210",
    "date_created": datetime.datetime.utcnow()

}

# Insert User
user_id = db.users.insert_one(user).inserted_id

print(user_id)

# Find and Pretty Print a User with matching employee_id
pprint.pprint(db.users.find_one({"employee_id": "9876543210"}))
