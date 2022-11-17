import useErrorState from "@/stores/errors";
import { createPinia, setActivePinia } from "pinia";
import { describe, expect, test } from "vitest";

describe("Error Store unit test", () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia());
  });
  test("error state is initialized", () => {
    const errorState = useErrorState();
    expect(errorState.errors).toHaveProperty("forwardType.hasError", false);
  });
});
