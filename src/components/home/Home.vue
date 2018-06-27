<template>
  <div>
    <h1 class="centralizado">{{ titulo }}</h1>
    <p v-show="mensagem" class="centralizado">{{ mensagem }}</p>
    <input type="search" class="form-control" @input="filtro = $event.target.value" placeholder="filtre por parte do título"/>
    <br/>
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotosComFiltro">
        <Card :titulo="foto.titulo" :descricao="foto.descricao">
          <img class="card-img-top img-thumbnail" :src="foto.url" :alt="foto.titulo">
          <Botao rotulo="REMOVER" estilo="perigo" tipo="" @botaoAtivado="remove(foto)" :confirmacao="true""/>
          <router-link :to="{name: 'cadastro', params: {id: foto._id}}"><Botao rotulo="ALTERAR" estilo="padrao" tipo=""/></router-link>
        </Card>
      </li>
    </ul>
  </div>
</template>

<script>
  import Botao from "../shared/botao/Botao";
  import transform from '../../directives/Transform';
  import FotoService from '../../domain/foto/FotoService'
  import Card from "../shared/card/Card";

  export default {

    components: {
      Card,
      Botao,
    },

    directives: {
      'meu-transform': transform
    },

    data: function() {
      return {
        titulo: 'Formulário de Imagens',
        fotos: [],
        filtro: '',
        mensagem: ''
      }
    },

    computed: {
      fotosComFiltro() {
        if (this.filtro) {
          let exp = new RegExp(this.filtro.trim(), 'i');
          return this.fotos.filter(foto => exp.test(foto.titulo));
        } else {
          return this.fotos;
        }
      }
    },

    methods: {
      remove(foto) {
        this.service.apaga(foto._id)
          .then(() => {
            let indice = this.fotos.indexOf(foto);
            this.fotos.splice(indice, 1);
            this.mensagem = 'Foto removida com sucesso'
          }, err => {
            this.mensagem = 'Não foi possível remover a foto';
          });
      }
    },

    created() {
      this.service = new FotoService(this.$resource);

      this.service.lista()
        .then(fotos => this.fotos = fotos, err => this.mensagem = err.message);
    }
  }
</script>

<style>
  .centralizado {
    text-align: center;
  }

  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }

  .filtro {
    display: block;
    width: 100%;
  }
</style>
