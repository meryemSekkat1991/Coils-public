<template lang="pug">
footer.p-4.footer.text-base-content.footer-center(class="bg-gradient-to-b from-yellow-500 via-yellow-300 to-yellow-200")
  div
    p Copyright &copy; 2021 - All right reserved by ACME Industries Ltd
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  name: "Footer",
})
export default class Footer extends Vue {}
</script>
