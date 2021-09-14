<template lang="pug">
.drawer-side
  label.drawer-overlay(:for='id')
  ul.p-4.overflow-y-auto.menu.w-80.bg-base-100
    li
      nuxt-link(to="home") Home
    li
      nuxt-link(to="/signup") Join
    li
      nuxt-link(to="/explore") Explore
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
  @Prop({ default: 'drawer' }) id!: string;
}
</script>

