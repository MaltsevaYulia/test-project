//updateUser.js

import axios from 'axios';
export const updateUser = async (id,user) => {
  try {
    const respons = await axios.put(`/users/${id}`, user);
    console.log('🚀 ~ updateUser ~ respons.data:', respons.data);

    return respons.data;
  } catch (error) {}
};
