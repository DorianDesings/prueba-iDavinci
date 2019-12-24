<template>
  <button class="button" @click="handleClick">Guardar</button>
</template>

<script>
export default {
  name: "Button",
  methods: {
    handleClick() {
      // calculateTotalScore(merit.score, merit.userScore);
      this.$store.commit("calculateTotalScore");
    }
  }
};
</script>

<style>
</style>
