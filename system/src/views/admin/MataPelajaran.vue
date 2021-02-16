<template>
  <div>
    <navbar/>
    <v-container>
      <v-card :elevation="6">
        <v-card-title>Materi Pelajaran</v-card-title>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">No</th>
                <th class="text-left">Nama Mata Pelajaran</th>
                <th class="text-left">Nama Guru</th>
                <th class="text-left">Tanggal/Jam</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>""</td>
                <td>""</td>
                <td>""</td>
                <td>""</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>

        <v-card-action></v-card-action>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import navbar from "../../components/admin/navbar"
export default {
  components:{
    navbar
  }
};
</script>

<style>
</style>