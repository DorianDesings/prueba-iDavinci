import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        merits: [],
    },
    mutations: {
        updateMerits(state, merits) {
            merits.forEach((merit, index) => {
                merit.id = index
            });
            state.merits = merits
        },
        updateMerit: (state, newData) => {
            const objetToUpdate = state.merits.findIndex(merit => merit.id == newData.idRef)
            state.merits[objetToUpdate].userScore = newData.value
        },
        calculateTotalScore: state => {
            state.merits.forEach(merit => {
                merit.totalScore = merit.userScore * merit.score
            })

        }
    },
    getters: {
        merits: state => state.merits,
        getMeritsById: (state) => (id) => {
            return state.merits.filter(merit => merit.callId == id)
        },

    }
})