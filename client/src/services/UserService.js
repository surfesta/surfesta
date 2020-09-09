import axios from 'axios';
const URL = '/api/v1/users';

export default class UserService {
  static async authenticate() {
    const { data } = await axios.post(`${URL}/auth`);
    console.log(`User authentication done: ${data.isAuth}`);
    return data;
  }

  static async checkEmail({ email }) {
    const { data } = await axios({
      method: 'POST',
      url: `${URL}/login`,
      data: {
        email,
      },
    });
    return { data, email };
  }
  static async login({ email, password }) {
    const { data } = await axios({
      method: 'POST',
      url: `${URL}/login/password`,
      data: {
        email,
        password,
      },
    });
    return data;
  }

  static async register(user) {
    const { data } = await axios({
      method: 'POST',
      url: `${URL}/`,
      data: user,
    });
    console.log(data);
    return data;
  }

  static async logout() {
    const { data } = await axios({
      method: 'POST',
      url: `${URL}/logout`,
    });
    return data;
  }

  static async deactivate(user) {
    const result = await axios({
      method: 'DELETE',
      url: `${URL}/`,
    });
    return result.status;
  }
}
