pipeline = [
    {"$set": {
        "series": {
          "level": fakeNumberBounded(0, 999),                                                  // Random number 0 - 999
            "location": {
            "coordinates": [
              fakeMoneyAmountDecimal(3), 
              fakeMoneyAmountDecimal(3)
            ],
              "type": fakeValueFromList(["Point"])
            },
          "variable": fakeValueFromList(["t"])
        },
        "timestamp": fakeDateBeforeNow(30 * 1000),                                             // Random date no more than 30 seconds from now
    }},
]
