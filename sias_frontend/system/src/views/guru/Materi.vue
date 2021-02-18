<template>
  <div class="Jadwal">
    <!-- <v-container>
      <h1>Materi</h1>
    </v-container> -->
    <NavbarGuru />
    <!-- <v-card max-width="800" :elevation="6" class="mx-auto my-12">
      <v-container>
        <v-row justify="center">
          <v-expansion-panels popout>
            <v-expansion-panel v-for="(item, i) in 1" :key="i">
              <v-expansion-panel-header>IPA</v-expansion-panel-header>
              <v-spacer></v-spacer>
              <v-expansion-panel-content>
                <v-expansion-panels popout>
                  <v-expansion-panel v-for="(item, i) in 1" :key="i">
                    <v-expansion-panel-header>Biologi</v-expansion-panel-header>
                    <v-expansion-panel-content
                      v-for="materi in materis"
                      :key="materi.id"
                    >
                      <p>{{ materi.deskripsi }}</p>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
                <v-expansion-panels popout>
                  <v-expansion-panel v-for="(item, i) in 1" :key="i">
                    <v-expansion-panel-header>Kimia</v-expansion-panel-header>
                    <v-expansion-panel-content
                      v-for="materi in materis"
                      :key="materi.id"
                    >
                      <p>{{ materi.deskripsi }}</p>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
                <v-expansion-panels popout>
                  <v-expansion-panel v-for="(item, i) in 1" :key="i">
                    <v-expansion-panel-header>Fisika</v-expansion-panel-header>
                    <v-expansion-panel-content
                      v-for="materi in materis"
                      :key="materi.id"
                    >
                      <p>{{ materi.deskripsi }}</p>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
          <v-expansion-panels popout>
            <v-expansion-panel v-for="(item, i) in 1" :key="i">
              <v-expansion-panel-header>IPS</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-expansion-panels popout>
                  <v-expansion-panel v-for="(item, i) in 1" :key="i">
                    <v-expansion-panel-header>Sejarah</v-expansion-panel-header>
                    <v-expansion-panel-content
                      v-for="materi in materis"
                      :key="materi.id"
                    >
                      <p>{{ materi.deskripsi }}</p>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
                <v-expansion-panels popout>
                  <v-expansion-panel v-for="(item, i) in 1" :key="i">
                    <v-expansion-panel-header>Geografi</v-expansion-panel-header>
                    <v-expansion-panel-content v-for="materi in materis" :key="materi.id">
                      <p>{{materi.deskripsi}}</p>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
                <v-expansion-panels popout>
                  <v-expansion-panel v-for="(item, i) in 1" :key="i">
                    <v-expansion-panel-header>Ekonomi</v-expansion-panel-header>
                    <v-expansion-panel-content v-for="materi in materis" :key="materi.d">
                      <p>{{materi.deskripsi}}</p>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-row>
      </v-container>
    </v-card> -->
    <v-container>
      <v-card max-width="800" :elevation="6" class="mx-auto my-12">
        <v-col md="12">
          <v-card-title>
            <!-- <v-icon>mdi-google-classroom</v-icon> -->
            Materi
            <v-spacer></v-spacer>
            <v-row justify="center">
              <v-dialog v-model="dialog" persistent max-width="400px">
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
                        <v-col>
                          <!-- <v-select v-model="names" label="Mata Pelajaran" :items="['1', '2']">
                          </v-select> -->
                          <v-text-field
                            label="Mata Pelajaran"
                            v-model="names"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col>
                        <v-text-field
                          label="Materi"
                          v-model="materis"
                          required
                        ></v-text-field>
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
                  <!-- <th class="text-left">Jurusan/Kelas</th> -->
                  <!-- <th class="text-left">Edit</th> -->
                </tr>
              </thead>
              <tbody>
                <tr v-for="(kurikulum, index) in kurikulums" :key="kurikulum.id">
                  <td>{{ index + 1 }}</td>
                  <td>{{ kurikulum.matPel.name }}</td>
                  <td>{{ kurikulum.materi.deskripsi }}</td>
                  <!-- <td>{{ materi.matpel.jurusan.name }}</td> -->
                  <td>
                    <v-btn small class="mx-1" dark color="blue"> Edit </v-btn>
                    <v-btn
                      type="submit"
                      small
                      color="red"
                      dark
                      class="mx-1"
                      @click="hapusMateri(kurikulum.id)"
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
      kurikulums: [],
      // mapel: "",
      // des: "",
      names: "",
      materis:""
    };
  },
  methods: {
    setMateri(data) {
      this.kurikulums = data;
    },
    hapusMateri(id) {
      axios.delete("http://192.168.1.33:8080/sekolah/kurikulum/" + id).then(() => {
        this.kurikulums.splice(id, 1);
        console.log(this.kurikulums);
        //updet materi
        axios
          .get("http://192.168.1.33:8080/sekolah/kurikulum")
          .then((response) => this.setMateri(response.data))
          .catch((error) => console.log(error));
      });
    },
    tambahMateri() {
      axios
      .post("http://192.168.1.33:8080/sekolah/kurikulum/add",{
        name: this.names,
        id_materi: parseInt(this.materis)
      })
      // axios
      //   .post("http://192.168.1.33:8080/sekolah/materi/add", {
      //     deskripsi: this.des,
      //     id_matpel: parseInt(this.mapel),
      //   })
        .then((res) => {
          //updet materi
          axios
            .get("http://192.168.1.33:8080/sekolah/kurikulum")
            .then((response) => this.setMateri(response.data))
            .catch((error) => console.log(error));

          this.names = "";
          this.materis = parseInt();
          this.dialog = false;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    axios
      .get("http://192.168.1.33:8080/sekolah/kurikulum")
      .then((response) => this.setMateri(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>