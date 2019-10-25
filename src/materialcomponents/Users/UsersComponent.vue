<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left"> atualizadoEm</th>
          <th class="text-left"> criadoEm</th>
          <th class="text-left"> id</th>
          <th class="text-left"> login</th>
          <th class="text-left"> nome</th>
          <th class="text-left"> permissaoId</th>
          <th class="text-left"> setorId</th>
          <th class="text-left"> sobrenome</th>
          <th class="text-left"> status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in usuarios" :key="item.id">
          <td>{{ item.atualizadoEm  }}</td>
          <td>{{ item.criadoEm  }}</td>
          <td>{{ item.id  }}</td>
          <td>{{ item.login }}</td>
          <td>{{ item.nome  }}</td>
          <td>{{ item.permissaoId }}</td>
          <td>{{ item.setorId }}</td>
          <td>{{ item.sobrenome }}</td>
          <td>{{ item.status  }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<style lang="scss" scoped>
  .md-card {
    padding-top:5px;
    margin:5% auto;
    text-align:center;
  }
  .md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }
</style>

<script>
import gql from 'graphql-tag'
export default {
  name: 'UsersComponent',
  apollo:{
    usuarios: {
       query: gql `` // jsonfromusers
    }   
  },
  methods:{
      login (){
          this.$router.push( '/app' );
      }
  },
  data:()=>({})
}
</script>