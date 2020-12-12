# ===========================================
# Title: Exercise 9.3
# Author: Professor Krasso
# Date: 12 December 2020
# Modified by: Anil Rayamajhi
# Description: Updating and Deleting Documents
# ==========================================

from pymongo import MongoClient
import pprint
import datetime

client = MongoClient('localhost', 27017)
db = client.web335

# Update User
db.users.update_one(
    {"employee_id": "9876543210"},
    {
        "$set": {
            "email": "arayamajhi@my365.bellevue.edu"
        }
    }
)

# Find and Pretty Print a User with matching employee_id
pprint.pprint(db.users.find_one({'employee_id': '9876543210'}))
