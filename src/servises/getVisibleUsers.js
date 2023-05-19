export const getVisibleUsers = (users, filterStatus) => {
  if (filterStatus === 'all') {
    return users;
  } else if (filterStatus === 'follow') {
    return users.filter(user => !user.isFollow);
  } else if (filterStatus === 'followings') {
    return users.filter(user => user.isFollow);
  }
}; 