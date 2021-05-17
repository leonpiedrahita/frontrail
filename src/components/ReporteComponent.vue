<template>
  <div >
    <formulario-component></formulario-component>

    <button id="boton" @click="imprimir">Download PDF</button>
  </div>
</template>

<script>

import  FormularioComponent  from '../components/FormularioComponent'


export default {
  name: "ReporteComponent",
  components: {
    FormularioComponent
    
  },
  data:()=> ({
 
  }),
 
  methods: {
   
    imprimir() {
      window.open("/", "_blank");
      /*       var originalContents = document.body.innerHTML;
      document.getElementById("boton").hidden= "off"; 
      var printContents = document.getElementById("body").innerHTML;
      

      document.body.innerHTML = printContents;

      window.print();
      
      document.body.innerHTML = originalContents; */
    },
  },
};
</script>

<style >

</style>
