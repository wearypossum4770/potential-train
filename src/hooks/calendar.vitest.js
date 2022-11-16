import { it, expect } from "vitest";
import useCalendar from "@/hooks/calendar";

it("allows callback functionality", async () => {
  const { date, setDate, setMonth, setYear } = useCalendar({
    date: [2022, 9, 8],
  });
  expect(date).toStrictEqual(new Date("2022-10-08T04:00:00.000Z"));
  setDate(15);
  expect(date).toStrictEqual(new Date("2022-10-15T04:00:00.000Z"));
  expect(date.getDate()).toBe(15);
  setMonth(3);
  expect(date.getMonth()).toBe(3);
  setYear(1999);
  expect(date.getFullYear()).toBe(1999);
});
