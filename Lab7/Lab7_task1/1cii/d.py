n = int(input())

is_power_of_two = True

while n > 1:
    if n % 2 != 0:
        is_power_of_two = False
        break
    n //= 2

if is_power_of_two:
    print("YES")
else:
    print("NO")
