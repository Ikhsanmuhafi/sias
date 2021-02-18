<template>
  <div class="ProfilMurid">
    <Navbar />
    <v-container>
      <v-card class="mx-auto" max-width="500">
        <v-img
          src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_960_720.png"
          height="200px"
        ></v-img>

        <v-card-title>Profil Murid</v-card-title>

        <v-card-subtitle>Sistem Informasi Academy Sekolah</v-card-subtitle>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show" :key="user.id">
            <v-divider></v-divider>
            <v-card-text>
              <strong>Username</strong>
              <v-divider></v-divider>
              {{ user.username }}</v-card-text
            >
            <v-card-text>
              <strong>Kelas</strong>
              <v-divider></v-divider>
              {{ biodata.kelas.kode_kelas }}</v-card-text
            >
            <v-card-text>
              <strong>Alamat</strong>
              <v-divider></v-divider>
              {{ biodata.alamat }}</v-card-text
            >
            <v-card-text>
              <strong>Email</strong>
              <v-divider></v-divider>
              {{ biodata.email }}</v-card-text
            >
            <v-card-text>
              <strong>Jenis Kelaminmu</strong>
              <v-divider></v-divider>
              {{ biodata.gender }}</v-card-text
            >
            <v-card-text>
              <strong>Jurusan</strong>
              <v-divider></v-divider>
              {{ biodata.jurusan }}</v-card-text
            >
            <v-card-text>
              <strong>Nama</strong>
              <v-divider></v-divider>
              {{ biodata.name }}</v-card-text
            >
            <v-card-text>
              <strong>Nilai</strong>
              <v-divider></v-divider>
              {{ biodata.nilai }}</v-card-text
            >
            <v-card-text>
              <strong>No Identitas</strong>
              <v-divider></v-divider>
              {{ biodata.no_identitas }}</v-card-text
            >
            <v-card-text>
              <strong>No Telephone</strong>
              <v-divider></v-divider>
              {{ biodata.no_telp }}</v-card-text
            >
            <v-card-text>
              <strong>Pendidikan Perakhir</strong>
              <v-divider></v-divider>
              {{ biodata.pendidikan_terakhir }}</v-card-text
            >
          </div>
        </v-expand-transition>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import Navbar from "../../components/user/Navbar";
import axios from "axios";
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      show: false,
      user: {},
      biodata: {},
      // kelas: {},
    };
  },
  methods: {
    setuser(data) {
      this.user = data;
    },
    getBiodata() {
      axios
        .get(
          `http://192.168.1.33:8080/sekolah/user/biodata/${this.user.id_bio}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((response) => this.setBiodata(response.data))
        .catch((error) => console.log(error));
    },
    // getKelas() {
    //   axios
    //     .get(
    //       `http://192.168.1.33:8080/sekolah/kelas/${this.kelas.id_kelas}`,
    //       {
    //         headers: {
    //           Authorization: `Bearer ${localStorage.getItem("token")}`,
    //         },
    //       }
    //     )
    //     .then((response) => this.setKelas(response.data))
    //     .catch((error) => console.log(error));
    // },
    setBiodata(data) {
      this.biodata = data;
    },
    // setKelas(data) {
    //   this.kelas = data;
    // },
  },
  mounted() {
    axios
      .get("http://192.168.1.33:8080/sekolah/info", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        this.setuser(response.data);
        this.getBiodata();
        // this.getKelas();
      })
      .catch((error) => console.log(error));
  },
};
</script>