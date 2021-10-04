<template>
  <h1>This is an about page</h1>
  {{ greeting }}<br />
  {{ price }}<br />
  {{ product }}<br />
  {{ quantity }}<br />
  <input v-model="qty" />
  <button @click="setQuantity(qty)">mutations</button><br />
</template>
<script>
// 匯入 vuex 提供的工具，回傳物件，內部放function
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "VuexDemo",
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
