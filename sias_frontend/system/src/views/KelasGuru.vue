<template>
<div class="Jadwal">
  <NavbarGuru/>
  <v-container>
    <v-card :elevation="6">
      <v-card-title>
        <v-icon>mdi-door</v-icon>
        Kelas
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
            <tr v-for="item in desserts" :key="item.name">
              <td>{{ item.id }}</td>
              <td>{{ item.tanggal }}</td>
              <td>{{ item.hari }}</td>
              <td>{{ item.matapelajaran }}</td>
              <td>{{ item.jammulai }}</td>
              <td>{{ item.jamselesai }}</td>
              <td>{{ item.guru }}</td>
            </tr>
            <v-divider></v-divider>
          </tbody>
        </template>
      </v-simple-table>

      <v-card-actions> </v-card-actions>
    </v-card>
  </v-container>
  </div>
</template>

<script>
import NavbarGuru from "../components/NavbarGuru.vue";
export default {
  components: {
    NavbarGuru
  },
  data() {
    return {
      desserts: [
        {
          id: 1,
          tanggal: "27 Desember 2020",
          hari: "Kamis",
          matapelajaran: "Fisikawin",
          jammulai: "08:00",
          jamselesai: "15:00",
          guru: "Nita Rosiana M.pdi",
        },
        // {
        //   id: 1,
        //   tanggal: "27 Desember 2020",
        //   hari: "Kamis",
        //   matapelajaran: "Fisikawin",
        //   jammulai: "08:00",
        //   jamselesai: "15:00",
        //   guru: "Nita Rosiana M.pdi",
        // },
        {
          id: 2,
          tanggal: "27 Desember 2020",
          hari: "Kamis",
          matapelajaran: "Fisikawin",
          jammulai: "08:00",
          jamselesai: "15:00",
          guru: "Nita Rosiana M.pdi",
        },
      ],
    };
  },
};
</script>

<style>
</style>