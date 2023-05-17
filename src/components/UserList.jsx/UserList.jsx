import { useEffect, useState } from 'react';
import { updateUser } from 'servises/updateUser';
import { getUsers } from '../../servises/getUsers';

export const UserList = () => {
  const [users, setUsers] = useState([]);
  

  useEffect(() => {
    getUsers()
      .then(res => {
        setUsers(res);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleFollow = (user) => {
    updateUser(user.id, user)
      setUsers(prevState =>
        prevState.map(el => {
          if (el.id === user.id) {
            return {
              ...el,
              followers: !el.isFollow ? el.followers + 1 : el.followers - 1,
              isFollow: !el.isFollow,
            };
          } else return el
            // el.id === user.id ? { ...el, isFollow: !el.isFollow } : el;
        }
          
        )
      );
  };

  return (
    <ul>
      {users.length > 0 &&
        users.map(({ id, avatar, user, tweets, followers, isFollow }) => (
          <li key={id}>
            <h2>{user}</h2>
            <img src={avatar} alt={user} />
            <p>{tweets}</p>
            <p>{followers}</p>
            <button
              type="button"
              onClick={() =>
                handleFollow({
                  id,
                  avatar,
                  user,
                  tweets,
                  followers,
                  isFollow: !isFollow,
                })
              }
            >
              {isFollow ? 'Following' : 'Follow'}
            </button>
          </li>
        ))}
    </ul>
  );
};
