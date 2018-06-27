<template>

  <div>
    <h1 class="centralizado">Cadastro</h1>
    <h2 class="centralizado">{{ foto.titulo }}</h2>
    <h4 v-if="foto._id" class="centralizado">Alterando</h4>
    <h4 v-else class="centralizado">Incluindo</h4>

    <form @submit.prevent="gravar()">
      <div class="controle">
        <label for="titulo">TÍTULO</label>
        <input class="form-control" v-validate data-vv-rules="required|min:3|max:30" data-vv-as="título" name="titulo" id="titulo" autocomplete="off" v-model="foto.titulo">
        <span class="error" v-show="errors.has('titulo')">{{ errors.first('titulo') }}</span>
      </div>

      <div class="controle">
        <label for="url">URL</label>
        <input class="form-control" v-validate data-vv-rules="required" name="url" id="url" autocomplete="off" v-model.lazy="foto.url">
        <img :src="foto.url" class="img-thumbnail">
        <span class="error" v-show="errors.has('url')">{{ errors.first('url') }}</span>
      </div>

      <div class="controle">
        <label for="descricao">DESCRIÇÃO</label>
        <textarea class="form-control" id="descricao" autocomplete="off" v-model="foto.descricao"></textarea>
      </div>

      <div class="centralizado">
        <meu-botao rotulo="GRAVAR" estilo="gravar" tipo="submit"/>
        <router-link :to="{ name: 'home'}"><meu-botao rotulo="VOLTAR" tipo="button"/></router-link>
      </div>

    </form>
  </div>
</template>

<script>

  import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue'
  import Botao from '../shared/botao/Botao.vue';
  import Foto from '../../domain/foto/Foto';
  import FotoService from "../../domain/foto/FotoService";

  export default {

    components: {

      'imagem-responsiva': ImagemResponsiva,
      'meu-botao': Botao
    },

    data(){
      return {
        foto: new Foto(),
        id: this.$route.params.id
      }
    },

    methods: {
      gravar(){
        this.$validator.validateAll().then(success => {
          if(success){
            this.service.cadastra(this.foto).then(() => {
              if(this.id) this.$router.push({name: 'home'});
              this.foto = new Foto();
            }, err => console.log(err));
          }
        });

      }
    },

    created() {
      this.service = new FotoService(this.$resource);

      if(this.id){
        this.service.busca(this.id).then(foto => this.foto = foto);
      }

    }
  }

</script>
<style scoped lang="scss">
@import "Cadastro";

</style>
