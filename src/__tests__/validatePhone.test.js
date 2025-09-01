import { validatePhone } from '../utils/validation';

describe("validatePhone", () => {
  test("returns error if phone is empty", () => {
    expect(validatePhone("")).toBe("Phone is required");
  });

  test("returns error if phone does not start with +254", () => {
    expect(validatePhone("0712345678")).toBe("Must start with country code +254.");
  });

  test("returns error if phone is not the mock login number", () => {
    expect(validatePhone("+254799999999")).toBe("Invalid phone for this mock login.");
  });

  test("returns empty string for valid mock login phone", () => {
    expect(validatePhone("+254712345678")).toBe("");
  });
});