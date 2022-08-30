def is_anagram(str1, str2):
    # Check length of both strings is the same
    if (len(str1) != len(str2)):
        return False

    new_string = str2
    # Loop through each letter in str1
    for s1 in str1:
        # Check if letter exists in new_string
        if s1 in new_string:
            # If it does, continue
            new_string = new_string.replace(s1, "", 1)
            continue
            # Else, return false
        else:
            return False
    # Return true
    return True

print(is_anagram("test", "sett"))
