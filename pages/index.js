import { useState, useEffect } from 'react';

import { accessToken } from '../utils/protector';

const Home = ({ accessToken }) => {
  const [user, setUser] = useState('Guest');

  useEffect(() => {
    // this will be called from the client
    fetch('/api/user', { headers: { 'x-access-token': accessToken } })
      .then((response) => response.json())
      .then((data) => setUser(data.name));

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>Hello {user}!</div>;
};

const getServerSideProps = async () => {
  return { props: { accessToken } };
};

export default Home;
export { getServerSideProps };
