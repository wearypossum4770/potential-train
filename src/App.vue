<script setup>
import { RouterLink, RouterView } from "vue-router";
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/home">Home</RouterLink>
    </nav>
  </header>
 <main>
  <RouterView />
 </main>
</template>