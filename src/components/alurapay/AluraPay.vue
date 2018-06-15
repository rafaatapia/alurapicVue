<template>
    <div>
      <ul>
        <h1 class="titulo animated pulse">TESTE DE INTEGRAÇÃO COM ALURAPAY</h1>
        <table class="tabela">
          <tr>
            <th>ID</th>
            <th>VALOR</th>
            <th>MOEDA</th>
            <th>STATUS</th>
          </tr>
          <tr v-for="p in pagamentos">
            <th>{{p.id}}</th>
            <th>{{p.valor}}</th>
            <th>{{p.moeda}}</th>
            <linha :status="p.status"/>
          </tr>
        </table>
      </ul>
    </div>
</template>

<script>
    import Linha from "../shared/linha/linha";
    export default {
        name: "AluraPay.vue",
      components: {Linha},
      data() {
            return{
              pagamentos:[],
              timer: ''
            }
        },

        created() {
          this.atualizaLista();
          this.timer = setInterval(this.atualizaLista, 3000)
        },

        methods: {
          atualizaLista(){
              this.$http.get('http://localhost:3001/pagamentos')
                .then(res => res.json())
                .then(pagamentos => this.pagamentos = pagamentos, err => console.log(err));
          }
        },

      beforeDestroy() {
        clearInterval(this.timer)
      }
    }
</script>

<style scoped>
  .titulo {
    text-align: center;
    font-size: 40px;
  }

  .animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  @keyframes pulse {
    from {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }

    50% {
      -webkit-transform: scale3d(1.05, 1.05, 1.05);
      transform: scale3d(1.05, 1.05, 1.05);
    }

    to {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }

  .pulse {
    -webkit-animation-name: pulse;
    animation-name: pulse;
  }

  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }

  .verde{
    color: lawngreen;
  }

  .vermelho{
    color: red;
  }

  .verde .vermelho{
    color: yellow;
  }

</style>
