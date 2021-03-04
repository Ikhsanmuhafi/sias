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
                <th class="text-left">Nama Ruang</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(ruang, index) in ruangs" :key="ruang.id">
                <td>{{ index + 1 }}</td>
                <td>{{ ruang.name }}</td>
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
  components: {
    navbar
  },
  data() {
    return {
      ruangs: []
    };
  },
  created: function() {
    this.getRuangs();
  },
  methods: {
    getRuangs: function() {
      axios
        .get("http://192.168.1.33:8080/sekolah/ruang")
        .then(res => {
          this.ruangs = res.data;
          console.log(this.ruangs);
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
