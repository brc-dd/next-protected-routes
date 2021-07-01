import Tokens from 'csrf';

const tokens = new Tokens();

let secret, csrfToken;
const checkToken = ({ headers }) => tokens.verify(secret, headers['xsrf-token']);

const refreshToken = () => {
  secret = tokens.secretSync();
  csrfToken = tokens.create(secret);

  setTimeout(refreshToken, 3 * 60 * 60 * 1000); // every 3 hr
};
refreshToken();

export { checkToken, csrfToken };
