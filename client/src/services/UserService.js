import axios from 'axios';
const URL = 'http://localhost:5000/api/v1/users';

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
    console.log(data);
    return data;
  }

  static async register(user) {
    const { data } = await axios({
      method: 'POST',
      url: `${URL}/`,
      data: user,
    });
    return data;
  }

  static async logout() {}
}
