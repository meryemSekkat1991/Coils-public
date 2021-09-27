import { nuxtConfig } from "nuxt-extend";

export default nuxtConfig({
  extends: "@pre-history/quasarbasenuxt/nuxt.config",
  name: "coils-front",
  srcDir: __dirname,
  head: {
    title: "CoilsFront",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  auth: {
    redirect: {
      login: "/login",
      logout: "/login",
      callback: "/login",
      home: "/",
    },
    strategies: {
      local: {
        token: {
          property: "token",
        },
        user: {
          property: "user",
          autoFetch: true,
        },
        endpoints: {
          login: { url: "/api/admin/auto-login", method: "post" },
          logout: { url: "/api/api/admin/logout", method: "delete" },
          user: { url: "/api/admin/me", method: "get" },
        },
        watchLoggedIn: true,
        rewriteRedirects: true,
        resetOnError: true
      },
    },
  },

  axios: {
    baseURL: 'http://173.212.223.175:3000',
  },

  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
    "nuxt-i18n",
  ],

  i18n: {
    locales: [
      {
        name: 'English',
        code: "en",
        iso: 'en-US',
        file: "en/index.ts",
      },
      {
        name: "french",
        code: "fr",
        file: "fr/index.ts",
      },
    ],
    strategy: "prefix_except_default",
    langDir: "locales",
    lazy: true,
    defaultLocale: "fr",
  },

  router: {
    middleware: ["auth"],
    routeNameSplitter: "_",
  },

  components: [
    { path: "~node_modules/@pre-history/quasarbasenuxt/components", level: 0 },
    { path: "~/components", level: 1 },
  ],

  plugins: [
    { src: '~/plugins/vee-validate', mode: 'client' },
    { src: '~/plugins/i18n.js' }
  ],

});

console.log();
