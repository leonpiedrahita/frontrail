<template>
  <v-row>
    <v-col cols="12" lg="6" xs="12">
      <v-container>
        <v-stepper
          v-for="(ejemplo, m) in ejemplos"
          :key="m"
          v-model="ejemplos[m].curr"
          color="green"
          vertical
        >
          <v-stepper-step
            v-for="(step, n) in ejemplos[m].steps"
            :key="n"
            :complete="stepComplete(m, n + 1)"
            :step="n + 1"
            :color="stepStatus(m, n + 1)"
            class="pa-5"
          >
            <p class="font-weight-medium">
              {{ step.name }}
            </p>
            <p class="font-weight-regular">
              {{ step.comentario }}
            </p>
            <p class="font-weight-light">
              {{ step.responsable }}
            </p>

            <!--  <v-stepper-content width="auto" class="pa-1" height="auto" :step="n + 1" :key="n">
              <v-card height="auto" width="100%">
                <v-card-text class="pa-0">
                  <v-textarea v-model="step.comentario"></v-textarea>
                </v-card-text>
                <v-card-actions>
                  <v-row>  <v-col lg="12"><v-select
                    v-model="pasoautorizado"
                    :items="listadepasos"
                    label="Siguiente paso"
                    required
                    :rules="[(v) => !!v || 'Campo Requerido']"
                  ></v-select></v-col></v-row>
                  
                    
                  
                  <v-col xs="12"><v-btn
                    v-if="n + 1 < ejemplos[m].lastStep"
                    color="primary"
                    @click="ejemplos[m].curr = n + 2"
                    >Continue</v-btn
                  >
                  
                  <v-btn v-else color="success" @click="done(m)">Done</v-btn>
                  
                  <v-btn text @click="ejemplos[m].curr = k">Back</v-btn>
                  </v-col>
                  
                  
                </v-card-actions>
              </v-card>
            </v-stepper-content> -->
          </v-stepper-step>
        </v-stepper>
      </v-container>
    </v-col>
    <v-col cols="12" lg="6" xs="12">
      <v-container
        ><v-select
          v-model="etapaautorizada"
          :items="listadeetapas"
          label="Siguiente paso"
          required
          :rules="[(v) => !!v || 'Campo Requerido']"
        ></v-select>
        <v-textarea></v-textarea>
        <v-btn class="primary" text @click="confirmarEtapa">Confirmar Etapa</v-btn>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "PasosComponent",
  components: {},
  data: () => ({
    etapaautorizada: "",
    listadeetapas: [],
    ejercicio: false,
    ejemplos: [
      {
        curr: 1, // Paso actual
        lastStep: 4, //Cantidad máxima de pasos
        steps: [
          { name: "Start", comentario: "", responsable: "", fecha: "" },
          { name: "Step 2" },
          { name: "Step 3" },
          { name: "Complete" },
        ],
      },
      /*            {
        curr: 1, // Paso actual
        lastStep: 4, //Cantidad máxima de pasos
        steps: [
          { name: "Start" },
          { name: "Step 2" },
          { name: "Step 3" },
          { name: "Complete" },
        ],
      }, */
    ],
  }),

  methods: {
    stepComplete(m, step) {
      return this.ejemplos[m].curr > step;
    },
    stepStatus(m, step) {
      return this.ejemplos[m].curr > step ? "green" : "blue";
    },
    done(m) {
      this.ejemplos[m].curr = 5;
    },
    confirmarEtapa(){

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
      this.listadeetapas = ["Cotización solicitada", "Entrenamiento realizado"];
    } else if (this.$store.state.user.rol === "cartera") {
      this.listadeetapas = [];
    }
  },
  },
  created() {
    this.$store.dispatch("autoLogin");
    if (this.$store.state.existe === 0) {
      this.$router.push({ name: "Login" });
    }
    this.asignarLista();
  },
  
};
</script>

<style >
</style>
