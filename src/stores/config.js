import { defineStore } from "pinia";

const getters = {};
const actions = {
  async processRequest({}) {},
};
const state = () => {};
export default defineStore("config", { getters, actions, state });
export {
  getters as configGetters,
  actions as configActions,
  state as configState,
};
