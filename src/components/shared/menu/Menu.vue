<template>
  <nav>
    <ul class="nav">
      <li v-for="rota in rotas" class="nav-item">
        <router-link class="nav-link" :to="rota.path ? rota.path : '/'">{{ rota.titulo }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
    export default {
        props: {
          rotas: {
            type: Array,
            require: true
          }
        }
    }
</script>

<style scoped>

</style>
