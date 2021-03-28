import Cookies from 'js-cookie'
const Token = 'Token'
export function getToken() {
  // console.log(token);
  return Cookies.get(Token)
}

export function setToken(token) {
  // console.log(token);
  return Cookies.set(Token, token)
}

export function removeToken() {
  // console.log(token);
  return Cookies.remove(Token)
}