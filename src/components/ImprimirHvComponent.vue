<template>
  <form id="body">
    <v-container class="pa-10">
      <v-divider class="divisor"></v-divider>
      <v-row>
        <v-col cols="12" align-self="center">
          <v-toolbar
          flat
            ><div><img class="miimagen" /></div>
            <v-spacer></v-spacer>
            <v-toolbar-title class="gridtitulo h1">
              Hoja de vida</v-toolbar-title
            >
            <v-spacer ></v-spacer>
            <v-spacer ></v-spacer>
            </v-toolbar
          >
        </v-col>
      </v-row>
      <v-divider class="divisor"></v-divider>
      <v-row>
        <v-col cols="12" align-self="center">
          <div class="gridsubtitulo">Informacion general del equipo :</div>
        </v-col>
      </v-row>
      <v-row justify="space-between" class="pa-5 ma-5">
        <v-col cols="3" class="estilocasilla">
          <header class="estiloheader">Nombre:</header>
          <v-subheader class="estilosubheader">
            {{ equipo.nombre }}
          </v-subheader>
        </v-col>

        <v-col cols="3" class="estilocasilla">
          <header class="estiloheader">Marca:</header>
          <v-subheader class="estilosubheader">
            {{ equipo.marca }}
          </v-subheader>
        </v-col>

        <v-col cols="3" class="estilocasilla">
          <header class="estiloheader">Fabricante:</header>
          <v-subheader class="estilosubheader">
            {{ equipo.idreferencia.fabricante }}
          </v-subheader>
        </v-col>

        <v-col cols="3" class="estilocasilla">
          <header class="estiloheader">Riesgo:</header>
          <v-subheader class="estilosubheader">
            {{ equipo.idreferencia.clasificacionriesgo }}
          </v-subheader>
        </v-col>

        <v-col cols="3" class="estilocasilla">
          <header class="estiloheader">Servicio:</header>
          <v-subheader class="estilosubheader">
            {{ equipo.idreferencia.servicio }}
          </v-subheader>
        </v-col>

        <v-col cols="3" class="estilocasilla">
          <header class="estiloheader">Propietario:</header>
          <v-subheader class="estilosubheader">
            {{ equipo.propietario }}
          </v-subheader>
        </v-col>
        <v-col cols="3" class="estilocasilla">
          <header class="estiloheader">Cliente:</header>
          <v-subheader class="estilosubheader">
            {{ equipo.cliente }}
          </v-subheader>
        </v-col>
        <v-col cols="3" class="estilocasilla">
          <header class="estiloheader">Contrato:</header>
          <v-subheader class="estilosubheader">
            {{ equipo.idreferencia.tipodecontrato }}
          </v-subheader>
        </v-col>
        <v-col cols="3" class="estilocasilla">
          <header class="estiloheader">Fecha de instalación:</header>
          <v-subheader class="estilosubheader">
            {{ equipo.fechadeinstalacion }}
          </v-subheader>
        </v-col>
      </v-row>
      <v-divider class="divisor"></v-divider>
      <v-row>
        <v-col cols="12" align-self="center">
          <div class="gridsubtitulo">Dimensiones :</div>
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col cols="3" class="estilocasilla">
          <header class="estiloheader">Alto (cm):</header>
          <v-subheader class="estilosubheader">
            {{ equipo.idreferencia.alto }}
          </v-subheader>
        </v-col>
        <v-col cols="3" class="estilocasilla">
          <header class="estiloheader">Ancho (cm):</header>
          <v-subheader class="estilosubheader">
            {{ equipo.idreferencia.ancho }}
          </v-subheader>
        </v-col>
        <v-col cols="3" class="estilocasilla">
          <header class="estiloheader">Profundidad (cm):</header>
          <v-subheader class="estilosubheader">
            {{ equipo.idreferencia.profundo }}
          </v-subheader>
        </v-col>
        <v-col cols="3" class="estilocasilla">
          <header class="estiloheader">Peso (kg):</header>
          <v-subheader class="estilosubheader">
            {{ equipo.idreferencia.peso }}
          </v-subheader>
        </v-col>
      </v-row>
      <v-divider class="divisor"></v-divider>
      <v-row>
        <v-col cols="12" align-self="center">
          <div class="gridsubtitulo">Especificaciones técnicas :</div>
        </v-col>
      </v-row>
      <v-row justify="space-around">
        <v-col cols="3" class="estilocasilla">
          <header class="estiloheader">Periodicidad de mantenimiento:</header>
          <v-subheader class="estilosubheader">
            {{ equipo.idreferencia.periodicidadmantenimiento }}
          </v-subheader>
        </v-col>
        <v-col cols="3" class="estilocasilla">
          <header class="estiloheader">Voltade de entrada (VAC):</header>
          <v-subheader class="estilosubheader">
            {{ equipo.idreferencia.voltaje }}
          </v-subheader>
        </v-col>
        <v-col cols="3" class="estilocasilla">
          <header class="estiloheader">Corriente de entrada (A):</header>
          <v-subheader class="estilosubheader">
            {{ equipo.idreferencia.corriente }}
          </v-subheader>
        </v-col>
        <v-col cols="3" class="estilocasilla">
          <header class="estiloheader">Potencia (VA):</header>
          <v-subheader class="estilosubheader">
            {{ equipo.idreferencia.potencia }}
          </v-subheader>
        </v-col>
        <v-col cols="3" class="estilocasilla">
          <header class="estiloheader">Pruebas por hora:</header>
          <v-subheader class="estilosubheader">
            {{ equipo.idreferencia.pruebasporhora }}
          </v-subheader>
        </v-col>
        <v-col cols="6" class="estilocasilla">
          <header class="estiloheader">Principio de medición:</header>
          <v-subheader class="estilosubheader">
            {{ equipo.idreferencia.principiodemedicion }}
          </v-subheader>
        </v-col>
      </v-row>
      <v-divider class="divisor"></v-divider>
      <v-row>
        <v-col cols="12" align-self="center">
          <div class="gridsubtitulo">Condiciones Ambientales :</div>
        </v-col>
      </v-row>
      <v-row justify="space-around">
        <v-col cols="3" class="estilocasilla">
          <header class="estiloheader">Temperatura (°C):</header>
          <v-subheader class="estilosubheader">
            {{ equipo.idreferencia.temperatura }}
          </v-subheader>
        </v-col>
        <v-col cols="3" class="estilocasilla">
          <header class="estiloheader">Humedad Relativa (%):</header>
          <v-subheader class="estilosubheader">
            {{ equipo.idreferencia.humedad }}
          </v-subheader>
        </v-col>
        <v-col cols="3" class="estilocasilla">
          <header class="estiloheader">
            Toma de agua DI:
          </header>
          <v-subheader class="estilosubheader">
            {{ equipo.idreferencia.agua }}
          </v-subheader>
        </v-col>
        <v-col cols="3" class="estilocasilla">
          <header class="estiloheader">Desagüe:</header>
          <v-subheader class="estilosubheader">
            {{ equipo.idreferencia.desague }}
          </v-subheader>
        </v-col>
      </v-row>
      <v-divider class="divisor"></v-divider>
      
      <v-row>
        <v-col cols="12" align-self="center">
          <div class="gridsubtitulo">Informacion del proveedor :</div>
        </v-col>
      </v-row>
      <v-row justify="space-between" class="pa-5 ma-5">
        <v-col cols="3" class="estilocasilla">
          <header class="estiloheader">Nombre:</header>
          <v-subheader class="estilosubheader">
            Biosystems S.A.S.
          </v-subheader>
        </v-col>

        <v-col cols="3" class="estilocasilla">
          <header class="estiloheader">Teléfono:</header>
          <v-subheader class="estilosubheader">
            (604) 312-07-00
          </v-subheader>
        </v-col>

        <v-col cols="3" class="estilocasilla">
          <header class="estiloheader">Dirección:</header>
          <v-subheader class="estilosubheader">
            Tv 5A # 45-139
          </v-subheader>
        </v-col>

        <v-col cols="3" class="estilocasilla">
          <header class="estiloheader">Ciudad:</header>
          <v-subheader class="estilosubheader">
            Medellín - Antioquia
          </v-subheader>
        </v-col>

        <v-col cols="3" class="estilocasilla">
          <header class="estiloheader"> Área Responsable</header>
          <v-subheader class="estilosubheader">
            Comercial e ingeniería
          </v-subheader>
        </v-col>

        
      </v-row>
      <v-divider class="divisor"></v-divider>
      <v-row>
        <v-col cols="12" align-self="center">
          <div class="gridsubtitulo">Recomendaciones del fabricante :</div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12"  class="estilocasilla">
          <v-subheader class="estilosubheader">
            {{ equipo.idreferencia.recomendaciones }}
          </v-subheader>
        </v-col>
      </v-row>
    </v-container>

    <!--    <pre>
    
     {{ this.$store.state.referenciaequipo }}
    </pre> -->
  </form>
</template>
<script>
export default {
  name: "ImprimirHvComponent",

  data: () => ({
    name: "",
    email: "",

    esperarguardar: false,
    confirmacionguardado: false,

    equipo: {
      nombre: "",
      marca: "",
      serie: "",
      propietario: "",
      cliente: "",
      ubicacionnombre: "",
      ubicaciondireccion: "",
      estado: "",
      /* historialpropietarios: [], */
      fechadeinstalacion: "",
      placadeinventario: "",
      tipodecontrato: "",
      /*  historialdeservicios: [], */
      idreferencia: {
        nombre: "Abacus 380",
        marca: "Diatrón",
        fabricante: "Diatrón",
        servicio: "",
        clasificacionriesgo: "",
        periodicidadmantenimiento: "",
        alto: "",
        ancho: "",
        profundo: "",
        peso: "",
        voltaje: "110 -220",
        corriente: "",
        potencia: "200",
        principiodemedicion: "",
        pruebasporhora: "",
        temperatura: "",
        humedad: "",
        agua: "si",
        desague: "",
        recomendaciones:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo facere reiciendis fugit odio accusantium est exercitationem deserunt possimus totam reprehenderit, sit quia dolorum temporibus, voluptatibus illum sed vel veritatis modi.",
      },
    },
    clasificacionriesgo: ["I", "IIa", "IIb", "III"],
    periodicidadmantenimiento: [
      "Libre de mantenimiento",
      "Trimestral",
      "Semestral",
      "Anual",
    ],
    sino: ["Si", "No"],
  }),

  computed: {},
  created() {
    /* this.equipo = this.$store.state.referenciaequipo; */
  },
  beforeCreate() {
    this.$store.dispatch("autoLogin");
    if (this.$store.state.existe === 0) {
      this.$router.push({ name: "Login" });
    }
    this.$store.dispatch("guardarUbicacion", {
      ubicacion: "Nueva referencia de equipo",
      icono: "mdi-amplifier",
      color: "c6",
    });
  },
  methods: {
    GuardarFinalizar() {
      this.esperaguardar = true;
      axios
        .post(
          this.$store.state.ruta + "api/refequipo/registrar/",
          {
            nombre: this.equipo.nombre,
            marca: this.equipo.marca,
            fabricante: this.equipo.fabricante,
            servicio: this.equipo.servicio,
            clasificacionriesgo: this.equipo.clasificacionriesgo,
            periodicidadmantenimiento: this.equipo.periodicidadmantenimiento,
            alto: this.equipo.alto,
            ancho: this.equipo.ancho,
            profundo: this.equipo.profundo,
            peso: this.equipo.peso,
            voltaje: this.equipo.voltaje,
            corriente: this.equipo.corriente,
            potencia: this.equipo.potencia,
            principiodemedicion: this.equipo.principiodemedicion,
            pruebasporhora: this.equipo.pruebasporhora,
            temperatura: this.equipo.temperatura,
            humedad: this.equipo.humedad,
            agua: this.equipo.agua,
            desague: this.equipo.desague,
            recomendaciones: this.equipo.recomendaciones,
          },
          {
            headers: {
              token: this.$store.state.token,
            },
          }
        )
        .then((response) => {
          this.esperaguardar = false;
          this.confirmacionguardado = true;
          console.log(response);
        })
        .catch((error) => {
          this.esperaguardar = true;
          console.log(error);
          return error;
        });
    },
    ActualizarFinalizar() {
      //Editar categoria
      this.esperaguardar = true;

      axios
        .patch(
          this.$store.state.ruta +
            "api/refequipo/actualizar/" +
            this.equipo._id,
          {
            nombre: this.equipo.nombre,
            marca: this.equipo.marca,
            fabricante: this.equipo.fabricante,
            servicio: this.equipo.servicio,
            clasificacionriesgo: this.equipo.clasificacionriesgo,
            periodicidadmantenimiento: this.equipo.periodicidadmantenimiento,
            alto: this.equipo.alto,
            ancho: this.equipo.ancho,
            profundo: this.equipo.profundo,
            peso: this.equipo.peso,
            voltaje: this.equipo.voltaje,
            corriente: this.equipo.corriente,
            potencia: this.equipo.potencia,
            principiodemedicion: this.equipo.principiodemedicion,
            pruebasporhora: this.equipo.pruebasporhora,
            temperatura: this.equipo.temperatura,
            humedad: this.equipo.humedad,
            agua: this.equipo.agua,
            desague: this.equipo.desague,
            recomendaciones: this.equipo.recomendaciones,
          },
          {
            headers: {
              token: this.$store.state.token,
            },
          }
        )
        .then((response) => {
          this.esperaguardar = false;
          this.confirmacionguardado = true;
          console.log(response);
        })
        .catch((error) => {
          this.esperaguardar = true;
          console.log(error);
          return error;
        });
    },
    AceptarConfirmacionGuardado() {
      this.confirmacionguardado = false;
      this.$router.push({ name: "ListarRefEquipos" });
    },
  },
};
</script>

<style scoped>
.centered-input >>> input {
  text-align: center;
  font-family: Roboto, sans-serif;
}
.gridtitulo {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1px;
  text-align: center;
  font-weight: bold;
  background-color: white;
}
.gridsubtitulo {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1px;
  text-align: left;
  font-weight: bold;
  background-color: white;
  color: rgba(0, 0, 0, 0.795) !important;
}
.estiloheader {
  text-align: left;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.795) !important;
  height: auto;
}
.estilosubheader {
  text-align: left;
  color: #000 !important;
  font-family: "Times New Roman", Times, serif !important;
  font-size: 16px;
}
.estilocasilla {
 padding: 0%;
}
.miimagen {
  content: url("../imagenes/logo/biosystems.jpg");
  width: 175px;
    height: 45px;
  border-radius: 3px;
}
.divisor{
    margin-bottom: 10px;
    margin-top: 10px;
  }
  .estilocasilla {
 padding-top: 12px !important;
 padding-left: 12px !important;
 padding-right: 0% !important;
 padding-bottom: 0% !important;
}
@media print {
  @page {
    margin: 20px;
  }
  body {
    margin: 1cm;
  }
  .miimagen {
    width: 150px;
    height: 40px;
    background: url("../imagenes/logo/biosystems.jpg");
  }
  .divisor{
    margin-bottom: 10px;
    margin-top: 10px;
  }
  .estilocasilla {
 padding-top: 12px !important;
 padding-left: 12px !important;
 padding-right: 0% !important;
 padding-bottom: 0% !important;
}
 
}
</style>