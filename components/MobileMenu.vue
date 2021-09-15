<template lang="pug">
.drawer-side
  label.drawer-overlay(:for='sidebar')
  ul.p-4.overflow-y-auto.menu.w-80.shadow-lg(class="bg-gradient-to-br from-yellow-100 via-yellow-300 to-yellow-500")
    li
      nuxt-link(to="/") Home
    li
      nuxt-link(to="/warehouse") Warehouses
    li
      nuxt-link(to="/products") Products
    li
      nuxt-link(to="/services") Services
    li
      nuxt-link(to="/profiles") Profiles
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";

@Component({})
export default class MobileMenu extends Vue {
  @Prop({ default: 'drawer' }) sidebar!: string;
}
</script>

