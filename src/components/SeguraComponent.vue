<template>
  <v-app id="inspire">
    <v-app-bar app :class="this.$store.state.color">
      <v-app-bar-nav-icon
        class="mr-1"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title class="pa-0"
        ><v-icon medium class="mb-1 mr-1">{{ this.$store.state.icono }}</v-icon>
        {{ this.$store.state.ubicacion }}</v-toolbar-title
      >
      <v-spacer></v-spacer>

      <v-toolbar-title class="mostrar">
        {{ this.$store.state.user.nombre }}</v-toolbar-title
      >

      <v-btn icon class="mr-5 ml-5" @click="salir()">
        <v-icon> mdi-logout</v-icon>
        <span> </span>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-card class="mx-auto" max-width="300" tile>
        <v-list nav>
          <v-list-item :to="{ name: 'Segura' }" exact
            ><!-- uando doy clic en incicio me envía a Segura -->
            <v-list-item-icon>
              <v-icon v-text="'mdi-home'"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="'Inicio'"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item :to="{ name: 'ListarClientes' }">
            <v-list-item-icon>
              <v-icon>mdi-account-box-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title> Clientes </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-group no-action>
            <template v-slot:activator>
              <v-list-item-icon>
                <v-icon>mdi-amplifier</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Equipos</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item :to="{ name: 'ListarEquipos' }">
              <v-list-item-content>
                <v-list-item-title> Existentes </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{ name: 'ListarRefEquipos' }">
              <v-list-item-content>
                <v-list-item-title> Referencias </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item :to="{ name: 'ListarOrdenes' }">
            <v-list-item-icon>
              <v-icon>mdi-vector-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title> Ordenes </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-group
            v-if="this.$store.state.user.rol === 'administrador'"
            prepend-icon="mdi-security"
            no-action
          >
            <template v-slot:activator>
              <v-list-item>
                <v-list-item-title> Permisos </v-list-item-title>
              </v-list-item>
            </template>

            <v-list-item :to="{ name: 'Usuario' }">
              <v-list-item-content>
                <v-list-item-title> Usuario </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list></v-card
      >
    </v-navigation-drawer>

    <v-main class="margen">
      <router-view />
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: "SeguraComponent",
  data() {
    return {
      drawer: null,
      selectedItem: 1,
    };
  },
  beforeCreate() {
    this.$store.dispatch("autoLogin");
    if (this.$store.state.existe === 0) {
      this.$router.push({ name: "Login" });
    }
  },

  methods: {
    salir() {
      this.$store.dispatch("salir");
    },
  },
};
</script>
<style>
.margen {
  padding: 0px !important;
}
.mostrar {
  width: auto;
}
@media (max-width: 500px) {
  .mostrar {
    width: 0;
  }
}
</style>