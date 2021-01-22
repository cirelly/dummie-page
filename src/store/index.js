import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        name: "Test1",
        image: "https://pbs.twimg.com/media/BMdrBF4CIAAdehI.png",
        price: 50
      },
      {
        id: 2,
        name: "Test2",
        image:
          "https://www.catphones.com/wp-content/uploads/2018/08/cat-s41-front.png",
        price: 300
      },
      {
        id: 3,
        name: "Test3",
        image:
          "https://www.mobilitaria.com/wp-content/uploads/2019/10/Samsung-Galaxy-A8-Spy-Phone.jpg",

        price: 500
      },
      {
        id: 4,
        name: "Test4",
        image:
          "https://png.pngtree.com/png-clipart/20190516/original/pngtree-cleaning-products-on-transparent-background-png-image_4017269.jpg",
        price: 10
      }
    ],

    StoreCart: []
  },
  getters: {
    products: state => state.products,
    StoreCart: state => state.StoreCart
  },
  mutations: {
    ADD_Item(state, id) {
      state.StoreCart.push(id);
    },

    REMOVE_Item(state, index) {
      state.StoreCart.splice(index, 1);
    }
  },
  actions: {
    addItem(context, id) {
      context.commit("ADD_Item", id);
    },

    removeItem(context, index) {
      context.commit("REMOVE_Item", index);
    }
  },
  modules: {}
});
