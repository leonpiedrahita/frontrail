<template>
  <v-row>
    <v-col cols="12" lg="6" xs="12">
      <v-container>
        <v-stepper  color="green" vertical>
          <v-stepper-step
            v-for="(step, n) in ordenes[0].etapas"
            :key="n"
            :complete="stepComplete(0, n + 1)"
            :step="n + 1"
            :color="stepStatus(0, n + 1)"
            class="pa-5"
          >
            <p class="font-weight-medium">{{ step.nombre }} {{ step.hora }}</p>
            <p class="font-weight-regular">
              {{ step.comentario }}
            </p>
            <p class="font-weight-light">
              {{ step.responsable }}
            </p>
          </v-stepper-step>
          
          
        </v-stepper>
      </v-container>
    </v-col>
    <v-col cols="12" lg="6" xs="12">
      <v-card class="pa-5"
        ><v-select
          v-model="etapaautorizada"
          :items="listadeetapas"
          label="Siguiente paso"
          required
          :rules="[(v) => !!v || 'Campo Requerido']"
        ></v-select>
        <v-textarea v-model="observaciones"></v-textarea>
        <v-card-actions><v-btn class="primary" text @click="confirmarEtapa(0)"
          >Confirmar Etapa</v-btn
        ></v-card-actions>
        
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "PasosComponent",
  components: {},
  data: () => ({
    etapaautorizada: "",
    observaciones: "",
    listadeetapas: [],
    
    ordenes: [
      {
        etapaactual: 1, // Paso actual
        ultimaetapa: 3, //Cantidad máxima de pasos
        etapas: [],
        equipo:{}
      },
     
    ],
  }),

  methods: {
    stepComplete(m, step) {
      return this.ordenes[m].etapaactual > step;
    },
    stepStatus(m, step) {
      return this.ordenes[m].etapaactual > step ? "green" : "blue";
    },
    done(m) {
      this.ordenes[m].etapaactual = 5;
    },
    confirmarEtapa(m) {
      this.$store.dispatch("autoLogin");
      if (this.$store.state.existe === 0) {
        this.$router.push({ name: "Login" });
      } else {
        var today = new Date();
        var date =
          "(" +
          today.getDate() +
          "-" +
          (today.getMonth() + 1) +
          "-" +
          today.getFullYear() +
          ")";
        console.log(date);
        this.ordenes[m].etapas.push({
          nombre: this.etapaautorizada,
          comentario: this.observaciones,
          responsable: this.$store.state.user.nombre,
          hora: date,
        });
        this.ordenes[m].etapaactual++;
        this.ordenes[m].ultimaetapa++;
      }
    },

    asignarLista() {
      if (this.$store.state.user.rol === "administrador") {
        this.listadeetapas = [
          "Llegada de equipo",
          "Cotización solicitada",
          "Cotización aprobada",
          "Repuestos solicitados",
          "Repuestos aprobados para entrega",
          "Repuestos entregados",
          "Soporte realizado",
          "Equipo despachado",
          "Entrenamiento realizado",
        ];
      } else if (this.$store.state.user.rol === "soporte") {
        this.listadeetapas = [
          "Cotización solicitada",
          "Repuestos solicitados",
          "Soporte realizado",
          "Equipo despachado",
          "Entrenamiento realizado",
        ];
      } else if (this.$store.state.user.rol === "bodega") {
        this.listadeetapas = [
          "Llegada de equipo",
          "Repuestos entregados",
          "Equipo despachado",
        ];
      } else if (this.$store.state.user.rol === "facturación") {
        this.listadeetapas = ["Repuestos aprobados"];
      } else if (this.$store.state.user.rol === "cotizaciones") {
        this.listadeetapas = ["Cotización aprobada"];
      } else if (this.$store.state.user.rol === "facturación") {
        this.listadeetapas = ["Repuestos aprobados para entrega"];
      } else if (this.$store.state.user.rol === "asesor") {
        this.listadeetapas = [
          "Cotización solicitada",
          "Entrenamiento realizado",
        ];
      } else if (this.$store.state.user.rol === "cartera") {
        this.listadeetapas = [];
      }
    },
  },
  created() {
    this.$store.dispatch("autoLogin");
    if (this.$store.state.existe === 0) {
      this.$router.push({ name: "Login" });
    } else {
      this.asignarLista();
    }
  },
};
</script>

<style >
</style>
