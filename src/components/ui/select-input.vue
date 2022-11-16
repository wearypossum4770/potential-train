<!-- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select -->
<template>
  <div>
    <label>{{ fieldName }}</label>
    <select
      :disabled="disabled"
      :required="required"
      :name="name"
      v-model="state"
      :multiple="multiple"
    >
      <option v-for="option in options" :value="option.value">
        {{ option.text }}
      </option>
    </select>
  </div>
</template>
<script setup>
const props = defineProps({
  state: String,
  options: Array,
  disabled: Boolean,
  fieldName: String,
  name: String,
  required: Boolean,
  multiple: Boolean,
});
</script>
