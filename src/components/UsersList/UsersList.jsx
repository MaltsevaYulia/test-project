// import { useEffect, useState } from 'react';
// import { updateUser } from 'servises/updateUser';
// import { getUsers } from '../../servises/getUsers';

export const UsersList = ({ users, handleFollow }) => {
    console.log("🚀 ~ UsersList ~ users:", users)
    
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
