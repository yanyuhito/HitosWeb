<template>
  <v-app>
    <v-app-bar
      app
      color="light green"
      elevation="6"
      dark="true"
      fade-img-on-scroll="true"
      tile="true"
    >
      <v-col class="d-flex align-center" cols="3">
        <v-img
          alt="my icon"
          class="shrink mr-2"
          contain
          src="../public/icon.png"
          transition="scale-transition"
          width="40"
        />
        <h3>小小文青的秘密天地</h3>
      </v-col>
      <v-divider vertical/>
        <!--以上是左上角的logo-->
      <v-spacer></v-spacer>

      <v-tabs fixed-tabs="true">
      <v-tab @click="$router.push('/')"><h3>ＨＯＭＥ</h3></v-tab>
      <v-divider vertical/>
      <v-tab @click="$router.push('/my_family')"><h3>家庭天地</h3></v-tab>
      <v-divider vertical/>
      <v-tab @click="$router.push('/daily')"><h3>日常記情</h3></v-tab>
      <v-divider vertical/>
      </v-tabs>

      <v-spacer></v-spacer>

      
      <v-btn text @click="snackbar =true">
        <span class="mr-2">Latest upload</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      <v-snackbar
        v-model="snackbar">
        {{text}}
        <template v-slot:action="{ attrs }">
          <v-btn
            color="pink"
            text
            v-bind="attrs"
            @click="snackbar = false"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>

      
      <!--以上是右上角的按鈕-->
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    snackbar:false,
    text:'此按鈕目前無功能',
  }),
};
</script>

<style scoped>
h3{
  color:beige;
  font-family: square-circle , Arial, Helvetica, sans-serif;
}

main{
  background-color: papayawhip;
}
</style>