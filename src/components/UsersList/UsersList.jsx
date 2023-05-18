import css from '../UsersList/UsersList.module.css';

export const UsersList = ({ users, handleFollow }) => {
  return (
    <ul className={css.list}>
      {users.length > 0 &&
        users.map(({ id, avatar, user, tweets, followers, isFollow }) => (
          <li key={id} className={css.item}>
            <div className={css.background}></div>
            <div className={css.avatar}>
              <div className={css.before}></div>
              <div className={css.after}>
                <img className={css.image} src={avatar} alt={user} />
              </div>
            </div>
            {/* <img className={css.avatar} src={avatar} alt={user} /> */}
            <p className={`${css.text} ${css.tweets}`}>{tweets} tweets</p>
            <p className={`${css.text} ${css.followers}`}>
              {followers} followers
            </p>
            <button
              className={css.btn}
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
