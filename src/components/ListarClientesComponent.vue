<template>
  <v-card>
    <v-data-table
      :headers="headers"
      :items="equipos"
      :expanded.sync="expanded"
      show-expand
      single-expand
      :search="search"
      sort-by="nombre"
      class="elevation-1"
      item-key="nit"
      :loading="cargando"
      loading-text="Cargando ... por favor espere"
    >
      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length">
          <div class="sp-details" justify="center">
            <div class="col-xs-5 col-md-8 text-center">
              <v-data-table :headers="encabezado" :items="item.sede">
                <template v-slot:[`item.actions`]="{ item }">
                  <v-icon medium @click="editItem(item)"> mdi-pencil </v-icon>

                </template>
              </v-data-table>
            </div>
          </div>
        </td>
      </template>

      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Dispositivos</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Buscar: Cliente / Nombre / Serie"
            single-line
            hide-details
          ></v-text-field>
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
                        v-model="editedItem.nombre"
                        label="Nombre/Razón Social"
                        :rules="[(v) => !!v || 'Campo Requerido']"
                        required
                        class="centered-input"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="12">
                      <v-text-field
                        v-model="editedItem.nit"
                        label="NIT"
                        :rules="[(v) => !!v || 'Campo Requerido']"
                        required
                        class="centered-input"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="12">
                      <v-text-field
                        v-model="editedItem.contactoprincipal[0].nombre"
                        label="Nombre de contacto principal"
                        :rules="[(v) => !!v || 'Campo Requerido']"
                        required
                        class="centered-input"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="12">
                      <v-text-field
                        v-model="editedItem.contactoprincipal[0].telefono"
                        label="Teléfono de contacto principal"
                        :rules="[(v) => !!v || 'Campo Requerido']"
                        required
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
      <template  v-slot:[`item.actions`]="{ item }">
        <div>
        <v-icon style="margin-right: 10px" medium @click="editItem(item)"> mdi-pencil </v-icon>
       
        <v-icon style="margin-left: 10px" medium @click="editItem(item)"> mdi-map-marker-plus </v-icon></div>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize"> Reset </v-btn>
      </template>
    </v-data-table>

    <pre>
        {{$data.equipos}} <!-- para imprimir las categorias en pantalla -->
    </pre>
    <pre>
        {{$data.prueba}} <!-- para imprimir las categorias en pantalla -->
    </pre>
  </v-card>
</template>
<script>
export default {
  name: "ListarCLientes",
  data: () => ({
    expanded: [],
    input1: "",

    dialog: false,
    search: "",
    cargando: true,
    encabezado: [
      {
        text: "Sede",
        value: "nombre",
        align: "center",
        class: "titulo--text font-weight-bold",
        width: "50%",
      },
      {
        text: "Dirección",
        value: "direccion",
        align: "center",
        class: "titulo--text font-weight-bold",
        width: "50%",
      },
      {
        text: "Editar sede",
        value: "actions",
        sortable: false,
        
        class: "titulo--text font-weight-bold ",
        width: "50%",
      },
    ],
    headers: [
      {
        text: "Nombre/Razón social",
        align: "center",
        value: "nombre",
        class: "titulo--text font-weight-bold",
      },
      {
        text: "NIT",
        value: "nit",
        align: "center",
        class: "titulo--text font-weight-bold",
      },
      {
        text: "Nombre de contacto principal",
        value: "contactoprincipal[0].nombre",
        align: "center",
        class: "titulo--text font-weight-bold",
      },
      {
        text: "Teléfono de contacto principal",
        value: "contactoprincipal[0].telefono",
        align: "center",
        divider: true,
        class: "titulo--text font-weight-bold",
      },
      {
        text: "Editar cliente",
        value: "actions",
        sortable: false,
        align: "center",
        class: "titulo--text font-weight-bold",
      },
    ],
    desserts: [],
    editedIndex: -1,
    equipos: [],
    prueba: {},
    editedItem: {
      nit: "",
      nombre: "",
      contactoprincipal: [{}],
    },
    defaultItem: {
      nit: "",
      nombre: "",
      contactoprincipal: [{}],
    },
  }),

  computed: {
    formTitle() {
      return "Editar cliente";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
  },

  created() {
    this.listar();
  },

  methods: {
    listar() {
      //va a ir a mi backend y me traerá las peticiones de la base de datos
      axios
        .get("http://localhost:3000/api/cliente/listar")
        .then((response) => {
          this.equipos = response.data; //el this es porque no es propia de la funcion sino de l componente

          this.cargando = false;
          this.equipos.contactoprincipal =
            this.equipos.contactoprincipal[contactoprincipal.length - 1];
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
      this.listar();
    },

    save() {
      localStorage.setItem("equipo", JSON.stringify(this.editedItem));
      this.close();
      this.prueba = localStorage.getItem("equipo");
      this.$router.push({ name: "FormularioGenerarOrden" });
    },
  },
};
</script>
<style scoped>
.centered-input >>> input {
  text-align: center;
}
</style>