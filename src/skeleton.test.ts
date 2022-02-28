import secToHour from "./skeleton";

test("secToHours converts total seconds to hours and minutes", () => {
  expect(secToHour(3600)).toBe("1 hour(s) and 0 minute(s)");
  expect(secToHour(3601)).toBe("1 hour(s) and 0 minute(s)");
  expect(secToHour(323500)).toBe("89 hour(s) and 52 minute(s)");
  expect(secToHour(1800)).toBe("0 hour(s) and 30 minute(s)");
});

/* Tests
3600 --> "1 hour(s) and 0 minute(s)"
3601 --> "1 hour(s) and 0 minute(s)"
3500 --> "0 hour(s) and 58 minute(s)"
323500 --> "89 hour(s) and 51 minute(s)"
*/
