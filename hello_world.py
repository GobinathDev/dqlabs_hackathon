from training.calculator.calculator import calculate


operation = input("Enter the operation (add/sub/multi) : ")
value1 = int(input("Enter the integer value 1: "))
value2 = int(input("Enter the integer value 2: "))
result = calculate(operation, value1, value2)
# print("The result is: " + str(result))
#  print("Test Flow")
print(f"The result is: {str(result)}")
