const getters = {
  roles: (state) => state.user.roles,
  token: (state) => state.user.token,
  addRouters: (state) => state.permission.addRouters
}
export default getters