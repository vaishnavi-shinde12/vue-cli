import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
         counterr: 0
    },
    getters: {                                              // getters
        doubleCounter: state => { 
            return state.counterr * 2;
        },
        stringCounter: state => {
            return state.counterr + ' Clicks';
        }
    },
    mutations: {                                           // mutations
        increment: (state ,payload) => {
            state.counterr += payload;
        },
        decrement: (state, payload) => {
            state.counterr -= payload;
        }
    },
    actions: {
        increment: ({ commit }, payload) => {
            commit('increment', payload);
        },
        decrement: ({ commit },payload) => {
            commit('decrement',payload);
        },
        asyncIncrement: ({commit}, payload) => {
            setTimeout(() => {
                commit('increment', payload.by);
            }, payload.duration)
        },
        asyncDecrement: ({commit}, payload) => {
            setTimeout(() => {
                commit('decrement', payload.by);
            }, payload.duration)
        }
    }
});