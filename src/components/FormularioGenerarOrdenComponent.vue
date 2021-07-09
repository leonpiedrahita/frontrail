<template>
  <form>
    <v-container>
      <v-row>
        <v-col cols="12" align-self="center">
          <div class="gridtitulo">Informacion del equipo :</div>
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col cols="12" lg="6">
          <v-text-field
            v-model="equipo.nombre"
            label="Nombre del equipo"
            disabled
            class="centered-input"
          ></v-text-field>
        </v-col>
        <v-col cols="12" lg="6">
          <v-text-field
            v-model="equipo.marca"
            label="Marca del equipo"
            disabled
            class="centered-input"
          ></v-text-field>
        </v-col>
        <v-col cols="12" lg="6">
          <v-text-field
            v-model="equipo.serie"
            label="Serie del equipo"
            disabled
            class="centered-input"
          ></v-text-field>
        </v-col>
        <v-col cols="12" lg="6">
          <v-text-field
            v-model="equipo.propietario.nombre"
            label="Propietario del equipo"
            disabled
            class="centered-input"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" align-self="center">
          <div class="gridtitulo">Informacion del cliente :</div>
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col cols="12" lg="6">
          <v-text-field
            v-model="equipo.cliente.nombre"
            label="Nombre / Razón social"
            disabled
            class="centered-input"
          ></v-text-field>
        </v-col>
        <v-col cols="12" lg="6">
          <v-text-field
            v-model="equipo.cliente.nit"
            label="NIT"
            disabled
            class="centered-input"
          ></v-text-field>
        </v-col>
        <v-col cols="12" lg="6">
          <v-text-field
            v-model="equipo.cliente.sede[equipo.cliente.sede.length - 1].nombre"
            label="Sede"
            disabled
            class="centered-input"
          ></v-text-field>
        </v-col>
        <v-col cols="12" lg="6">
          <v-text-field
            v-model="
              equipo.cliente.sede[equipo.cliente.sede.length - 1].direccion
            "
            label="Dirección"
            disabled
            class="centered-input"
          ></v-text-field>
        </v-col>
        <v-col cols="12" lg="6">
          <v-text-field
            v-model="reporte.nombredelprofesional"
            :error-messages="nameErrors"
            label="Nombre del profesional"
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field>
        </v-col>
        <v-col cols="12" lg="6">
          <v-text-field
            v-model="reporte.telefonodelprofesional"
            :error-messages="nameErrors"
            label="Telefono del Profesional"
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" align-self="center">
          <div class="gridtitulo">Detalles de la asistencia :</div>
        </v-col>
      </v-row>
      <v-row justify="space-around">
        <v-col cols="12" md="3">
          <v-select
            v-model="tipodeasistenciaseleccionado"
            :items="tipodeasistencia"
            :error-messages="selectErrors"
            label="Tipo de asistencia"
            required
            @change="$v.tipodeasistenciaseleccionado.$touch()"
            @blur="$v.tipodeasistenciaseleccionado.$touch()"
          ></v-select>
        </v-col>

        <v-col cols="12" md="3" class="mt-5">
          <v-slider
            label="Duración (Horas)"
            v-model="slider"
            thumb-label="always"
            max="10"
            min="0.5"
            step="0.5"
          ></v-slider>
        </v-col>
        <v-col cols="12" md="3">
          <v-menu
            v-model="menu1"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="fechadeinicio"
                label="Fecha de inicio"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="fechadeinicio"
              @input="menu1 = false"
            ></v-date-picker>
          </v-menu>
        </v-col>
        <v-col cols="12" md="3">
          <v-menu
            v-model="menu2"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="fechadefinalizacion"
                label="Fecha de finalización"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="fechadefinalizacion"
              @input="menu2 = false"
            ></v-date-picker>
          </v-menu>
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col cols="12" lg="4">
          <v-text-field
            v-model="name"
            :error-messages="nameErrors"
            :counter="10"
            label="Name"
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field>
        </v-col>
      <v-row>
        <v-col cols="12" align-self="center">
          <div class="gridtitulo">Detalles de la asistencia :</div>
        </v-col>
      </v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="email"
            :error-messages="emailErrors"
            label="E-mail"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>

    <v-checkbox
      v-model="checkbox"
      :error-messages="checkboxErrors"
      label="Do you agree?"
      required
      @change="$v.checkbox.$touch()"
      @blur="$v.checkbox.$touch()"
    ></v-checkbox>

    <v-btn class="mr-4" @click="submit">submit</v-btn>
    <v-btn @click="clear">clear</v-btn>
    <pre>
      {{reporte.tipodeasistencia}}
        {{$data.equipo}} <!-- para imprimir las categorias en pantalla -->
    </pre>
  </form>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";

export default {
  name:'FormularioGenerarOrdenComponent',
  mixins: [validationMixin],

  validations: {
    name: { required },
    email: { required, email },
    tipodeasistenciaseleccionado: { required },
    checkbox: {
      checked(val) {
        return val;
      },
    },
  },

  data: () => ({
    slider: null,
    name: "",
    email: "",
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    tipodeasistenciaseleccionado: null,
    tipodeasistencia: [
      "Instalación",
      "Entrenamiento",
      "Mantenimiento preventivo",
      "Mantenimiento correctivo",
      "Mantenimiento preventivo y correctivo",
      "Desinstalación",
    ],
    fechadeinicio: new Date().toISOString().substr(0, 10),
    menu1: false,
    fechadefinalizacion: new Date().toISOString().substr(0, 10),
    menu2: false,
    checkbox: false,
    equipo: {
      cliente: {
        sede: [
          {
            nombre: "",
            direccion: "",
          },
        ],
        contactoprincipal: [
          {
            nombre: "",
            telefono: "",
          },
        ],
      },
      propietario: {
        sede: [
          {
            nombre: "",
            direccion: "",
          },
        ],
        contactoprincipal: [
          {
            nombre: "",
            telefono: "",
          },
        ],
      },
      nombre: "",
      serie: "",
      marca: "",
    },
    reporte: {
      numero: null,
      tipodeasistencia: "",
      duracion: "",
      fechadeinicio: "",
      fechadefinalizacion: "",
      infoequipo: {
        nombre: "",
        serie: "",
        marca: "",
      },
      propietario: "",
      nombrecliente: "",
      nitcliente: "",
      sedecliente: "",
      direccioncliente: "",
      profesionalcliente: "",
      telefonocliente: "",
      hallazgos: "",
      actividades: "",
      pruebas: "",
      repuestos: "",
      observaciones: "",
      firmacliente: "",
      ingeniero: "",
    },
  }),

  computed: {
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.checked && errors.push("You must agree to continue!");
      return errors;
    },
    selectErrors() {
      const errors = [];
      if (!this.$v.tipodeasistenciaseleccionado.$dirty) return errors;
      !this.$v.tipodeasistenciaseleccionado.required &&
        errors.push("Campo requerido");
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;

      !this.$v.name.required && errors.push("Campo requerido");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
  },
  created() {
    this.consultarequipo();
  },
  methods: {
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.select = null;
      this.checkbox = false;
    },
    consultarequipo() {
      this.equipo = JSON.parse(localStorage.getItem("equipo"));
      //localStorage.removeItem('equipo')
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
</style>