import router from '@/router'
// console.log(router);

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})