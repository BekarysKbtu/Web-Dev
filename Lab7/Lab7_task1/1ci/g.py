n = int(input())

for divider in range(2, n + 1):
    if n % divider == 0:
        print(divider)
        break
