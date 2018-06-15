<template>
    <th :class="estiloLinha">{{ status }}</th>
</template>

<script>
    export default {
        name: "linha",

        props:['status'],

        computed:{
          estiloLinha(){
            if(this.status == 'CONFIRMADO'){
                return 'confirmado';
            } else if(this.status == 'CANCELADO'){
                return 'cancelado';
            } else {
                return 'normal';
            }
          }
        }
    }
</script>

<style scoped>
  .confirmado{
    color: green;
  }

  .cancelado{
    color: red;
  }

  .normal{
    color: lightblue;
  }


</style>
