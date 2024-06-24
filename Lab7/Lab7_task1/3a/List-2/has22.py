def has22(nums):
    for i in range(len(nums) - 1):  # Iterate through the list except the last element
        if nums[i] == 2 and nums[i + 1] == 2:  # Check if two consecutive elements are both 2
            return True
    return False
