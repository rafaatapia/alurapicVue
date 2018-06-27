<template>
    <button @click="disparaAcao()" class="botao" :class="estiloDoBotao" :type="tipo">{{ rotulo }}</button>
</template>

<script>
    export default {

      props: {
        tipo: {
          required: true,
          type: String
        },
        rotulo: {
          required: true,
          type: String
        },
        confirmacao: Boolean,
        estilo: String
      },

      methods: {
        disparaAcao() {
          if (this.confirmacao) {
            if (confirm('Deseja realmente apagar?')) {
              this.$emit('botaoAtivado');
            }
            return;
          }
          this.$emit('botaoAtivado');
        }
      },

      computed: {
        estiloDoBotao() {
          if (this.estilo == 'padrao' || !this.estilo) return 'btn btn-primary';
          if (this.estilo == 'perigo') return 'btn btn-danger';
          if (this.estilo == 'gravar') return 'btn btn-success';
        }
      }
    }
</script>

<style scoped lang="scss">
@import './Botao.scss';
</style>
