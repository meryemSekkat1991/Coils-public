<template lang="pug">
.dropdown
  .m-1.btn.bg-transparent.border-none.shadow(tabindex='0' class="hover:bg-indigo-300") Lang
  ul( tabindex="0" class="p-2 shadow menu dropdown-content bg-gradient-to-b from-indigo-200 via-indigo-300 to-indigo-100 rounded-box w-auto top-16")
    li(v-for="locale in availableLocales" :key="locale.code")
      nuxt-link(:to="switchLocalePath(locale.code)") {{ locale.name }}
</template>

<script lang="ts">
import { Vue, Component} from "nuxt-property-decorator";

@Component({
  name: "LanguageSwitcher",
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter((lang: { code: string; }) => lang.code !== this.$i18n.locale)
    }
  }
})
export default class LanguageSwitcher extends Vue {}
</script>
