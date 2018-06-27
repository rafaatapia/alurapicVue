import Home from './components/home/Home.vue';

const Cadastro = () => System.import('./components/cadastro/Cadastro.vue');
const AluraPay = () => System.import('./components/alurapay/AluraPay.vue');

export const routes = [
  {path: '', name: 'home', component: Home, titulo: 'Home', menu: true},
  {path: '/cadastro', name: 'cadastro', component: Cadastro, titulo: 'Cadastro', menu: true},
  {path: '/cadastro/:id', name: 'altera', component: Cadastro, titulo: 'Cadastro', menu: false},
  {path: '/pagamento', name: 'pagamento', component: AluraPay, titulo: 'Pagamento', menu: true},
  {path: '*', component: Home, menu: false}
];
