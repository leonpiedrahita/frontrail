<template>
  <v-layout>
    <v-flex>
      <v-row align="center" class="justify-center" style="height: 100vh">
        <v-col cols="12" lg="6" align="center">
          <v-card class="pa-10">
            <v-card-title title class="justify-center">
              Acceder a su cuenta
            </v-card-title>
            <v-form ref="form" lazy-validation>
              <v-text-field
                v-model="login.email"
                label="E-mail"
                required
              ></v-text-field>
              <v-text-field
                v-model="login.password"
                label="Contraseña"
                type="password"
                required
              ></v-text-field>

              <v-btn
                :disabled="!(this.login.email && this.login.password)"
                color="success"
                class="mr-4"
                block
                @click="loginUser"
              >
                Ingresar
              </v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-flex>
  </v-layout>
</template>
<script>
import swal from "sweetalert";
import axios from "axios";

export default {
  name: "TheLogin",
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },
  beforeCreate() {
    this.$store.dispatch("autoLogin");
    if (this.$store.state.existe === 1) {
      this.$router.push({ name: "ListarClientes" });
    }

    //this.$store.dispatch("autoLogin")? this.$router.push({name: 'ListarClientes'}) : false;
  },
  methods: {
    async loginUser() {
      
      const axiosInstance = axios.create({
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });

      axiosInstance
             
        .post(this.$store.state.ruta + "api/usuario/ingresar", this.login)
        .then((response) => {
          return response.data;
        })
        .then((data) => {
          this.$store.dispatch("guardarToken", data.tokenReturn); //se guarda el token en la tienda
          this.$router.push({ name: "ListarClientes" });
          swal("¡Hola!", this.$store.state.user.nombre, "success");
          console.log(data);
        })
        .catch((error) => {
          swal("Oops!", "Algo salio mal!", "Error");
          console.log(error);
          return error;
        });
    },
  },
};
</script>

