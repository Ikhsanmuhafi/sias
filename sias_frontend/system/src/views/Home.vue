<template>
  <v-app>
    <v-container>
      <v-row justify="center">
        <v-layout style="margin-top: 50px">
          <v-flex>
            <v-card max-width="400" :elevation="6" class="mx-auto my-15">
              <v-col md="15">
                <v-card-title class="justify-center">
                <p>Sistem Infromasi Academy Sekolah</p>
                  <v-form ref="form">
                    <v-alert dense dismissible color="error" type="error" :value="error">
                      NIS/NIK password tidak sesuai!
                    </v-alert>
                  </v-form>
                </v-card-title>
                <v-row justify="center">
                  <v-col md="12">
                    <v-text-field
                      label="NIS/NIK"
                      single-line
                      outlined
                      v-model="username"
                      :rules="nameRules"
                    ></v-text-field>
                    <v-text-field
                      label="Password"
                      v-model="password"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="show1 ? 'text' : 'password'"
                      single-line
                      outlined
                      @click:append="show1 = !show1"
                      :rules="pasRules"
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
                    >login</v-btn
                  >
                  <h4 id="lupa-password">
                    <a href="/lupapassword" style="text-decoration: none"
                      >Lupa Password?</a
                    >
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
export default {
  data() {
    return {
      username: "",
      data: "",
      password: "",
      show1: false,
      error: false,
      nameRules: [(value) => value != "" ||""],
      pasRules: [(value) => value != "" ||""],
      rules: {
        required: (value) => !!value || "Required.",
      },
    };
  },
  methods: {
    async login() {
      try {
        const res = await axios.post("http://192.168.1.33:8080/sekolah/login", {
          username: this.username,
          password: this.password,
        });
        this.data = res.data;
        localStorage.setItem("token", this.data.accessToken);
        await this.info(this.data.accessToken);
        console.log(this.data);
      } catch (error) {
        this.error = true;
        console.log(error);
      }
    },
    async info(token) {
      try {
        const res = await axios.get("http://192.168.1.33:8080/sekolah/info", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const role = res.data.authorities;
        for (let i of role) {
          console.log(i);
          if (i.authority === "ROLE_ADMIN") {
            this.$toast.success("Login admin success!", {
              type: "success",
              position: "top",
              duration: 1000,
              dismissible: true,
            });
            this.$router.push("/profiladmin");
          } else if (i.authority === "ROLE_MURID") {
            this.$toast.success("Login siswa success!", {
              type: "success",
              position: "top",
              duration: 1000,
              dismissible: true,
            });
            this.$router.push("/profilmurid");
          } else if (i.authority === "ROLE_GURU") {
            this.$toast.success("Login guru berhasil", {
              type: "success",
              position: "top",
              duration: 1000,
              dismissible: true,
            });
            this.$router.push("/guru");
          }
        }
        console.log(token);
        console.log(role);
      } catch (error) {
        console.log(error);
        console.log(token);
      }
    },
  },
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