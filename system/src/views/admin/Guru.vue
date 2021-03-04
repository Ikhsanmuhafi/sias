<template>
  <div>
    <navbar />
    <v-container>
      <v-card :elevation="6">
        <v-card-title>
          Guru
          <template>
            <v-dialog v-model="dialogAdd" persistent max-width="600px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn id="btnAdd" color="primary" dark v-bind="attrs" v-on="on">Add</v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline">Add Guru</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field label="User" v-model="user" required></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                  <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" @click="dialogAdd=false">Close</v-btn>
                  <v-btn color="blue darken-1" @click="addGuru" text>Save</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </template>
        </v-card-title>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">No</th>
                <th class="text-left">NIG</th>
                <th class="text-left">Nama Guru</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(guru, index) in gurus" :key="guru.id">
                <td>{{index +1}}</td>
                <td>{{guru.user.username}}</td>
                <td>{{guru.user.biodata ? guru.user.biodata.name :""}}</td>
                <v-btn @click="btnHapus(guru.id)">Hapus</v-btn>
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
      gurus: [],
      guru: "",
      dialogAdd: false,
      dialogEdit: false,
      user: 0
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
    },
    async addGuru() {
      axios
        .post("http://192.168.1.33:8080/sekolah/guru/add", {
          // kode_murid: this.id,
          user_id: this.user
          // id_jadwalMurid: parseInt(this.jadwalMurid)
        })
        .then(res => {
          console.log(res.data);
          // this.getMurids();
          // this.kodeMurid = "";
          this.user = parseInt();
          // this.jadwalMurid = parseInt();
          this.dialogAdd = false;
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
      axios
        .get("http://192.168.1.33:8080/sekolah/guru")
        .then(res => {
          console.log(res);
          this.gurus = res.data;
          console.log(this.gurus);
        })
        .catch(err => {
          // handle error
          console.log(err);
        });
    },
     async btnHapus(id) {
      try {
        await axios.delete(`http://192.168.1.33:8080/sekolah/guru/${id}`);
        // this.kelass = response.data;
        this.getGurus();
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style>
</style>