<template lang="pug">
.warehouses
  p {{warehouses}}
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({
  name: "warehouses"
})

export default class home extends Vue {
  warehouses = [];
  mounted () {
    this.$axios
      .get('/api/admin/warehouses')
      .then(res => (
        this.warehouses = res.data
      ));
  }
}
</script>
