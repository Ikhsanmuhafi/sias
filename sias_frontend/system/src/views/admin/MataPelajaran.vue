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
              </tr>
            </thead>
            <tbody>
              <tr v-for="(mata ,index) in matas" :key="mata.id">
                <td>{{ index+1 }}</td>
                <td>{{ mata.name}}</td>
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
import axios from "axios";
export default {
  components: {
    navbar
  },
  data() {
    return {
      matas: []
    };
  },
  created: function() {
    this.getMatas();
  },
  methods: {
    getMatas: function() {
      axios
        .get("http://192.168.1.33:8080/sekolah/matpel")
        .then(res => {
          this.matas = res.data;
          console.log(this.matas);
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