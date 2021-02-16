<template>
  <div class="Jadwal">
    <NavbarGuru />
    <v-container>
      <v-card max-width="800" :elevation="6" class="mx-auto my-12">
        <v-col md="12">
          <v-card-title>
            <!-- <v-icon>mdi-google-classroom</v-icon> -->
            Materi
            <v-spacer></v-spacer>
            <v-row justify="center">
              <v-dialog v-model="dialog" persistent max-width="600px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="green" dark small v-bind="attrs" v-on="on">
                    Tambah
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">Tambah Materi</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            label="Mata Pelajaran"
                            v-model="mapel"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            label="Materi" v-model="des"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <!-- <v-text-field
                            label="jurusan"
                            required
                          ></v-text-field> -->
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="red" text @click="dialog = false">
                      batal
                    </v-btn>
                    <v-btn color="green" text @click="tambahMateri">
                      Simpan
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
          </v-card-title>

          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">No</th>
                  <th class="text-left">Mata Pelajaran</th>
                  <th class="text-left">Materi</th>
                  <th class="text-left">Jurusan/Kelas</th>
                  <!-- <th class="text-left">Edit</th> -->
                </tr>
              </thead>
              <tbody>
                <tr v-for="(materi, index) in materis" :key="materi.id">
                  <td>{{index + 1}}</td>
                  <td>{{ materi.matpel.name }}</td>
                  <td>{{ materi.deskripsi }}</td>
                  <td>{{ materi.matpel.jurusan.name }}</td>
                  <td>
                    <!-- <v-btn small class="mx-1" dark color="green"> Edit </v-btn> -->
                    <v-btn
                      type="submit"
                      small
                      color="red"
                      dark
                      class="mx-1"
                      @click="hapusMateri(materi.id)"
                    >
                      Hapus
                    </v-btn>
                  </td>
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
import NavbarGuru from "../../components/user/NavbarGuru.vue";
import axios from "axios";
export default {
  components: {
    NavbarGuru,
  },
  data() {
    return {
      dialog: false,
      materis: '',
      mapel:'',
      des:'',
    };
  },
  methods: {
    setMateri(data) {
      this.materis = data;
    },
    hapusMateri(id) {
      axios.delete("http://192.168.1.33:8080/sekolah/materi/" + id)
      .then(() => {
        this.materis.splice(id, 1);
        console.log(this.materis);
      //updet materi
        axios
          .get("http://192.168.1.33:8080/sekolah/materi")
          .then((response) => this.setMateri(response.data))
          .catch((error) => console.log(error));
      });
    },
    tambahMateri(){
      axios.post("http://192.168.1.33:8080/sekolah/materi/add",{
        deskripsi: this.des,
        id_matpel: parseInt(this.mapel)
      })
      .then(res=>{
        this.setMateri();
        this.des = '';
        this.mapel = parseInt();
        this.dialog = false;
        console.log(res);
      })
      .catch(err=> {
        console.log(err);
      })
    },
  },
  mounted() {
    axios
      .get("http://192.168.1.33:8080/sekolah/materi")
      .then((response) => this.setMateri(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>