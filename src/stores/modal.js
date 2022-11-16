import { defineStore } from "pinia";

const getters = {};
const actions = {
  async closeModal() {
    if (!this.canDismiss) return;
    return (this.isOpen = false);
  },
  async incrementStep() {
    this.currentStep += 1;
  },
  async decrementStep() {
    this.currentStep -= 1;
  },
  async openModal() {
    this.isOpen = true;
  },
};
const state = () => ({
  isOpen: false,
  canDismiss: true,
  currentStep: 0,
});
export default defineStore("modal", { getters, actions, state });
