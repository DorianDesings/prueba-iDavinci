<template>
  <div class="call">
    <div v-if="isLoading">LOADING CALLS...</div>
    <div v-for="(call, index) in allCalls" :key="index">
      <div class="call__item">
        <h2 class="call__title">{{call.name}}</h2>
        <p class="call__description">{{call.description}}</p>
        <Merit class="call__merit" :callId="call.id" />
      </div>
    </div>
  </div>
</template>

<script>
import Merit from "./Merit";
import axios from "axios";
export default {
  name: "CallCard",
  mounted() {
    this.loadCalls();
  },
  components: {
    Merit: Merit
  },
  data() {
    return {
      allCalls: [],
      isLoading: true
    };
  },
  methods: {
    async loadCalls() {
      try {
        const calls = await axios.get("/Calls");
        this.allCalls = calls.data;
        this.isLoading = false;
      } catch (error) {
        console.log(error);
      }
    }
  },
  computed: {
    calculateTotalScore(score, userScore) {
      return score * userScore;
    }
  }
};
</script>

<style lang="scss">
.call {
  margin-bottom: -1rem;
  @media screen and (min-width: 1024px) {
    margin-bottom: 0;
  }
  &__item {
    background-color: #ddd;
    padding: 2rem;
    margin-bottom: 1rem;
  }

  &__title,
  &__description {
    grid-column: span 2;
  }

  &__merit {
    display: grid;
    grid-gap: 1rem 2rem;
    @media screen and (min-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>
