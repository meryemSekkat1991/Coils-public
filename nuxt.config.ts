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

  axios: {
    baseURL: 'http://173.212.223.175:3000',
  },

  modules: [
    "@nuxtjs/axios",
  ],

  components: [
    { path: "~node_modules/@pre-history/quasarbasenuxt/components", level: 0 },
    { path: "~/components", level: 1 },
  ],

});

console.log();
