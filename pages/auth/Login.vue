<template>
       <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
            <v-card>
                <v-card-title primary-title>
                    <div class="headline">Log In</div>
                </v-card-title>
                <v-form>
                  <v-card-text>
                      <v-layout row>
                          <v-flex xs12>
                              <v-text-field
                              v-model="form.email"
                              name="email"
                              label="Email"
                              prepend-icon="mail"
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
                              ></v-text-field>
                          </v-flex>
                      </v-layout>
                  </v-card-text>
                  <v-card-actions>
                    <v-layout>
                      <v-flex d-flex justify-space-between>
                        <v-btn flat type="submit" :block="$vuetify.breakpoint.xsOnly">Log In</v-btn>
                        <v-btn flat color="primary" :block="$vuetify.breakpoint.xsOnly">Forgot Your Password?</v-btn>
                      </v-flex>
                    </v-layout>
                  </v-card-actions>
                </v-form>
            </v-card>
        </v-flex>
</v-layout>
</template>

<script>
    export default {
      layout: 'Auth',
      data () {
        return {
          form: {
            email: '',
            password: ''
          }
        }
      }
    }
</script>

<style scoped>

</style>
