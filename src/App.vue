<template>
  <div id="nav">
    {{ greeting }}<br />
    {{ price }}<br />
    {{ product }}<br />
    {{ quantity }}<br />
    <input v-model="qty" />
    <button @click="setQuantity(qty)">mutations</button><br />
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
// 匯入 vuex 提供的工具，回傳物件，內部放function
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "App",
  data() {
    return {
      qty: 0,
    };
  },
  created() {
    this.fetchProductData({ id: "008" });
  },
  computed: {
    // 透過 mapState 取得 store 內的 state，透過展開物件內容，避免搶佔computed
    ...mapState(["greeting", "price", "product", "quantity"]),
    // 透過 mapGetters 取得 store 內的 getters，透過展開物件內容，避免搶佔computed
    ...mapGetters(["handleSellingPrice"]),
  },
  methods: {
    ...mapMutations(["setQuantity"]),
    ...mapActions(["fetchProductData"]),
  },
};
</script>
