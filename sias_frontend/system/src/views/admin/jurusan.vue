<template>
  <div>
    <navbar />
    <v-container>
      <v-card :elevation="6">
        <v-card-title>Materi Pelajaran</v-card-title>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">No</th>
                <th class="text-left">Nama</th>
                <th class="text-left">Mata Pelajaran</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(jurusan, index) in jurusans" :key="jurusan.id">
                <td>{{ index + 1 }}</td>
                <td>{{ jurusan.name}}</td>
                <td>{{ jurusan.matPel.name }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>

        <!-- <v-card-action></v-card-action> -->
      </v-card>
    </v-container>
  </div>
</template>

<script>
import navbar from "../../components/admin/navbar.vue";
import axios from "axios";
export default {
  components: { navbar },
  data() {
    return {
      jurusans: []
      // nama: "",
      // idMataPelajaran: ""
    };
  },
  created: function() {
    this.getJurusans();
  },
  methods: {
    getJurusans: function() {
      axios
        .get("http://192.168.1.33:8080/sekolah/jurusan")
        .then(res => {
          this.jurusans = res.data;
          console.log(this.jurusans);
        })
        .catch(err => {
          // handle error
          console.log(err);
        });
    }
  }
};
</script>

<style>
</style>