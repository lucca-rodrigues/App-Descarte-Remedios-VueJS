
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'login', component: () => import('pages/Login.vue') },
      { path: 'cadastro', component: () => import('pages/Cadastro.vue') },
      { path: 'cadastrar-endereco', component: () => import('pages/CadastrarEndereco.vue') },
      { path: 'localizacao', component: () => import('pages/Localizacao.vue') },
      { path: 'painel-usuario', component: () => import('pages/PainelUsuario.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
