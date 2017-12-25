export const decodeJwt = (jwtToken) => {
  const base64Url = jwtToken.split('.')[1];
  const base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
}