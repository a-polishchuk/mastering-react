import axios from 'axios';
import { useEffect, useState } from 'react';
import { User } from './User';

export function useUser(userId: number) {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => setUser(response.data));
  }, [userId]);

  return user;
}
