<template>
  <div class="Jadwal">
    <NavbarGuru />
    <v-container>
      <!-- Tambah Materi -->
      <v-card max-width="800" :elevation="6" class="mx-auto my-12">
        <v-col md="12">
          <v-card-title>
            Materi
            <v-spacer></v-spacer>
            <v-row justify="center">
              <v-dialog
                v-model="dialog"
                transition="dialog-top-transition"
                max-width="600px"
                class="mx-auto my-12"
              >
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
                          <v-select
                            v-model="names"
                            label="Mata Pelajaran"
                            :items="matpel"
                            item-value="id"
                            item-text="name"
                            :rules="matpela"
                          >
                          </v-select>

                          <v-textarea
                            outlined
                            label="Materi"
                            v-model="materis"
                            required
                            :rules="materiku"
                          >
                          </v-textarea>
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
          <!-- // -->
          <!-- Edit Materi -->
          <v-dialog v-model="dialogEdit" presistent max-width="600px">
            <v-card>
              <v-card-title>
                <span class="headline">Edit Materi</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col>
                      <v-select
                        v-model="ubahMapel.matpel"
                        label="Mata Pelajaran"
                        :items="matpel"
                        item-value="id"
                        item-text="name"
                      >
                      </v-select>

                      <v-textarea
                        outlined
                        label="Materi"
                        v-model="ubahMapel.materi"
                        required
                      >
                      </v-textarea>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red" text @click="dialogEdit = false"
                  >Batal</v-btn
                >
                <v-btn
                  color="green"
                  @click="btnEdit(ubahMapel.id, ubahMapel)"
                  text
                  >Simpan</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-dialog>
          <!-- // -->
          <!-- hapus Materi -->
            
          <!-- // -->
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">No</th>
                  <th class="text-left">Mata Pelajaran</th>
                  <th class="text-left">Materi</th>
                  <th class="text-left"></th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(kurikulum, index) in kurikulums"
                  :key="kurikulum.id"
                >
                  <td class="text-left">{{ index + 1 }}</td>
                  <td class="text-left">{{ kurikulum.matPel.name }}</td>
                  <td class="text-left">{{ kurikulum.materi }}</td>
                  <td>
                    <v-btn
                      type="submit"
                      small
                      class="mx-1"
                      dark
                      color="blue"
                      @click="openEditDialog(kurikulum)"
                    >
                      Edit
                    </v-btn>
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
      pelajaran: "",
      names: "",
      materis: "",
      matpel: [],
      ubahMapel: {},
      dialogEdit: false,
      matpela: [(value) => value != "" || ""],
      materiku: [(value) => value != "" || ""],
    };
  },
  methods: {
    setMateri(data) {
      this.kurikulums = data;
    },
    getPelajaran() {
      axios
        .get("http://192.168.1.33:8080/sekolah/matpel")
        .then((response) => {
          this.matpel = response.data;
        })
        .catch((error) => console.log(error));
    },
    hapusMateri(id) {
      axios
        .delete("http://192.168.1.33:8080/sekolah/kurikulum/" + id)
        .then(() => {
          this.kurikulums.splice(id, 1);
          this.$toast.error("Berhasil Dihapus", {
            type: "error",
            position: "top-right",
            duration: 2000,
            dismissible: true,
          });
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
        .post("http://192.168.1.33:8080/sekolah/kurikulum/add", {
          id_matpel: this.names,
          materi: this.materis,
        })
        .then((res) => {
          this.$toast.success("Berhasil DItambahkan", {
            type: "success",
            position: "top-right",
            duration: 3000,
            dismissible: true,
          });
          //updet materi
          axios
            .get("http://192.168.1.33:8080/sekolah/kurikulum")
            .then((response) => this.setMateri(response.data))
            .catch((error) => console.log(error));

          this.names = "";
          this.materis = "";
          this.dialog = false;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    btnEdit: function (id, data) {
      console.log(data);
      axios
        .put(`http://192.168.1.33:8080/sekolah/kurikulum/${id}`, data)
        .then((res) => {
          console.log(res);
          this.newBiodataID = null;
          this.$toast.error("Berhasil Diubah", {
            type: "info",
            position: "top-right",
            duration: 2000,
            dismissible: true,
          });
        })
        .finally(() => {
          this.dialogEdit = false;
          this.ubahMapel = "";
        });
    },
    openEditDialog(kurikulum) {
      this.ubahMapel = kurikulum;
      this.dialogEdit = true;
    },
  },
  mounted() {
    axios
      .get("http://192.168.1.33:8080/sekolah/kurikulum")
      .then((response) => this.setMateri(response.data))
      .catch((error) => console.log(error));
    console.log(this.$refs.editDialog);
    this.getPelajaran();
    // this.EditMateri();
    // this.getMateriku();
  },
};
</script>

<style>
</style>