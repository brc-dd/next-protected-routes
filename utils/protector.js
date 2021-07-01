let oldToken, newToken;
const checkToken = ({ headers: { 'x-access-token': token } }) =>
  token && (token === oldToken || token === newToken);

const refreshToken = () => {
  oldToken = newToken;
  newToken = Math.random().toString(36).substr(2);

  setTimeout(refreshToken, 1.5 * 60 * 60 * 1000); // each token is valid for 3 hrs
};
refreshToken();

export { checkToken, newToken as accessToken };
