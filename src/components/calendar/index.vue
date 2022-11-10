<script setup>
const props = defineProps({
    day: Number,
})

console.log(props.foo)
</script>

<template>
  <p class="greeting">{{ greeting }}</p>
</template>
