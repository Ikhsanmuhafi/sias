<template>
  <nav>
    <v-navigation-drawer permanent color="grey lighten-1" dense app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Siswa </v-list-item-title>
          <!-- <v-list-item-subtitle>program</v-list-item-subtitle> -->
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
      <template>
        <!-- <v-menu offset-y> -->
          <!-- <v-btn class="" icon slot="activator">
            <v-icon>mdi-chevron-down</v-icon>
            <v-icon>mdi-account-box</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile-title>
              <v-icon left></v-icon>
              <span class="grey--text"></span>
            </v-list-tile-title>
          </v-list>
        </v-menu> -->
      </template>
      <v-btn rounded text color="red" @click="handleLogout"> Logout</v-btn>
      <v-btn to="/murid" color="black" icon> <v-icon>mdi-account</v-icon> </v-btn>
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
        // { title: "Profil", icon: "mdi-account", route: "/murid" },
        { title: "Jadwal", icon: "mdi-book", route: "/jadwal" },
        { title: "Kelas", icon: "mdi-door", route: "/kelas" },
      ],
            menu: [
        {
          icon: "account_circle",
          name: "Administrator",
          route: "administrator",
        },
        { icon: "flight_takeoff",
         name: "Logout", 
         route: "logout" 
        },
      ],
    };
  },
  methods: {
    handleLogout() {
      var yakin = confirm("Apakah kamu yakin ingin keluar");
      if (yakin) {
        window.location = "/";
      localStorage.removeItem('token')

      } else {
        document.write = "http://localhost:8080/#/jadwal";
      }
    },
  },
};
</script>