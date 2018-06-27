<template>
  <div class="card" style="width: 18rem;">
    <div>
      <slot></slot>
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ titulo }}</h5>
      <p class="card-text">{{ descricao }}</p>
    </div>
  </div>
</template>

<script>
  import Botao from "../botao/Botao";
  export default {
    components: {Botao},
    props: ['titulo', 'descricao'],

  }
</script>

<style scoped>

</style>
