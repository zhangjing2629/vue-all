import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const state={
    isShow:true
};

const actions = {
    hideHeader:function({commit}){
        commit("hideHeader");
    },
    showHeader:function({commit}){
        commit("showHeader");
    }
};

const mutations = {
    hideHeader:function(state){
        state.isShow = false;
    },
    showHeader:function(state){
        state.isShow = true;
    }
};

const getters = {
    isShow:function(state){
        return state.isShow;
    }
};

export default new Vuex.Store({
   state,actions,mutations,getters
});
