def make_chocolate(small, big, goal):
    max_big = goal // 5
    remaining_goal = goal - min(max_big, big) * 5

    if remaining_goal <= small:
        return remaining_goal
    return -1
