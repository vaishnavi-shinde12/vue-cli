import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';

import * as actions from './actions';        // created separate files for actions & imported
import * as mutations from './mutations';    // created separate files for mutations & imported
import * as getters from './getters';        // created separate files for getters & imported

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
         value: 0
    },

    getters,       // getters is javascript object and we should imported it here 
    mutations,     // mutations is javascript object and we should imported it here
    actions,       // actions is javascript object and we should imported it here

    
// Here, all the things at the end merged into one single store
// Hence, they share the same namespace
// So, make sure that you have to give a unique name
// to all your getters, mutations, actions in all the files which is going to be merged.


    modules: {
        counter      // by this module is imported, and we have modules for specialized things
    }
});