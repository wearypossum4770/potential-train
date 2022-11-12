<template>
  <div v-show="isOpen" class="blocking-modal-mask">
    <div id="blocking-modal-wrapper" class="blocking-modal-wrapper">
      <div
        role="dialog"
        aria-labelledby="assessible-description"
        :aria-modal="isOpen"
        class="blocking-modal-container"
      >
        <span id="assessible-description">{{ description }}</span>
        <button @click="$emit('close')">X</button>
        <h2>Default Header</h2>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isOpen: Boolean,
  canDismiss: Boolean,
  currentStep: Number,
  show: Boolean,
  description: String,
});
</script>

<style scoped>
.blocking-modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}
.blocking-modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}
</style>
