<template lang="pug">
div(class="navbar mb-2 shadow-lg bg-gradient-to-b from-indigo-500 via-indigo-300 to-indigo-100 text-white")
  .flex-none(class='lg:flex')
    label.btn.btn-square.btn-ghost(:for='id')
      svg.inline-block.w-6.h-6.stroke-current(xmlns='http://www.w3.org/2000/svg' fill='none' viewbox='0 0 24 24')
        path(stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 6h16M4 12h16M4 18h16')
  .flex-1.px-2.mx-2(class='lg:flex')
    span.text-lg.font-bold
      | Coils
  .user.relative(v-if="isAuth")
    .collapse.collapse-open.relative(tabindex='0')
      .collapse-title.text-xs.font-medium
        .avatar
          .rounded-full.w-8.h-8
            img(src='https://i.pravatar.cc/500?img=32')
      .collapse-content.fixed.top-20
        .label {{user.login}}
        .label {{user.lastname}}
    .tooltip(data-tip='logout' class="tooltip-bottom tooltip-primary")
      a.btn.btn-ghost(@click="logout") [->
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";

@Component({})
export default class Navbar extends Vue {
  @Prop({ default: 'drawer' }) id!: string;

  get user() {
    return this.$auth.user;
  }

  get isAuth() {
    return  this.$auth.loggedIn;
  }
  logout() {
    this.$auth.logout()
      .then(() => {
        this.$router.push("/")
      })
  }
}
</script>
