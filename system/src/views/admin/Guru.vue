<template>
  <div>
    <navbar/>
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
                <th class="text-left">Materi Pelajaran</th>
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