def alarm_clock(day, vacation):
  if vacation:
        if day in range(1, 6):  # Weekdays
            return '10:00'
        else:  # Weekends
            return 'off'
  else:
        if day in range(1, 6):  # Weekdays
            return '7:00'
        else:  # Weekends
            return '10:00'
