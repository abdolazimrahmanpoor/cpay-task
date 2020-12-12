import Vue from 'vue'
export const state = () => ({
  search: [],
  update: [],
  items: [
    {
      id: "2cmnz7qg",
      name: "trafic",
      title: "ترافیک",
      date: "19-08-99",
      url: "www.trafic.com",
      public: true,
      status: false
    },
    {
      id: "5nuxu4qg",
      name: "Cpay tax",
      title: "capytax",
      date: "12-05-99",
      url: "www.cpay.ir",
      public: false,
      status: true
    }
  ]
});

export const mutations = {
  ADD_ITEM(state, value) {
    state.items.push(value)
  },



  DELETE_ITEM(state, value) {
      state.items = state.items.filter((e)=>e.id !== value ) 
  },


  GET_UPDATE_ITEM(state, value) {
    state.update = state.items.filter(item => item.id === value);
  },

  SET_UPDATE_ITEM(state, value){
     Vue.set(state.items, value.id, value);
  },

  SEARCH_NAME(state, value) {
    state.search = state.items.filter(item => item.name === value);
  },

  SEARCH_TITLE(state, value) {
    state.search = state.items.filter(item => item.title === value);
  }
};




export const getters = {
  getActive: state => {
    return state.items.filter(item => item.status);
  },
  getInactive: state => {
    return state.items.filter(item => !item.status);
  }
};
