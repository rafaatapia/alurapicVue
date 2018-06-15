import Cadastro from './components/cadastro/Cadastro.vue';
import Home from './components/home/Home.vue';
import AluraPay from './components/alurapay/AluraPay.vue';

export const routes = [
  {path: '', component: Home, titulo: 'Home'},
  {path: '/cadastro', component: Cadastro, titulo: 'Cadastro'},
  {path: '/pagamento', component: AluraPay, titulo: 'Pagamento'}
];
