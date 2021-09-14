<template lang="pug">
.navbar.mb-2.shadow-lg.bg-neutral.text-neutral-content.rounded-b-2xl.z-10
    .px-2.mx-2.navbar-start
      span.text-lg.font-bold
        | Coils
    .hidden.px-2.mx-2.navbar-center(class='lg:flex')
      .flex.items-stretch
        nuxt-link.btn.btn-ghost.btn-sm.rounded-btn(to="/") Home
        nuxt-link.btn.btn-ghost.btn-sm.rounded-btn(to="/signup") Join
        nuxt-link.btn.btn-ghost.btn-sm.rounded-btn(to="/explore") Explore
    .navbar-end
      label.btn.btn-square.btn-ghost(:for='id')
        svg.inline-block.w-6.h-6.stroke-current(xmlns='http://www.w3.org/2000/svg' fill='none' viewbox='0 0 24 24')
          path(stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 6h16M4 12h16M4 18h16')
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";

@Component({})
export default class Navbar extends Vue {
  @Prop({ default: 'drawer' }) id!: string;
}
</script>
