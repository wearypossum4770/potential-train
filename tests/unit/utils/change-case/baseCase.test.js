import { describe, expect, it } from "bun:test";
import baseCase from "../../../../src/utils/change-case/baseCase.js";
// console.log(firstAndLastSameCase('sponge case'))
// console.log(firstAndLastSameCase('sponge casE'))
describe("baseCase correctly parses ", () => {
  it("some-mixed_string With space_underscores-and-hyphens", () => {
    expect(
      baseCase("some-mixed_string With space_underscores-and-hyphens")
    ).toBe("some mixed string With space underscores and hyphens");
  });
  it("__doc__", () => {
    expect(baseCase("__doc__")).toBe("doc");
  });
  it("__doc_string__", () => {
    expect(baseCase("__doc_string__")).toBe("doc string");
  });
  it("camelCase", () => {
    expect(baseCase("camelCase")).toBe("camel Case");
  });
  it("", () => {
    expect(baseCase("")).toBe("");
  });
  it("undefined", () => {
    expect(baseCase()).toBe("");
  });
  it("Capital Case", () => {
    expect(baseCase("Capital Case")).toBe("Capital Case");
  });
  it("CONSTANT_CASE", () => {
    expect(baseCase("CONSTANT_CASE")).toBe("CONSTANT CASE");
  });
  it("dot.case", () => {
    expect(baseCase("dot.case")).toBe("dot case");
  });
  it("Header-Case", () => {
    expect(baseCase("Header-Case")).toBe("Header Case");
  });
  it("kebab-case", () => {
    expect(baseCase("kebab-case")).toBe("kebab case");
  });
  it("param-case", () => {
    expect(baseCase("param-case")).toBe("param case");
  });
  it("PascalCase", () => {
    expect(baseCase("PascalCase")).toBe("Pascal Case");
  });
  it("path/case", () => {
    expect(baseCase("path/case")).toBe("path case");
  });
  it("Sentence Case", () => {
    expect(baseCase("Sentence Case")).toBe("Sentence Case");
  });
  it("snake_case", () => {
    expect(baseCase("snake_case")).toBe("snake case");
  });
  it("sPoNgE cAsE", () => {
    expect(baseCase("sPoNgE cAsE")).toBe("sPoNgE cAsE");
  });
  it("SCREAMING CASE", () => {
    expect(baseCase("SCREAMING CASE")).toBe("SCREAMING CASE");
  });
  it("Tilte Case One. Two. A Small Word Starts", () => {
    expect(baseCase("Tilte Case One. Two. A Small Word Starts")).toBe(
      "Tilte Case One. Two. A Small Word Starts"
    );
  });
});
