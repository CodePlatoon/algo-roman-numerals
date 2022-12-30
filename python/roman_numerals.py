import math;

def to_roman(num):
    roman = {
        'M': 1000,
        'CM': 900,
        'D': 500,
        'CD': 400,
        'C': 100,
        'XC': 90,
        'L': 50,
        'XL': 40,
        'X': 10,
        'IX': 9,
        'V': 5,
        'IV': 4,
        'I': 1
    }
    romanNumeral = ''

    for i in roman.keys(): 
        floorNum = math.floor(num / roman[i])
        num -= floorNum * roman[i]
        romanNumeral += i * floorNum

    return romanNumeral