import { checkToken } from '../../utils/csrfLib';

const handler = (req, res) => {
  if (checkToken(req)) {
    // you API logic here ...

    res.status(200).json({ name: 'John Doe' });
  } else res.status(401).send();
};

export default handler;
