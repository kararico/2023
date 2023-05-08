import { createStore } from "vuex";
import mutations from './mutations.js';
import actions from './actions.js';


export default createStore({
    state: {
        news: [],
        jobs: [],
        ask: [],
        user: {}, // 객체 
        item: [], // 배열
    },
    getters: { 
        fetchedAsk(state) {
            return state.ask;
        },
        fetchedItem(state) {
            return state.item;
        }
    },
    mutations, 
    actions,
  });