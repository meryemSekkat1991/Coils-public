<template lang="pug">
card
  .card-body.shadow-md.w-full.border.mb-5.rounded-lg.bg-white
    .flex.flex-grow.items-center
      .flex-1.pr-5
        input.input.w-full(v-model="warehouse.name")
      .flex-2
        .card-action.place-self-end
          button.btn.btn-primary.mr-2(@click="save(warehouse.id)") Save
          buttonbtn.btn.bg-red-600.text-white.border-red-100(class="hover:bg-red-700 hover:border-red-100" @click="deleteWarehouse(warehouse.id)") Delete
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";

@Component({
  name: "warehousesCard",
})
export default class warehousesCard extends Vue {
  @Prop() warehouse?: Record<string, unknown>;

  save(id: number): void {
    this.$axios
      .patch(`/api/admin/warehouses/${id}`)
      .then(res => (
        console.log("done")
      ));
  }
  deleteWarehouse(id: number): void {
    this.$axios
      .patch(`/api/admin/warehouses/${id}`)
      .then(res => (
        console.log("done")
      ));
  }
}
</script>
