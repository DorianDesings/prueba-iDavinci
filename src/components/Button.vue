<template>
  <button class="button" @click="handleClick">Guardar</button>
</template>

<script>
export default {
  name: "Button",
  methods: {
    handleClick() {
      this.$store.commit("calculateTotalScore");
    }
  }
};
</script>

<style>
</style>
