<template lang="pug">
.warehouses
  h1.text-xl.font-bold.mb-5 Warehouses
  WarehousesCard(v-for="warehouse in warehouses" :warehouse="warehouse")
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import WarehousesCard from "../components/WarehousesCard.vue";

@Component({
  name: "warehouses",
  components: {WarehousesCard},
  layout: "default",
})


export default class home extends Vue {
  warehouses = [];
  async fetch () {
    this.$axios
      .get('/api/admin/warehouses')
      .then(res => (
        this.warehouses = res.data
      ));
  }
}
</script>
