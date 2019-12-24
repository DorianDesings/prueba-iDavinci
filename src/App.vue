<template>
  <div id="app" class="app">
    <h1 class="title">Listado de convocatorias</h1>
    <CallCard />
    <Button />
  </div>
</template>

<script>
import CallCard from "./components/CallCard.vue";
import Button from "./components/Button.vue";

export default {
  name: "app",
  components: {
    CallCard,
    Button
  }
};
</script>

<style lang="scss">
.app {
  width: 100%;
  font-family: sans-serif;
  margin-left: auto;
  margin-right: auto;
}

.title {
  text-align: center;
  @media screen and (min-width: 1024px) {
    text-align: left;
  }
}

.button {
  background-color: #111;
  color: #fff;
  border: none;
  border-radius: 4px;
  display: block;
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  @media screen and (min-width: 1024px) {
    padding: 0.4rem 0.8rem;
    margin-left: auto;
    width: auto;
    font-size: 0.8rem;
  }
}

.button:active {
  transform: scale(0.95);
}
</style>
