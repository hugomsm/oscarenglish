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
      path: '/class/:id',
      component: () =>
        import('pages/class')
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
