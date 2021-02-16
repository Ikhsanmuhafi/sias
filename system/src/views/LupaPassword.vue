<template>
  <div class="LupaPassword">
    <!-- <Navbarr /> -->
    <v-container>
      <v-row justify="center">
        <v-layout style="margin-top: 50px">
          <v-flex>
            <v-card class="mx-auto" max-width="500">
              <v-card-title
                class="title font-weight-regular justify-space-between"
              >
                <span>{{ currentTitle }}</span>
                <v-avatar
                  color="#54a9f6"
                  class="subheading white--text"
                  size="24"
                  v-text="step"
                ></v-avatar>
              </v-card-title>

              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-card-text>
                    <v-text-field
                      single-line
                      outlined
                      label="Email"
                    ></v-text-field>
                    <span class="caption grey--text text--darken-1">
                      Ini adalah email yang akan Anda gunakan untuk masuk
                    </span>
                  </v-card-text>
                </v-window-item>

                <v-window-item :value="2">
                  <v-card-text>
                    <v-text-field
                      single-line
                      outlined
                      label="Password"
                      type="password"
                    ></v-text-field>
                    <v-text-field
                      outlined
                      single-line
                      label="Confirm Password"
                      type="password"
                    ></v-text-field>
                    <span class="caption grey--text text--darken-1">
                      Silakan masukkan kata sandi untuk akun Anda
                    </span>
                  </v-card-text>
                </v-window-item>

                <v-window-item :value="3">
                  <div class="pa-4 text-center">
                    <h3 class="title font-weight-light mb-2">Selamat datang</h3>
                    <span class="caption grey--text"
                      >Silahkan Dicek kembali</span
                    >
                  </div>
                </v-window-item>
              </v-window>

              <v-divider></v-divider>

              <v-card-actions>
                <v-btn :disabled="step === 1" text @click="step--">
                  Kembali
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                  :disabled="step === 3"
                  color="#54a9f6"
                  dark
                  depressed
                  @click="step++"
                >
                  Lanjut
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// import Navbarr from "../components/Navbarr";
export default {
  components: {
    // Navbarr,
  },
  data: () => ({
    step: 1,
  }),

  computed: {
    currentTitle() {
      switch (this.step) {
        case 1:
          return "Lupa Password";
        case 2:
          return "Buat password";
        default:
          return "Account created";
      }
    },
  },
};
</script>