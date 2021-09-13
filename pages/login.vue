<template lang="pug" >
.flex.h-screen
  .border.p-4.rounded.m-auto.min-w-64.bg-white(class="md:w-1/4")
    h3.text-xl.text-center.mb-4 Sign in
    ValidationObserver( v-slot="{ handleSubmit }" tag="div")
      form(@submit.prevent="handleSubmit(login)")
        ValidationProvider.mb-4(tag="div" rules="required|email" name="email" v-slot="{ errors, classes }")
          label(for='inputEmailAddress') Email Address
          input#inputEmailAddress(type='email' :class="classes" v-model="form.email" placeholder='Email Address' autocomplete="email" name="email")
          .validation-error {{ errors[0] }}
        ValidationProvider.mb-4(tag="div" rules="required" name="password" v-slot="{ errors, classes }")
          label(for='inputChoosePassword') Enter Password
          input#inputChoosePassword(type='password', v-model="form.password" placeholder='Enter Password' :class="classes" autocomplete="current-password" minlength='6', maxlength='64')
          .validation-error {{ errors[0] }}
        .flex.w-full.justify-end
          button(type="submit") Sign in
</template>

<script lang="ts">
import {Component, mixins} from "nuxt-property-decorator";
import { ValidationObserver, ValidationProvider } from 'vee-validate'

@Component({
  auth: 'guest',
  components: {
    ValidationObserver, ValidationProvider
  }
})
export default class LoginPage extends mixins() {
  form = {
    email:'',
    password: ''
  };

  head () {
    return {
      bodyAttrs: {
        class: 'bg-login'
      }
    }
  }

  login() {
    this.$nuxt.$loading.start()
    this.$auth.loginWith('local',  { data: this.form } )
      .then(() => {
        this.$router.push("/")
      })
      .catch((error) => {
        this.handleError(error)
      }).finally(()=>{
      this.$nuxt.$loading.finish()
    })
  }
}
</script>
