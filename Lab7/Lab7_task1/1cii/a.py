n = int(input())
i = 1

while i <= n:
    if int(i ** 0.5) ** 2 == i:
        print(i)
    i += 1
