<template>
  <v-container>

           
    <v-stepper
      v-for="(ejemplo, m) in ejemplos"
      :key="m"
      v-model="ejemplos[m].curr"
      color="green"
      
    >
      <v-stepper-header>
        <v-stepper-step
          v-for="(step, n) in ejemplos[m].steps"
          :key="n"
          :complete="stepComplete(m, n + 1)"
          :step="n + 1"
          :color="stepStatus(m, n + 1)"
        >
          {{ step.name }}
        </v-stepper-step>
      </v-stepper-header>
      <v-stepper-content v-for="(step, n) in ejemplos[m].steps" :step="n + 1" :key="n">
        {{ step.name }}
        <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
        <v-btn v-if="n + 1 < ejemplos[m].lastStep" color="primary" @click="ejemplos[m].curr = n + 2"
          >Continue</v-btn
        >
        <v-btn v-else color="success" @click="done(m)">Done</v-btn>
        <v-btn text @click="ejemplos[m].curr = n">Back</v-btn>
      </v-stepper-content>
    </v-stepper>
  </v-container>
</template>

<script>
export default {
  name: "PasosComponent",
  components: {},
  data: () => ({
    ejemplos: [
      {
        curr: 1, // Paso actual
        lastStep: 4, //Cantidad máxima de pasos
        steps: [
          { name: "Start" },
          { name: "Step 2" },
          { name: "Step 3" },
          { name: "Complete" },
        ],
      },
            {
        curr: 1, // Paso actual
        lastStep: 4, //Cantidad máxima de pasos
        steps: [
          { name: "Start" },
          { name: "Step 2" },
          { name: "Step 3" },
          { name: "Complete" },
        ],
      },
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
  },
};
</script>

<style >
</style>
