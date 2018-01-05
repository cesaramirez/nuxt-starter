<template>
       <v-layout align-center justify-center>
        <v-flex xs12 sm8 md6 lg4>
            <v-card>
                <v-card-title primary-title>
                  <v-flex justify-center hidden-sm-and-down>
                    <img src="/logo.png" alt="Logo" height="150px" class="text-xs-center" style="display: block; margin: 0 auto;">
                    <h1 class="headline text-xs-center">Log In</h1>
                  </v-flex>
                  <v-flex justify-center hidden-md-and-up>
                    <h1 class="headline text-xs-center">Log In</h1>
                  </v-flex>
                </v-card-title>
                <v-form @submit.prevent="submit">
                  <v-card-text>
                      <v-layout row>
                          <v-flex xs12>
                              <v-text-field
                              v-model="form.email"
                              name="email"
                              label="Email"
                              prepend-icon="mail"
                              :error-messages="errors.collect('email')"
                              v-validate="'required|email'"
                              data-vv-name="email"
                              ></v-text-field>
                          </v-flex>
                      </v-layout>
                      <v-layout row>
                          <v-flex xs12>
                              <v-text-field
                              v-model="form.password"
                              name="password"
                              label="Password"
                              type="password"
                              prepend-icon="vpn_key"
                              :error-messages="errors.collect('password')"
                              v-validate="'required|min:6'"
                              data-vv-name="password"
                              ></v-text-field>
                          </v-flex>
                      </v-layout>
                  </v-card-text>
                  <v-card-actions>
                    <v-layout row wrap>
                      <v-flex xs12 lg6>
                        <v-btn type="submit" color="primary" block :loading="loading">Log In</v-btn>
                      </v-flex>
                      <v-flex xs12 lg6>
                        <v-btn flat color="primary" block>Forgot Your Password?</v-btn>
                      </v-flex>
                    </v-layout>
                  </v-card-actions>
                </v-form>
            </v-card>
        </v-flex>
</v-layout>
</template>

<script>
    import { mapActions } from 'vuex'
    import _ from 'lodash'
    export default {
      layout: 'auth',
      data () {
        return {
          form: {
            email: '',
            password: ''
          },
          loading: false
        }
      },
      methods: {
        ...mapActions({
          login: 'auth/login'
        }),
        submit () {
          this.$validator.validateAll().then(result => {
            if (result) {
              this.loading = true
              this.login({
                fields: {
                  email: this.form.email,
                  password: this.form.password
                }
              }).then(() => {
                this.loading = false
                this.$store.dispatch('noti', { message: 'You are Log In!', type: 'success' })
                return this.$router.push({ path: '/' })
              }).catch((e) => {
                this.loading = false
                _.forEach(e.response.data.errors, (value, key) => {
                  this.errors.add(key, value[0])
                })
              })
            }
          })
        }
      }
    }
</script>

<style scoped>

</style>
