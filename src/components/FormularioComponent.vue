<template>
<v-layout>
  <div id="body">
    <div class="paddingfilas">
      <div class="gridencabezado titulo principal negrita">
        <div><img class="miimagen" /></div>
        <div class="nombrereporte">Reporte de asistencia técnica</div>
        <div class="gridparejas">
          <div>N°</div>
          <v-div class="dato">            
              {{informacion.nombre}}            
          </v-div>
        </div>
      </div>
      <div class="gridtitulo titulo principal negrita">
        <div>Detalles de la asistencia</div>
      </div>
      <div class="grid principal" fluid>
        <div class="gridparejas">
          <div class="subtitulonegrita">Tipo de asistencia :</div>
          <div class="dato">Mantenimiento preventivo.</div>
        </div>
        <div class="gridparejas">
          <div class="subtitulonegrita">Duración :</div>
          <div class="dato">5 horas</div>
        </div>
        <div class="gridparejas">
          <div class="subtitulonegrita">Fecha de inicio :</div>
          <div class="dato">01-01-2021</div>
        </div>
        <div class="gridparejas">
          <div class="subtitulonegrita">Fecha de finalización :</div>
          <div class="dato">01-01-2021</div>
        </div>
      </div>
      <div class="gridtitulo titulo principal negrita">
        <div>Información del Cliente</div>
      </div>
      <div class="grid principal" fluid>
        <div class="gridparejas">
          <div class="subtitulonegrita">Nombre/Razón social :</div>
          <div class="dato">Lorem, ipsum dolor.</div>
        </div>
        <div class="gridparejas">
          <div class="subtitulonegrita">NIT :</div>
          <div class="dato">123456789</div>
        </div>
        <div class="gridparejas">
          <div class="subtitulonegrita">Sede :</div>
          <div class="dato">Lorem.</div>
        </div>

        <div class="gridparejas">
          <div class="subtitulonegrita">Dirección :</div>
          <div class="dato">Lorem ipsum dolor sit.</div>
        </div>
        <div class="gridparejas">
          <div class="subtitulonegrita">Nombre del Profesional :</div>
          <div class="dato">Lorem ipsum dolor sit.</div>
        </div>
        <div class="gridparejas">
          <div class="subtitulonegrita">Teléfono :</div>
          <div class="dato">123456789</div>
        </div>
      </div>
      <div class="gridtitulo titulo principal negrita">
        <div>Información del Equipo Biomédico</div>
      </div>
      <div class="grid principal" fluid>
        <div class="gridparejas">
          <div class="subtitulonegrita">Nombre :</div>
          <div class="dato">Lorem, ipsum dolor.</div>
        </div>
        <div class="gridparejas">
          <div class="subtitulonegrita">Número de serie :</div>
          <div class="dato">123456789</div>
        </div>
        <div class="gridparejas">
          <div class="subtitulonegrita">Marca :</div>
          <div class="dato">Lorem.</div>
        </div>

        <div class="gridparejas">
          <div class="subtitulonegrita">Propietario :</div>
          <div class="dato">Lorem ipsum dolor sit.</div>
        </div>
      </div>
      <div class="gridtitulo titulo principal negrita">
        <div>Hallazgos</div>
      </div>
      <div class="gridcontenido titulo principal">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At vitae
          suscipit officiis aperiam illum deserunt deleniti. Quae laudantium
          perspiciatis, omnis, ducimus nesciunt quam similique asperiores
          voluptatum debitis velit veritatis quaerat!
        </div>
      </div>
      <div class="gridtitulo titulo principal negrita">
        <div>Actividades realizadas</div>
      </div>
      <div class="gridcontenido titulo principal">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At vitae
          suscipit officiis aperiam illum deserunt deleniti. Quae laudantium
          perspiciatis, omnis, ducimus nesciunt quam similique asperiores
          voluptatum debitis velit veritatis quaerat!
        </div>
      </div>
      <div class="gridtitulo titulo principal negrita">
        <div>Pruebas de aceptación</div>
      </div>
      <div class="gridcontenido titulo principal">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At vitae
          suscipit officiis aperiam illum deserunt deleniti. Quae laudantium
          perspiciatis, omnis, ducimus nesciunt quam similique asperiores
          voluptatum debitis velit veritatis quaerat!
        </div>
      </div>
      <div class="gridtitulo titulo principal negrita">
        <div>Repuestos utilizados</div>
      </div>
      <div class="gridcontenido titulo principal">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At vitae
          suscipit officiis aperiam illum deserunt deleniti. Quae laudantium
          perspiciatis, omnis, ducimus nesciunt quam similique asperiores
          voluptatum debitis velit veritatis quaerat!
        </div>
      </div>
      <div class="gridtitulo titulo principal negrita">
        <div>Observaciones</div>
      </div>
      <div class="gridcontenido titulo principal">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At vitae
          suscipit officiis aperiam illum deserunt deleniti. Quae laudantium
          perspiciatis, omnis, ducimus nesciunt quam similique asperiores
          voluptatum debitis velit veritatis quaerat!
        </div>
      </div>
    </div>
  </div>
 </v-layout>
  
</template>

<script>


export default {
  components: {},
  data:()=> ({
    informacion:{
      nombre:null,
      otracosa:""
    }
  }),
   created(){
    this.listar();
    
  }, 
  methods: {
    listar(){
      this.informacion.nombre= 12345;
    },
  }    

};
</script>
<style >
.btn {
  background-color: DodgerBlue;
  border: none;
  color: white;
  padding: 12px 30px;
  cursor: pointer;
  font-size: 20px;
}

/* Darker background on mouse-over */
.btn:hover {
  background-color: RoyalBlue;
}
.grid > div {
  background-color: #ffffff;
  padding: 5px;
  text-align: center;
  text-justify: center;
  border-radius: 3px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(auto, auto);
  gap: 1px;
}
.principal {
  padding: 0px;
  background-color: #424242;
}
.titulo {
  grid-column: 1;
}
.gridencabezado {
  display: grid ;
  
  grid-template-columns: 2fr 4fr 3fr;
  grid-template-rows: repeat(1, auto);
  gap: 1px;
  background-color: #424242;
  
}
.gridencabezado > div {
  
  align-items: center;
  
  background-color: #ffffff;
  padding: 5px;
  text-align: center;
  text-justify: center;
  border-radius: 3px;

  /* border: 5px solid black; */
}
.nombrereporte{
  display: flex;
   align-items: center;
  justify-content: center;
  font-size: 150%;
}
.gridcontenido {
  display: grid;
  grid-template-columns: repeat(1, auto);
  grid-template-rows: repeat(1, auto);
  gap: 1px;
  background-color: #424242;
}
.gridcontenido > div {
  background-color: #ffffff;
  padding: 5px;
  text-align: justify;
  text-justify: center;
  border-radius: 3px;

  /* border: 5px solid black; */
}
.paddingfilas {
  background-color: #424242;
  display: grid;
  row-gap: 2px;
  padding: 3px;
}
.gridtitulo {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(1, auto);
  gap: 1px;
  background-color: #424242;
}
.gridtitulo > div {
  background-color: #cfd8dc;
  padding: 5px;
  text-align: center;
  text-justify: center;
  border-radius: 3px;

  /* border: 5px solid black; */
}
.gridparejas {
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-template-rows: repeat(1, auto);
  background-color: #424242;
  align-items: center;

  /* border: 5px solid black; */
}
.dato {
  text-align: left;
  text-justify: center;
}
.negrita{
  font-weight: bold;
}
.subtitulonegrita{
  font-weight: 500;
}
img{
  width: 70%; 
  height: 100%;
}
.miimagen{
    content:url("../imagenes/logo/biosystems.jpg");
}

@media (max-width: 767px) {
  
  .grid {
  display: grid;
  grid-template-columns: repeat(1, 100%);
  grid-template-rows: repeat(auto, auto);
  gap: 1px;
}
.principal {
  padding: 0px;
  background-color: #424242;
   grid-column-start: 1;
  grid-column-end: 2;
  
}
img{
  width: 100%; 
  height: 100%;
  
}
.miimagen{
    content:url("../imagenes/logo/BS.png");
}
.gridparejas {
  display: grid;
  grid-template-columns: 3fr 3fr;
  grid-template-rows: repeat(1, auto);
  background-color: #424242;
  align-items: center;

  /* border: 5px solid black; */
}
.paddingfilas {
  background-color: #424242;
  display: grid;
  row-gap: 2px;
  padding: 2px;
  -webkit-print-color-adjust: exact;
  
  
}
  
}
@media print {

.grid > div {
  background-color: #ffffff;
  padding: 5px;
  /* border: 5px solid black; */
  text-align: center;
  text-justify: center;
  border-radius: 3px;
  
}
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(auto, auto);
  gap: 1px;
}
.principal {
  padding: 0px;
  background-color: #424242;
  -webkit-print-color-adjust: exact;
}
.titulo {
  grid-column: 1;
}
.gridencabezado {
  display: grid ;
  
  grid-template-columns: 2fr 4fr 3fr;
  grid-template-rows: repeat(1, auto);
  gap: 1px;
  background-color: #424242;
  
}
.gridencabezado > div {
  
  align-items: center;
  
  background-color: #ffffff;
  padding: 5px;
  text-align: center;
  text-justify: center;
  border-radius: 3px;

  /* border: 5px solid black; */
}
.nombrereporte{
  display: flex;
   align-items: center;
  justify-content: center;
  font-size: 100%;
}
.gridcontenido {
  display: grid;
  grid-template-columns: repeat(1, auto);
  grid-template-rows: repeat(1, auto);
  gap: 1px;
  background-color: #424242;
}
.gridcontenido > div {
  background-color: #ffffff;
  padding: 5px;
  text-align: justify;
  text-justify: center;
  border-radius: 3px;

  /* border: 5px solid black; */
}
.paddingfilas {
  background-color: #424242;
  display: grid;
  row-gap: 2px;
  padding:5px;
  -webkit-print-color-adjust: exact;
  
  
}
.gridtitulo {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(1, auto);
  gap: 1px;
  background-color: #424242;
}
.gridtitulo > div {
  background-color: #cfd8dc;
  padding: 5px;
  text-align: center;
  text-justify: center;
  border-radius: 3px;

  /* border: 5px solid black; */
}
.gridparejas {
  display: grid;
  grid-template-columns: 3fr 4fr;
  grid-template-rows: repeat(1, auto);
  background-color: #424242;
  align-items: center;

  /* border: 5px solid black; */
}
.dato {
  text-align: left;
  text-justify: center;
}
.negrita{
  font-weight: bold;
}
.subtitulonegrita{
  font-weight: 500;
}
img{
  width: 70%; 
  height: 100%;
}
.miimagen{
    content:url("../imagenes/logo/biosystems.jpg");
}
}
</style>
