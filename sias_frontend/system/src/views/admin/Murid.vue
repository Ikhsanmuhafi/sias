<template>
  <div>
    <navbar />
    <v-container>
      <v-card :elevation="6">
        <v-card-title>
          Murid
          <template>
            <v-dialog v-model="dialogAdd" persistent max-width="600px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn id="btnAdd" color="primary" dark v-bind="attrs" v-on="on">Add</v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline">Add Murid</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <!-- <v-col cols="12">
                        <v-text-field label="Kode Kelas*" v-model="kodeMurid" required></v-text-field>
                      </v-col>-->
                      <v-col cols="12">
                        <v-text-field label="User" v-model="user" required></v-text-field>
                      </v-col>
                      <!-- <v-col cols="12">
                        <v-text-field label="jadwal" v-model="kelas" required></v-text-field>
                      </v-col>-->
                    </v-row>
                  </v-container>
                  <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" @click="dialogAdd=false">Close</v-btn>
                  <v-btn color="blue darken-1" @click="addKelas" text>Save</v-btn>
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
                <th class="text-left">NIK</th>
                <th class="text-left">Nama</th>
                <!-- <th class="text-left">Kelas</th> -->
              </tr>
            </thead>
            <tbody>
              <tr v-for="(murid, index) in murids " :key="murid.id">
                <td>{{index+1}}</td>
                <td>{{murid.user ? murid.user.username :""}}</td>
                <td>{{murid.user.biodata ? murid.user.biodata.name :""}}</td>
                <!-- <td>{{murid.kelas ? murid.kelas.kode_kelas:""}}</td> -->
                <!-- <td>""</td> -->

                <v-btn class="text-right" @click="btnHapus(murid.id)">hapus</v-btn>
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
      murids: [],
      kodeMurid: "",
      user: 0,
      kelas: "",
      dialogEdit: false,
      dialogAdd: false
    };
  },
  created: function() {
    this.getMurids();
  },
  methods: {
    getMurids() {
      axios
        .get("http://192.168.1.33:8080/sekolah/murid")
        .then(res => {
          console.log(res);
          this.murids = res.data;
          console.log(this.murids);
        })
        .catch(err => {
          // handle error
          console.log(err);
        });
    },
    async addKelas() {
      axios
        .post("http://192.168.1.33:8080/sekolah/murid/add", {
          // kode_murid: this.id,
          user_id: this.user
          // id_jadwalMurid: parseInt(this.jadwalMurid)
        })
        .then(res => {
          console.log("oiiiiii", res.data);
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
        .get("http://192.168.1.33:8080/sekolah/murid")
        .then(res => {
          console.log(res);
          this.murids = res.data;
          console.log(this.murids);
        })
        .catch(err => {
          // handle error
          console.log(err);
        });
    },
    async btnHapus(id) {
      try {
        await axios.delete(`http://192.168.1.33:8080/sekolah/murid/${id}`);
        // this.kelass = response.data;
        this.getMurids();
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style>
</style>