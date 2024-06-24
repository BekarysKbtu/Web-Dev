#Nested Lists
students = []
for _ in range(int(input())):
    name = input()
    score = float(input())
    students.append([name, score])

students.sort(key=lambda x: (x[1], x[0]))

second_lowest_score = None
for student in students:
    if second_lowest_score is None or student[1] > second_lowest_score:
        second_lowest_score = student[1]
        break

result = []
for student in students:
    if student[1] == second_lowest_score:
        result.append(student[0])

result.sort()
for name in result:
    print(name)
