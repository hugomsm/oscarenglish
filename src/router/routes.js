const routes = [
  {
    path: "/",
    component: () => import("layouts/aluno.vue"),
    children: [{ path: "", component: () => import("pages/lista-aulas.vue") },
    { path: 'aula1', component: () => import('pages/aula1') }]
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
