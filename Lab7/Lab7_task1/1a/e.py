v = int(input())
t = int(input())

s = v * t

if v < 0:
    print(s + 109)
    exit()
if s <= 109:
    print(s)
else:
    print(s - 109)

