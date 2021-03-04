<template>
  <div class="Jadwal">
    <NavbarGuru />
    <v-container>
      <v-card :elevation="6">
        <v-card-title>
          <v-icon>mdi-book</v-icon>Jadwal
        </v-card-title>

        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">ID</th>
                <th class="text-left">Tanggal</th>
                <th class="text-left">Hari</th>
                <th class="text-left">Mata Pelajaran</th>
                <th class="text-left">Jam Mulai</th>
                <th class="text-left">Jam Selesai</th>
                <th class="text-left">Guru</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>""</td>
                <td>""</td>
                <td>""</td>
                <td>""</td>
                <td>""</td>
                <td>""</td>
                <td>""</td>
              </tr>
              <v-divider></v-divider>
            </tbody>
          </template>
        </v-simple-table>

        <v-card-actions></v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import NavbarGuru from "../../components/user/NavbarGuru";
export default {
  components: {
    NavbarGuru
  },
  data() {
    return {
    
    };
  }
};
</script>

<style>
</style>