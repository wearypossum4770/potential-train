import { test, expect } from "vitest";
import {
  configGetters,
  configActions,
  configState,
  allowThirdAddress,
} from "@/stores/address";

const initialState = () => ({
  forwardType: "",
  moverType: "",
});

test.each([
  ["INDIVIDUAL", "TEMPORARY", false],
  ["FAMILY", "TEMPORARY", false],
  // ["BUSINESS",],
])(
  "A %s moverType filing a %s Change-of-Address is prompted with a third/other/billing address option.",
  (moverType, forwardType, expected) => {
    const target = allowThirdAddress({ moverType, forwardType });
    expect(target).toBe(expected);
  }
);
