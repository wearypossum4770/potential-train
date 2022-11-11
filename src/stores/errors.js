import { defineStore } from "pinia";
import errorFields from "@/assets/data/fieldsWithErrors.json";
const initialState = errorFields.reduce((accum, curr) => {
  Object.assign(accum, { [curr]: { hasError: false, message: "" } });
  return accum;
}, {});

const getters = {};
const actions = {};
const state = () => ({
  ...initialState,
});
export default defineStore("modal", { getters, actions, state });
