def round_sum(a, b, c):
    return round10(a) + round10(b) + round10(c)


def round10(num):
    # Round num to the nearest multiple of 10
    return (num + 5) // 10 * 10
