<template lang="pug">
.default-layout.drawer
  input#drawer.drawer-toggle(type='checkbox')
  .flex.flex-col.drawer-content
    Navbar
    client-only
     notifications(group="default")
    Nuxt.container.mx-auto.py-10.px-4
  MobileMenu
  Footer
</template>

<style lang="scss">
.default-layout {
  @apply shadow bg-base-200 min-h-screen;

  .vue-notification-group {
    top: 74px !important;

    .vue-notification-wrapper {
      .vue-notification-template.vue-notification {
        @apply alert alert-info flex-col items-start space-y-2;

        &.info {
          @apply alert-info;
        }

        &.success {
          @apply alert-success;
        }

        &.error {
          @apply alert-error;
        }

        &.warning {
          @apply alert-warning;
        }
      }
    }
  }
}
</style>
