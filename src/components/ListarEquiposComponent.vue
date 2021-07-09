<template>
  <v-card>
    <v-data-table
      :headers="headers"
      :items="equipos"
      :search="search"
      sort-by="propietario"
      class="elevation-1"
      :loading="cargando"
      loading-text="Cargando ... por favor espere"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Buscar: Cliente / Nombre / Serie"
            single-line
            hide-details
          ></v-text-field>
          <v-spacer></v-spacer>

          <v-btn v-bind="size" @click="nuevoEquipo()"> Nuevo Equipo </v-btn>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog2" max-width="500px">
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="12" md="12">
                      <v-select
                        v-model="nuevoequipo.nombre"
                        :items="nombresequipos"
                        label="Equipo"
                        required
                        >{{ nuevamarca }}</v-select
                      >
                    </v-col>
                    <v-col cols="12" sm="12" md="12">
                      <v-text-field
                        v-model="nuevoequipo.marca"
                        label="Marca"
                        disabled
                        class="centered-input"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="12">
                      <v-select
                        v-model="nuevoequipo.propietario.nombre"
                        :items="nombresclientes"
                        label="Propietario"
                        required
                        >{{ nuevopropietario }}</v-select
                      >
                    </v-col>
                    <v-col cols="12" sm="12" md="12">
                      <v-select
                        v-model="nuevoequipo.cliente.nombre"
                        :items="nombresclientes"
                        label="Cliente"
                        required
                        >{{ nuevocliente }}</v-select
                      >
                    </v-col>
                    <v-col cols="12" sm="12" md="12">
                      <v-text-field
                        v-model="editedItem.cliente.nombre"
                        label="Cliente"
                        disabled
                        class="centered-input"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="12">
                      <v-text-field
                        v-model="editedItem.nombre"
                        label="Nombre"
                        disabled
                        class="centered-input"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">
                  Cancelar
                </v-btn>
                <v-btn color="blue darken-1" text @click="save">
                  Generar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialog" max-width="500px">
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="12" md="12">
                      <v-text-field
                        v-model="editedItem.cliente.nombre"
                        label="Cliente"
                        disabled
                        class="centered-input"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="12">
                      <v-text-field
                        v-model="editedItem.nombre"
                        label="Nombre"
                        disabled
                        class="centered-input"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="12">
                      <v-text-field
                        v-model="editedItem.serie"
                        label="Serie"
                        disabled
                        class="centered-input"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">
                  Cancelar
                </v-btn>
                <v-btn color="blue darken-1" text @click="save">
                  Generar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon medium @click="editItem(item)"> mdi-pencil </v-icon>
      </template>
    </v-data-table>
    <pre>
        {{$data.nuevoequipo}} <!-- para imprimir las categorias en pantalla -->
    </pre>
    <pre>----------</pre>
    <pre>
        {{$data.refequipos}} <!-- para imprimir las categorias en pantalla -->
    </pre>
    <pre>-----------</pre>
    <pre>
        {{$data.nombresclientes}} <!-- para imprimir las categorias en pantalla -->
    </pre>
    <pre>----------</pre>
    <pre>
        {{$data.clientes}} <!-- para imprimir las categorias en pantalla -->
    </pre>
  </v-card>
</template>
<script>
export default {
  name: "ListarEquipos",
  data: () => ({
    dialog: false,
    dialog2: false,
    search: "",
    cargando: true,
    headers: [
      { text: "Nombre del dispositivo", value: "nombre", align: "center" },
      { text: "Número de serie", value: "serie", align: "center" },
      {
        text: "Propietario",
        align: "center",
        value: "propietario.nombre",
      },
      {
        text: "Cliente asignado",
        align: "center",
        value: "cliente.nombre",
      },
      {
        text: "Ubicacion",
        align: "center",
        value: "ubicacion",
      },

      {
        text: "Crear Reporte",
        value: "actions",
        sortable: false,
        align: "center",
      },
    ],
    desserts: [],
    editedIndex: -1,
    equipos: [],
    refequipos: [],
    nombresequipos: [],
    clientes: [],
    nombresclientes: [],
    sedeseleccionada: "",
    sedeactualizada: "",
    prueba: {},
    editedItem: {
      cliente: {
        nombre: "",
      },
      nombre: "",
      serie: "",
    },
    defaultItem: {
      cliente: {
        nombre: "",
      },
      nombre: "",
      serie: "",
    },
    nuevoequipo: {
      nombre: "",
      marca: {},
      serie: "",
      propietario: {
        nombre: "",
        id: "",
      },
      cliente: {
        nombre: "",
        id: "",
      },
      ubicacion: {
        nombre: "",
        direccion: "",
      },
    },
  }),

  computed: {
    formTitle() {
      return "Generar Reporte";
    },
    size() {
      const size = { xs: "x-small", sm: "small", lg: "large", xl: "x-large" }[
        this.$vuetify.breakpoint.name
      ];
      return size ? { [size]: true } : {};
    },
    titulocliente() {
      return "Agregar Equipo";
    },
    ejercicio: function () {
      // `this` apunta a la instancia vm
      this.sedeactualizada = this.clientes.filter((cliente) => {
        if (cliente.nombre === "nombre6actualizado") {
          return cliente;
        }
      });
    },
    nuevamarca: function () {
      // `this` apunta a la instancia vm
      this.nuevoequipo.marca = this.refequipos.map((equipo) => {
        if (equipo.nombre === this.nuevoequipo.nombre) {
          return equipo.marca;
        }
      });
      var filtered = this.nuevoequipo.marca.filter(function (el) {
        return el != null;
      });
      this.nuevoequipo.marca = filtered;
    },
    nuevopropietario: function () {
      // `this` apunta a la instancia vm
      this.nuevoequipo.propietario.id = this.clientes.map((cliente) => {
        if (cliente.nombre === this.nuevoequipo.propietario.nombre) {
          return cliente._id;
        }
      });
      var filtered = this.nuevoequipo.propietario.id.filter(function (el) {
        return el != null;
      });
      this.nuevoequipo.propietario.id = filtered;
    },
    nuevocliente: function () {
      // `this` apunta a la instancia vm
      this.nuevoequipo.cliente.id = this.clientes.map((cliente) => {
        if (cliente.nombre === this.nuevoequipo.cliente.nombre) {
          return cliente._id;
        }
      });
      var filtered = this.nuevoequipo.cliente.id.filter(function (el) {
        return el != null;
      });
      this.nuevoequipo.cliente.id = filtered;
      this.nuevoequipo.ubicacion.nombre = this.clientes.map((cliente) => {
        if (cliente.nombre === this.nuevoequipo.cliente.nombre) {
          return cliente.sede;
        }
      });
            var filtered = this.nuevoequipo.ubicacion.nombre.filter(function (el) {
        return el != null;
      });
      this.nuevoequipo.ubicacion.nombre = filtered;
      
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
  },
  beforeCreate() {
    this.$store.dispatch("guardarUbicacion", {
      ubicacion: "Equipos",
      icono: "mdi-amplifier",
    });
  },
  created() {
    this.listar();
  },

  methods: {
    listar() {
      //va a ir a mi backend y me traerá las peticiones de la base de datos
      axios
        .get("http://localhost:3000/api/equipo/listar")
        .then((response) => {
          this.equipos = response.data; //el this es porque no es propia de la funcion sino de l componente
          this.cargando = false;
        })
        .catch((error) => {
          //console.log(error);
          return error;
        });
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      localStorage.setItem("equipo", JSON.stringify(this.editedItem));
      this.close();
      this.prueba = localStorage.getItem("equipo");
      this.$router.push({ name: "FormularioGenerarOrden" });
    },
    nuevoEquipo() {
      this.$store.dispatch("autoLogin");

      if (this.$store.state.existe === 0) {
        this.$router.push({ name: "Login" });
      } else {
        this.Agregarcliente = true;
        this.dialog2 = true;
        axios
          .get("http://localhost:3000/api/cliente/listar", {
            headers: {
              token: this.$store.state.token,
            },
          })
          .then((response) => {
            this.clientes = response.data; //el this es porque no es propia de la funcion sino de l componente
            /*           this.nombresclientes = this.clientes.map((cliente)=>({nombre:cliente.nombre,id:cliente._id,sede:cliente.sede}));
             */ this.nombresclientes = this.clientes.map(
              (cliente) => cliente.nombre
            );
          })
          .catch((error) => {
            //console.log(error);
            return error;
          });
        axios
          .get("http://localhost:3000/api/refequipo/listar")
          .then((response) => {
            this.refequipos = response.data; //el this es porque no es propia de la funcion sino de l componente
            this.refequipos = this.refequipos.map((equipo) => ({
              nombre: equipo.nombre,
              marca: equipo.marca,
            }));
            this.nombresequipos = this.refequipos.map(
              (nombres) => nombres.nombre
            );
          })
          .catch((error) => {
            //console.log(error);
            return error;
          });
      }
    },
  },
  actualizarsede() {
    this.sedeactualizada = "funciona";
  },
};
</script>
<style scoped>
.centered-input >>> input {
  text-align: center;
}
.aviso {
  text-align: center;
}
.toolbar {
  flex-wrap: wrap;
}
@media (max-width: 767px) {
  .tamano {
    display: none;
  }
}
</style>