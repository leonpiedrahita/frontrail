<template>
  
  <imprimir-hv-component/>
</template>

<script>
import jsPDF from "jspdf";

import html2canvas from "html2canvas";

import ImprimirHvComponent from '../components/ImprimirHvComponent.vue';
export default {
  components: {
    
    
    ImprimirHvComponent,
  },
  mounted() {
    setTimeout(() => {  this.imprimir(); }, 3000);
       
  },
  methods: {
    imprimir() {
      var printContents = document.getElementById("body").innerHTML;
      var originalContents = document.body.innerHTML;

      document.body.innerHTML = printContents;

      window.print();
      
    },
    printFacture() {
      var pdf = new jsPDF();
      var element = document.getElementById("body");
      
      html2canvas(element).then((canvas) => {
        var image = canvas.toDataURL("image/jpeg",1);
        pdf.addImage(image, "JPEG", 15, 15);
        
        pdf.save("body" + ".pdf");
      });
    },
  },
};
</script>
<style >



</style>
