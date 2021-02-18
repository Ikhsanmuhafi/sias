<template>
  <div>
    <navbar />
    <v-container>
      <v-card :elevation="6">
        <v-card-title>Guru</v-card-title>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">No</th>
                <th class="text-left">NIG</th>
                <th class="text-left">Nama Guru</th>
                <th class="text-left">Materi Pelajaran</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(guru, index) in gurus" :key="guru.id">
                <td>{{index +1}}</td>
                <td>{{guru.guruNik}}</td>
                <td>{{guru.guruNama}}</td>
                <td>{{guru.guruMataPelajaran}}</td>
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
import navbar from "../../components/admin/navbar";
export default {
  components: {
    navbar
  },
  data() {
    return {
      gurus: [
        {
          guruNik: "1",
          guruNama: "ANDI",
          guruMataPelajaran: "MTK"
        }
      ]
      // guruNo: "",
      // dialogAdd: false,
      // dialogEdit: false,
      // dialogDelete: false,
      // guruIdEdit: "",
      // guruNikEdit: "",
      // guruNamaEdit: "",
      // guruMataPelajaranEdit: "",
      // guruIdDelete: "",
      // guruNikDelete: "",
      // guruNamaDelete: ""
    };
    // mounted () {
    //   axios
    //     .get("http://192.168.1.33:8080//kelas")
    //     .then(response => this.setKelas(response.data))
    //     .catch(error => console.log(error));
    // };
    // created:function () {
    //   this.gs()
    // },
    //     methods: {
    //       getGurus: function () {
    // axios.get("")
    //       }
    //
  }
};
</script>

<style>
</style>