import errorFields from "@/assets/data/fieldsWithErrors.json";
import { defineStore } from "pinia";
const initialState = errorFields.reduce((accum, curr) => {
  Object.assign(accum, { [curr]: { hasError: false, message: "" } });
  return accum;
}, {});
// const
const getters = {
  errorKeys: {},
};
const actions = {};
const state = () => ({
  fieldsToValidate: new Set(),
  errors: { ...initialState },
});
export default defineStore("modal", { getters, actions, state });
