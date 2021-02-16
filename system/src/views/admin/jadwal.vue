<template>
  <div class="Jadwal">
    <navbar />
    <v-container>
      <v-card :elevation="6">
        <v-card-title>
          <!-- <v-icon>mdi-book</v-icon> -->
          Jadwal
        </v-card-title>

        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">No</th>
                <th class="text-left">Kelas</th>
                <th class="text-left">Hari</th>
                <th class="text-left">Tanggal</th>
                <th class="text-left">Jam</th>
                <th class="text-left">Mata Pelajaran</th>
                <th class="text-left">Ruang</th>
                <th class="text-left">Guru</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(jadwal, index) in jadwals" :key="jadwal.id">
                <td>{{ index + 1 }}</td>
                <td>{{ jadwal.kelass.kode_kelas }}</td>
                <td>{{ jadwal.haris.hari }}</td>
                <td>{{ jadwal.tanggal }}</td>
                <td>{{ jadwal.jam }}</td>
                <td>{{ jadwal.mapels.mapel }}</td>
                <td>{{ jadwal.ruangs.ruang }}</td>
                <td>{{ jadwal.user.name }}</td>
              </tr>
              <!-- <v-divider></v-divider> -->
            </tbody>
          </template>
        </v-simple-table>

        <v-card-actions> </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import navbar from "../../components/admin/navbar.vue";
import axios from "axios"
export default {
  components: {
    navbar,
  },
  data() {
    return {
      jadwals: [],
    };
  },
  methods: {
    setJadwal(data) {
      this.jadwals = data;
    },
  },
  mounted(){
        axios
      .get("http://192.168.1.33:8080/sekolah/jadwalKelas")
      .then((response) => this.setJadwal(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>