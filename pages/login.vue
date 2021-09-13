<template lang="pug" >
.login
  .div(class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100")
    .card-body
      ValidationObserver( v-slot="{ handleSubmit }" tag="div")
        form(@submit.prevent="handleSubmit(login)")
          ValidationProvider.mb-4(tag="div" rules="required|email" name="email" v-slot="{ errors, classes }")
            .form-control
              label(for='inputEmailAddress') Email Address
              input#inputEmailAddress.input(type='email' :class="classes" v-model="form.email" placeholder='Email Address' autocomplete="email" name="email")
              .validation-error {{ errors[0] }}
          ValidationProvider.mb-4(tag="div" rules="required" name="password" v-slot="{ errors, classes }")
            .form-control
              label(for='inputChoosePassword') Enter Password
              input#inputChoosePassword.input(type='password', v-model="form.password" placeholder='Enter Password' :class="classes" autocomplete="current-password" minlength='6', maxlength='64')
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
      }).finally(()=>{
      this.$nuxt.$loading.finish()
    })
  }
}
</script>
