const routes = [{
  path: "/",
  component: () =>
    import("layouts/aluno.vue"),
  children: [{
      path: "",
      component: () =>
        import("pages/lista-aulas.vue")
    },
    {
      path: '/aula/:id',
      component: () =>
        import('pages/aula')
    }
  ]
}];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () =>
      import("pages/Error404.vue")
  });
}

export default routes;
