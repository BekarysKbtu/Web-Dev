def make_bricks(small, big, goal):
    max_big_bricks = goal // 5
    actual_big_bricks = min(max_big_bricks, big)
    remaining_length = goal - actual_big_bricks * 5
    
    return remaining_length <= small
