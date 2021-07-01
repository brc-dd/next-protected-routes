import Tokens from 'csrf';

const tokens = new Tokens();

let secret, csrfToken, oldSecret;
const checkToken = ({ headers }) =>
  tokens.verify(secret, headers['xsrf-token']) ||
  (oldSecret && tokens.verify(oldSecret, headers['xsrf-token']));

const refreshToken = () => {
  oldSecret = secret;
  secret = tokens.secretSync();
  csrfToken = tokens.create(secret);

  setTimeout(refreshToken, 1.5 * 60 * 60 * 1000); // each token is valid for 3 hrs
};
refreshToken();

export { checkToken, csrfToken };
