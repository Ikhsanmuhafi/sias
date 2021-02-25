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
                <!-- <th class="text-left">Materi Pelajaran</th> -->
              </tr>
            </thead>
            <tbody>
              <tr v-for="(guru, index) in gurus" :key="guru.id">
                <td>{{index +1}}</td>
                <td>{{guru.user.username}}</td>
                <td>{{guru.user.biodata ? guru.user.biodata.name :""}}</td>
                <!-- <td>{{guru.guruMataPelajaran}}</td> -->
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
      gurus: []
    };
  },
  created: function() {
    this.getGurus();
  },
  methods: {
    getGurus() {
      axios
        .get("http://192.168.1.33:8080/sekolah/guru")
        .then(res => {
          // console.log(res);
          this.gurus = res.data;
          console.log(this.gurus);
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