import minToHour from "./skeleton";

test("minToHours converts total minutes to hours and minutes", () => {
  expect(minToHour(3600)).toBe("1 hour (s) and 0 minute(s)");
  expect(minToHour(3601)).toBe("1 hour (s) and 1 minute(s)");
  expect(minToHour(323500)).toBe("89 hour (s) and 51 minute(s)");
  expect(minToHour(30)).toBe("0 hour (s) and 30 minute(s)");
});

/* Tests
3600 --> "1 hour(s) and 0 minute(s)"
3601 --> "1 hour(s) and 0 minute(s)"
3500 --> "0 hour(s) and 58 minute(s)"
323500 --> "89 hour(s) and 51 minute(s)"
*/