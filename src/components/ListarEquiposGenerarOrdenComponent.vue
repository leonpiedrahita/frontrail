<template>
  <v-card>
    <v-data-table
      :headers="headers"
      :items="equipos"
      :search="search"
      sort-by="name"
      class="elevation-1"
      :loading="cargando"
      loading-text="Cargando ... por favor espere"
    >
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
                <v-container >
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
                <v-btn color="blue darken-1" text @click="save"> Generar </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon medium @click="editItem(item)"> mdi-pencil </v-icon>        
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
  name: "ListarEquiposGenerarOrden",
  data: () => ({
    dialog: false,
    search: "",
    cargando: true,
    headers: [
      {
        text: "Cliente asignado",
        align: "center",
        value: "cliente.nombre",
      },
      { text: "Nombre del dispositivo", value: "nombre",align: "center" },
      { text: "Número de serie", value: "serie",align: "center" },
      { text: "Crear Reporte", value: "actions", sortable: false,align: "center" },
    ],
    desserts: [],
    editedIndex: -1,
    equipos:[],
    prueba:{},
    editedItem: {
      cliente:{
        nombre:""
      },
      nombre:"",
      serie:""
    },
    defaultItem: {
      cliente:{
        nombre:""
      },
      nombre:"",
      serie:""
    },
  }),

  computed: {
    formTitle() {
      return  "Generar Reporte" ;
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
      localStorage.setItem('equipo', JSON.stringify(this.editedItem));
      this.close();
      this.prueba = localStorage.getItem("equipo")
      this.$router.push({name: 'FormularioGenerarOrden'});
    },
  },
};
</script>
<style scoped>
    .centered-input >>> input {
      text-align: center
    }
</style>