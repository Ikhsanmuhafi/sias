<template>
  <nav>
    <v-navigation-drawer permanent color="grey lighten-1" dense app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Guru</v-list-item-title>
          <v-list-item-subtitle>program</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list shaped dense nav>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item v-for="item in items" :key="item.title" :to="item.route">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <template v-slot:append> </template>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-container>
      <v-toolbar-title class="justify-center">
        <strong>Sistem Informasi academy Sekolah</strong>
      </v-toolbar-title>
      </v-container>
      <v-spacer></v-spacer>
      <v-btn rounded text color="red" @click="handleLogout"> Logout </v-btn>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  name: "App",
  data: () => {
    return {
      drawer: false,
      selectedItem: 1,
      items: [
        { title: "Profil", icon: "mdi-account", route: "/guru" },
        { title: "Jadwal", icon: "mdi-book", route: "/jadwalguru" },
        { title: "Kelas", icon: "mdi-door", route: "/kelasguru" },
        {title: "Materi", icon: "mdi-book", route: "/materi"}
      ],
    };
  },
  methods: {
    handleLogout() {
      var yakin = confirm("Apakah kamu yakin ingin keluar");
      if (yakin) {
        window.location = "/";
      } else {
        document.write = "http://localhost:8080/#/admin";
      }
    },
  },
};
</script>