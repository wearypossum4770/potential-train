import { defineStore } from "pinia";

const getters = {};
const actions = {};
const state = () => ({
  mailFowardStartDate: "",
});

export default defineStore("coa", { getters, actions, state });
export { getters as coaGetters, actions as coaActions, state as coaState };
