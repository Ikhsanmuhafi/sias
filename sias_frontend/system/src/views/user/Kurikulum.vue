<template>
  <div class="Kurikulum">
    <Navbar />
    <v-container>
      <v-row justify="center">
        <v-expansion-panels popout>
          <v-expansion-panel v-for="(item, i) in 1" :key="i">
            <v-expansion-panel-header>IPA</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-expansion-panels popout>
                <v-expansion-panel v-for="(item, i) in 1" :key="i">
                  <v-expansion-panel-header>Biologi</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <p>isi</p>
                    <br />
                    <p>isi</p>
                    <br />
                    <p>isi</p>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
              <br />
              <v-expansion-panels popout>
                <v-expansion-panel v-for="(item, i) in 1" :key="i">
                  <v-expansion-panel-header>Kimia</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <p>isi</p>
                    <br />
                    <p>isi</p>
                    <br />
                    <p>isi</p>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
              <br />
              <v-expansion-panels popout>
                <v-expansion-panel v-for="(item, i) in 1" :key="i">
                  <v-expansion-panel-header>Fisika</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <p>isi</p>
                    <br />
                    <p>isi</p>
                    <br />
                    <p>isi</p>
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
                  <v-expansion-panel-content>
                    <p>isi</p>
                    <br />
                    <p>isi</p>
                    <br />
                    <p>isi</p>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
              <br />
              <v-expansion-panels popout>
                <v-expansion-panel v-for="(item, i) in 1" :key="i">
                  <v-expansion-panel-header>Geografi</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <p>isi</p>
                    <br />
                    <p>isi</p>
                    <br />
                    <p>isi</p>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
              <br />
              <v-expansion-panels popout>
                <v-expansion-panel v-for="(item, i) in 1" :key="i">
                  <v-expansion-panel-header>Ekonomi</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <p>isi</p>
                    <br />
                    <p>isi</p>
                    <br />
                    <p>isi</p>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Navbar from "../../components/user/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>