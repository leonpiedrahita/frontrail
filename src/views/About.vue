<template>
  <v-container fluid>
    <v-layout rgb(41, 123, 190)>
      <v-flex xs12>
        <v-simple-table>
          <tbody>
            <th class="text-center font-weight-bold">Fechas</th>
          </tbody>
        </v-simple-table>
      </v-flex>
    </v-layout>
    <v-layout wrap rgb(41, 123, 190)>
      <v-flex xs12 lg4>
        <v-simple-table height="auto">
          <tbody>
            <td>{{ desserts[0].name }}</td>
            <td>{{ desserts[0].calories }}</td>
          </tbody>
        </v-simple-table>
      </v-flex>

      <v-flex xs12 lg4>
        <v-simple-table height="auto">
          <tbody>
            <td >{{ desserts[1].name }}</td>
            <td >{{ desserts[1].calories }}</td>
          </tbody>
        </v-simple-table>
      </v-flex>

      <v-flex xs12 lg4>
        <v-simple-table height="auto">
          <tbody>
            <td>{{ desserts[2].name }}</td>
            <td>{{ desserts[2].calories }}</td>
          </tbody>
        </v-simple-table>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex xs6>
        <v-simple-table height="auto">
          <tbody>
            <tr v-for="item in desserts" :key="item.name">
              <td>{{ item.name }}</td>
               <v-divider
      class="mx-4 primary"
      vertical

    ></v-divider>
              <td>{{ item.calories }}</td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      desserts: [
        {
          name: "Fecha de inicio:",
          calories: 237,
        },
        {
          name: "Fecha de finalización:",
          calories: 237,
        },
        {
          name: "Duración de la asistencia:",
          calories: 262,
        },
      ],
    };
  },
};
</script>
<style scoped>
table,
th,
td {
  border: 1px solid rgb(41, 123, 190);
 /*  border-bottom: 1px solid rgb(41, 123, 190);
  border-left: 1px solid rgb(41, 123, 190); */
  text-align: center;
  border-collapse: collapse;
  
}
td,
th {
  padding:3px;
  
}

</style>