import axios from 'axios';
const URL = '/api/v1/users';

export default class UserService {
  static async authenticate() {
    const res = await axios.post(`${URL}/auth`);
    console.log(`User authentication done: ${res.data.isAuth}`);
    return res.data.isAuth;
  }

  static async checkEmail({ email }) {
    const { data } = await axios({
      method: 'POST',
      url: `${URL}/login`,
      data: {
        email,
      },
    });
    return { result: data.emailCheck, email };
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

  static async logout() {}
}
