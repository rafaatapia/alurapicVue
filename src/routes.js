import Cadastro from './components/cadastro/Cadastro.vue';
import Home from './components/home/Home.vue';
import AluraPay from './components/alurapay/AluraPay.vue';

export const routes = [
  {path: '', name: 'home', component: Home, titulo: 'Home', menu: true},
  {path: '/cadastro', name: 'cadastro', component: Cadastro, titulo: 'Cadastro', menu: true},
  {path: '/pagamento', name: 'pagamento', component: AluraPay, titulo: 'Pagamento', menu: true},
  {path: '*', component: Home, menu: false}
];
