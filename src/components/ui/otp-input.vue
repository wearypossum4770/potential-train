<template>
  <input autocomplete="one-time-code" name="oneTimePassword" />
</template>

<script setup>
const props = defineProps({
  disabled: Boolean,
  required: Boolean,
});
</script>
options: Array,
