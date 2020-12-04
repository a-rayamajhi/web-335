# ===========================================
# Title: Exercise 8.3
# Author: Professor Krasso
# Date: 3 December 2020
# Modified by: Anil Rayamajhi
# Description: Python in Action
# ==========================================
#

# add function
# return the total of the parameterized values
def add(a, b):
    return a+b


# subtract function
# return the subtracted total of the parameterized values
def subtract(a, b):
    # check the greater parameter
    if (b > a):
        return b-a
    return a-b


# division function
# return the divided total of the parameterized values
def divide(a, b):
    return a/b


print(add(1, 2))
print(subtract(4, 1))
print(subtract(4, 9))
print(divide(8, 2))
