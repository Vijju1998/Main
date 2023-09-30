import Services from '../api/user/Login/userLogin';

export const fetchUser = () => {
  return Services.userLoginApi('http://localhost:3001')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.message;
    });
};
