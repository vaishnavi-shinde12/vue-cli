import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
         counterr: 0
    },
    getters: {
        doubleCounter: state => {
            return state.counterr * 2;
        },
        stringCounter: state => {
            return state.counterr + ' Clicks';
        }
    }
});