const routes = [
  {
    path: "/",
    component: () => import("layouts/aluno.vue"),
    children: [{ path: "", component: () => import("pages/lista-aulas.vue") }]
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
