<template>
  <div>
    <h1>Disclaimer</h1>
    <button id="show-modal" @click="modal.openModal">Show Modal</button>

    <Teleport to="body">
      <!-- use the modal component, pass in the prop -->
      <blocking-modal
        :isOpen="modal.isOpen"
        :currentStep="modal.currentStep"
        :canDismiss="modal.canDismiss"
        @close="modal.closeModal"
      />
    </Teleport>
    <div>
      <label>State:</label>
      <input id="" class="form-dropdown-input" />
    </div>
    <div>
      <label></label>
      <input
        id="mailFowardStartDate"
        type="date"
        v-model="mailFowardStartDate"
      />
    </div>
    <button @click="verifyRecaptcha">Verify Recaptcha</button>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import useModal from "@/stores/modal";
import BlockingModal from "@/components/ui/modal.vue";
const showModal = ref(false);
const mailFowardStartDate = ref(0);
const modal = useModal();
const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
const recaptcha = `https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`;

onMounted(() => {
  const gre = Object.assign(document.createElement("script"), {
    className: "g-recaptcha",
    async: true,
    src: recaptcha,
  });
  document.body.append(gre);
});
const verifyRecaptcha = async (event) => {
  event.preventDefault();
  grecaptcha.ready(() =>
    grecaptcha.execute(recaptchaSiteKey, { action: "submit" }).then((token) => {
      fetch("http://localhost:3007/", {
        mode: "cors",
        method: "POST",
        body: JSON.stringify({ token }),
      })
        .then((resp) => resp.json())
        .then((resp) => {
          console.log(resp, { token });
        })
        .catch((err) => console.log(err));
    })
  );
};
</script>

<style scoped>
span[name="Month"] {
  display: none;
}
</style>
