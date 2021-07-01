import { useState, useEffect } from 'react';

import { csrfToken } from '../utils/csrfLib';

const Home = ({ csrfToken }) => {
  const [user, setUser] = useState('Guest');

  useEffect(() => {
    fetch('/api/user', { headers: { 'xsrf-token': csrfToken } })
      .then((response) => response.json())
      .then((data) => setUser(data.name));

    return () => {};
  }, []);

  return <div>Hello {user}!</div>;
};

const getServerSideProps = async () => {
  return { props: { csrfToken } };
};

export default Home;
export { getServerSideProps };
