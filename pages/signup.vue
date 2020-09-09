<template>
  <v-theme-provider root>
    <div>
      <v-row align="center" style="height: calc(100vh - 24px);" class="mt-0">
        <v-col>
          <v-row>
            <v-col align="center">
              <v-img :src="logo" width="75"></v-img>
              <p class="display-1 font-weight-light"><span class="secondary--text">Econo</span><b>Me</b></p>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="9" align="center">
              <v-text-field label="Email" type="email" outlined dense hide-details class="mb-2">
                <v-icon slot="append" color="secondary" small class="mt-1">mdi-email</v-icon>
              </v-text-field>
              <v-text-field label="Password" type="password" outlined dense hide-details class="mb-2">
                <v-icon slot="append" color="secondary" small class="mt-1">mdi-eye</v-icon>
              </v-text-field>
              <v-btn color="primary" class="white--text mb-5" @click="login">Sign up</v-btn>
              <v-divider class="mb-5"></v-divider>
              <v-row class="pt-0">
                <v-col class="pt-0"><v-btn color="facebook" class="white--text mb-2" dense block outlined><v-icon color="facebook">mdi-facebook</v-icon></v-btn></v-col>
                <v-col class="pt-0"><v-btn color="google" class="white--text mb-2" dense block outlined><v-icon color="google">mdi-google</v-icon></v-btn></v-col>
              </v-row>
              <v-divider class="mb-5"></v-divider>
              <p class="secondary--text">Already have an account? <nuxt-link to="/">Login</nuxt-link></p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </v-theme-provider>
</template>

<script>
  import logo from "@/assets/images/Logo.png"
  export default {
    layout: 'noheader',
    data() {return { logo }},
    methods: {
      login() {
        this.$router.push('/home');
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
