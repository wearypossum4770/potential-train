<template>
  <h1>Something</h1>
  <button @click="increment">
    {{ state.count }}
  </button>
</template>
<script setup>
import { reactive } from "vue";

const state = reactive({ count: 0 });

function increment() {
  state.count++;
}
</script>
