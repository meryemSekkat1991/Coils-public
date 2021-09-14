<template lang="pug">
.navbar.mb-2.shadow-lg.bg-neutral.text-neutral-content.rounded-box
  .flex-none
    button.btn.btn-square.btn-ghost
      svg.inline-block.w-6.h-6.stroke-current(xmlns='http://www.w3.org/2000/svg' fill='none' viewbox='0 0 24 24')
        path(stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 6h16M4 12h16M4 18h16')
  .flex-1.px-2.mx-2
    span.text-lg.font-bold
      | With two icons
  .flex-none
    button.btn.btn-square.btn-ghost
      svg.inline-block.w-6.h-6.stroke-current(xmlns='http://www.w3.org/2000/svg' fill='none' viewbox='0 0 24 24')
        path(stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z')
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  name: "Navbar"
})
export default class Navbar extends Vue {}
</script>

<style scoped>

</style>
