// Could hold counterr vuex parts -- modularizing the state management means 
// splitup store.js file into two diff modules
// where each modules has its own getters,mutations,actions and so on


import * as types from '../types';


const state = {
    counterr: 0
};

const getters = {
    [types.DOUBLE_COUNTER]: state => { 
        return state.counterr * 2;
    },
    [types.CLICK_COUNTER]: state => {
        return state.counterr + ' Clicks';
    }
};

const mutations = {
    increment: (state, payload) => {
        state.counterr += payload;
    },
    decrement: (state, payload) => {
        state.counterr -= payload;
    }
};

const actions = {
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
};

export default {
    state,
    getters,
    mutations,
    actions
}