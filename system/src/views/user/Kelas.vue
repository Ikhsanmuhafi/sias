<template>
  <div class="Jadwal">
    <Navbar />
    <v-container>
      <v-card max-width="800" :elevation="6" class="mx-auto my-12">
        <v-col md="12">
          <v-card-title>
            <!-- <v-icon>mdi-google-classroom</v-icon> -->
             Kelas
          </v-card-title>

          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">ID</th>
                  <th class="text-left">Kode Kelas</th>
                  <th class="text-left">Wali kelas</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(kelas, index) in kelass" :key="kelas.id">
                  <td>{{ index + 1 }}</td>
                  <td>{{ kelas.kode_kelas }}</td>
                  <td>{{ kelas.biodata.name }}</td>
                </tr>
                <!-- <v-divider></v-divider> -->
              </tbody>
            </template>
          </v-simple-table>

          <v-card-actions> </v-card-actions>
        </v-col>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import Navbar from "../../components/user/Navbar.vue";
import axios from "axios";
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      kelass: [],
    };
  },
  methods: {
    setKelas(data) {
      this.kelass = data;
    },
  },
  mounted() {
    axios
      .get("http://192.168.1.33:8080/sekolah/kelas")
      .then((response) => this.setKelas(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>