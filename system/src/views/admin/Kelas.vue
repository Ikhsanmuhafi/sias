<template>
  <div class="Jadwal">
    <navbar />
    <v-container>
      <v-card max-width="800" :elevation="6" class="mx-auto my-12">
        <v-col md="12">
          <v-card-title>
            <!-- <v-icon>mdi-google-classroom</v-icon> -->
            Kelas
            <!-- Modal tamabah kelas -->
            <template>
              <v-dialog v-model="dialogAdd" persistent max-width="600px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn id="btnAdd" color="primary" dark v-bind="attrs" v-on="on">Add</v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">Add Kelas</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12">
                          <v-text-field label="Kode Kelas*" v-model="kodeKelas" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field label="User" v-model="user" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field label="jadwal" v-model="jadwal" required></v-text-field>
                        </v-col>
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
                  <th class="text-left">ID</th>
                  <th class="text-left">Kode Kelas</th>
                  <th class="text-left">Wali kelas</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(kelas, index) in kelass" :key="kelas.id">
                  <td>{{ index + 1 }}</td>
                  <td>{{ kelas.kode_kelas }}</td>
                  <td>{{ kelas.biodata ? kelas.biodata.name : '-' }}</td>
                  <td class="text-right">
                    <v-btn class="btnEdit" @click="openEditDialog(kelas)">edit</v-btn>
                    <v-btn id="btnHapus" @click="btnHapus(kelas.id)">hapus</v-btn>
                  </td>
                </tr>
                <!-- <v-divider></v-divider> -->
              </tbody>
            </template>
          </v-simple-table>

          <v-card-actions></v-card-actions>
        </v-col>
      </v-card>
    </v-container>

    <v-dialog v-model="dialogEdit" presistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Edit Kelas</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Kode Kelas*" v-model="kelasYangMauDiedit.kode_kelas" required></v-text-field>
              </v-col>
              <v-col v-if="kelasYangMauDiedit.biodata" cols="12">
                <v-text-field label="User" v-model="kelasYangMauDiedit.biodata.id" required></v-text-field>
              </v-col>
              <v-col v-else cols="12">
                <v-text-field label="User" v-model="newBiodataID" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="jadwal" v-model="kelasYangMauDiedit.id_jadwal" required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" @click="dialogEdit=false">Close</v-btn>
          <!-- kelasYangMauDiedit.id, kelas itu adalah data dari backend yang di ambil oleh frontend  -->
          <!-- didalam btnEdit itu endpoint/parameter yang diambil adalah id ,data -->
          <v-btn
            color="blue darken-1"
            @click="btnEdit(kelasYangMauDiedit.id, kelasYangMauDiedit, newBiodataID)"
            text
          >Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
      kelass: [],
      dialogAdd: false,
      dialogEdit: false,
      kelasYangMauDiedit: {},
      kodeKelas: "",
      user: "",
      jadwal: "",
      newBiodataID: null
    };
  },

  created: function() {
    this.getKelass();
  },
  mounted() {
    console.log(this.$refs.editDialog);
  },
  methods: {
    getKelass: function() {
      axios
        .get("http://192.168.1.33:8080/sekolah/kelas")
        .then(res => {
          this.kelass = res.data;
          console.log(this.kelass);
        })
        .catch(err => {
          // handle error
          console.log(err);
        });
    },

    async btnHapus(id) {
      try {
        await axios.delete(`http://192.168.1.33:8080/sekolah/kelas/${id}`);
        // this.kelass = response.data;
        this.getKelass();
      } catch (error) {
        console.log(error);
      }
    },
    async addKelas() {
      axios
        .post("http://192.168.1.33:8080/sekolah/kelas/add", {
          kode_kelas: this.kodeKelas,
          id_user: parseInt(this.user),
          id_jadwal: parseInt(this.jadwal)
        })
        .then(res => {
          this.getKelass();
          this.kodeKelas = "";
          this.user = parseInt();
          this.jadwal = parseInt();
          this.dialogAdd = false;
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });

      axios
        .get("http://192.168.1.33:8080/sekolah/kelas")
        .then(res => {
          console.log(res);
          this.kelass = res.data;
        })
        .catch(err => {
          // handle error
          console.log(err);
        });
    },

    // edit adalah get data dan insert
    // get data diambil didalam v-model menggunakan kelas.kode_kelas dan kelas.biodata
    // biodataID dicek dulu ada atau tidaknya

    btnEdit: function(id, data, biodataID) {
      console.log(biodataID);
      if (biodataID != null) data = { ...data, id_user: biodataID };
      console.log(data);
      axios
        .put(`http://192.168.1.33:8080/sekolah/kelas/${id}`, data)
        .then(res => {
          console.log(res);
          this.newBiodataID = null;
        })
        .finally(() => {
          this.dialogEdit = false;
          this.kelasYangMauDiedit = {};
        });
      // axios
      // .get("http://192.168.1.33:8080/sekolah/kelas")
      // .then(res => {
      //   this.kelass = res.data;
      // })
      // .catch(err => {
      //   // handle error
      //   console.log(err);
      // });
    },
    openEditDialog(kelas) {
      this.kelasYangMauDiedit = kelas;
      this.dialogEdit = true;
    }
  }
};
</script>

<style>
.btnEdit {
  margin-right: 10px;
}
#btnAdd {
  margin-left: 670px;
}
</style>