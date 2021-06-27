import { createStore } from "vuex";

export default createStore({
  state: {
    greeting: "Hello Word!",
    price: 333,
    product: {},
    quantity: 100,
  },
  getters: {
    discount(state) {
      // 當庫存超過50打八折，否則打九折
      return state.quantity > 50 ? 0.8 : 0.9;
    },
    // getters裡，可以取得state,getters
    handleSellingPrice(state, getters) {
      //售價打八折
      return state.price * getters.discount;
    },
  },
  // 修改 state 的唯一方式是透過 commit 某 mutations
  mutations: {
    // CB，在子元件觸發，將子元件傳來的值，更新到對應的狀態中
    setQuantity(state, payload) {
      state.quantity = payload;
    },
    setProduct(state, payload) {
      state.product = payload;
    },
  },
  actions: {
    // eslint-disable-next-line no-unused-vars
    handleFetchProductData(context, payload) {
      //可以進行異步執行
      fetch("...")
        .then((res) => res.json())
        //將結果提交給mutations已更改狀態
        .then((data) => context.commit("setProduct", data));
    },
  },
  modules: {},
});
