<template>
  <v-app>
    <v-container>
      <v-row justify="center">
        <v-layout style="margin-top: 50px">
          <v-flex>
            <v-card max-width="400" :elevation="6" class="mx-auto my-12">
              <v-col md="12">
                <v-card-title class="justify-center">
                  <p>Sistem Academy Sekolah</p>
                </v-card-title>
                <v-row justify="center">
                  <v-col md="12">
                    <v-text-field label="NIS/NIK" single-line outlined v-model="username"></v-text-field>
                    <v-text-field
                      label="Password"
                      v-model="password"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="show1 ? 'text' : 'password'"
                      single-line
                      outlined
                      @click:append="show1 = !show1"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-col>
                  <v-btn
                    rounded
                    elevation="2"
                    color="#54a9f6"
                    class="ma-2 white--text"
                    block
                    @click="login"
                  >login</v-btn>
                  <!-- <p class="hem">ATAU</p>
                <h3 id="lupa-password">
                  <a href="/google" style="text-decoration: none"
                    >Masuk Dengan Google</a>
                  </h3>-->
                  <h4 id="lupa-password">
                    <a href="/lupapassword" style="text-decoration: none">Lupa Password?</a>
                  </h4>
                </v-col>
              </v-col>
            </v-card>
          </v-flex>
        </v-layout>
      </v-row>
    </v-container>
  </v-app>
</template>


<script>
import axios from "axios";
// import Navbarr from "../components/Navbarr.vue"
export default {
  // components:{
  //   // Navbarr
  // },
  data() {
    return {
      username: "",
      data: "",
      show1: false,
      password: "",
      rules: {
        required: value => !!value || "Required."
      }
    };
  },
  methods: {
    async login() {
      try {
        const res = await axios.post("http://192.168.1.33:8080/sekolah/login", {
          username: this.username,
          password: this.password
        });
        this.data = res.data;
        localStorage.setItem("token", this.data.accessToken);
        await this.info(this.data.accessToken);
        // this.$router.push("/jadwal");
        console.log(this.data);
      } catch (error) {
        console.log(error);
      }
    },
    async info(token) {
      try {
        const res = await axios.get("http://192.168.1.33:8080/sekolah/info", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const role = res.data.authorities;
        for (let i of role) {
          console.log(i);
          if (i.authority === "ROLE_ADMIN") {
            // console.log('Login admin success!')
            this.$router.push("/profiladmin");
          } else if (i.authority === "ROLE_MURID") {
            // console.log('Login siswa success!')
            this.$router.push("/profilmurid");
          } else if (i.authority === "ROLE_GURU") {
            // console.log('Login guru berhasil')
            this.$router.push("/guru");
          }
        }
        console.log(token);
        console.log(role);
      } catch (error) {
        console.log(error);
        console.log(token);
      }
    }
  }
};
</script>

<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
.v-margin-bottom {
  margin-bottom: 20px;
}
.ma-2 {
  display: flex;
  justify-content: center;
  align-items: center;
}
#lupa-password {
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
}
.hem {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
}
</style>