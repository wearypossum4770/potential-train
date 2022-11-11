import { defineStore } from "pinia";
import useCoa from "@/stores/coa";
export const allowThirdAddress = ({ moverType, forwardType }) =>
  moverType === "PERMANENT" &&
  ["INDIVIDUAL", "BUSINESS", "FAMILY"].includes(forwardType);

const getters = {
  showThirdAddress: ({}) => {
    const coa = useCoa();
    return allowThirdAddress(coa);
  },
};
const actions = {
  async processRequest({}) {},
};
const state = () => ({
  mailFowardStartDate: "",
});
export default defineStore("config", { getters, actions, state });
export {
  getters as configGetters,
  actions as configActions,
  state as configState,
};
