<template lang="pug">
footer.p-10.footer.bg-neutral.text-neutral-content
  div
    span.footer-title Services
    a.link.link-hover Branding
    a.link.link-hover Design
    a.link.link-hover Marketing
    a.link.link-hover Advertisement
  div
    span.footer-title Company
    a.link.link-hover About us
    a.link.link-hover Contact
    a.link.link-hover Jobs
    a.link.link-hover Press kit
  div
    span.footer-title Legal
    a.link.link-hover Terms of use
    a.link.link-hover Privacy policy
    a.link.link-hover Cookie policy
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  name: "Footer",
})
export default class Footer extends Vue {}
</script>

<style scoped>

</style>
