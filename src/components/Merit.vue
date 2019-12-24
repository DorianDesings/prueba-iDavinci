<template>
  <div class="merit">
    <div v-if="isLoading">LOADING MERITS...</div>
    <ul class="merit" v-for="(merit, index) in getMeritsById(callId)" :key="index">
      <li class="merit__item" :key="index">
        <div class="merit__header">
          <h2 class="merit__title">{{merit.name}}</h2>
          <p class="merit__points">{{merit.totalScore==null ? 0 : merit.totalScore}} puntos</p>
        </div>
        <div class="merit__total">
          <span class="merit__equal-symbol">TotalScore</span>
          <span>{{merit.score}} *</span>
          <input
            :value="merit.userScore"
            :data-ref="merit.id"
            placeholder="User score"
            @input="updateUserScore"
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Merit",
  mounted() {
    this.loadMerits();
  },
  data() {
    return {
      isLoading: true
    };
  },
  props: ["callId"],
  methods: {
    async loadMerits() {
      try {
        const merits = await axios.get("/Merits");
        this.$store.commit("updateMerits", merits.data);
        this.isLoading = false;
      } catch (error) {
        console.log(error);
      }
    },
    getMeritsById(callId) {
      return this.$store.getters.getMeritsById(callId);
    },

    updateUserScore(e) {
      if (!isNaN(e.target.value)) {
        const newData = {
          idRef: e.target.dataset.ref,
          value: e.target.value
        };
        this.$store.commit("updateMerit", newData);
      } else {
        e.target.value = "";
      }
    }
  }
};
</script>

<style lang="scss">
.merit {
  list-style: none;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  &__item {
    padding: 1rem;
    background-color: #bbb;
  }
  &__title {
    font-size: 1.2rem;
    margin: 0;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0.5rem 0;
  }

  &__points {
    margin: 0;
    font-size: 0.9rem;
  }

  &__total {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: columns;
    @media screen and (min-width: 1024px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  &__equal-symbol {
    width: 100%;
    @media screen and (min-width: 1024px) {
      width: auto;
    }
    &::after {
      content: "";

      @media screen and (min-width: 1024px) {
        content: " =";
      }
    }
  }
  &:nth-child(even) li {
    background-color: #888;
    @media screen and (min-width: 1024px) {
      background-color: #bbb;
    }
  }
}
</style>
