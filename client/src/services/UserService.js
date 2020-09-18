import axios from 'axios';
const BASE_URL =
  navigator.userAgent === 'ReactSnap'
    ? 'http://ec2-15-164-210-226.ap-northeast-2.compute.amazonaws.com:5000'
    : '';

const USER_URI = `${BASE_URL}/api/v1/users`;

export default class UserService {
  static async authenticate() {
    const { data } = await axios.post(`${USER_URI}/auth`);
    console.log(`User authentication done: ${data.isAuth}`);
    return data;
  }

  static async checkEmail({ email }) {
    const { data } = await axios({
      method: 'POST',
      url: `${USER_URI}/emails`,
      data: {
        email,
      },
    });
    return { data, email };
  }
  static async login({ email, password }) {
    const { data } = await axios({
      method: 'POST',
      url: `${USER_URI}/login`,
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
      url: `${USER_URI}/`,
      data: user,
    });
    return data;
  }

  static async patchUser(payload) {
    const { data } = await axios({
      method: 'PATCH',
      url: `${USER_URI}/`,
      data: payload,
    });
    return data;
  }

  static async logout() {
    const { data } = await axios({
      method: 'POST',
      url: `${USER_URI}/logout`,
    });
    return data;
  }

  static async deactivate(user) {
    const result = await axios({
      method: 'DELETE',
      url: `${USER_URI}/`,
    });
    return result.status;
  }

  static async toggleEnlistedEvent({ eventId, userId, type }) {
    const { data } = await axios({
      method: 'PATCH',
      url: `${USER_URI}/${userId}/enlisted?type=${type}`,
      data: {
        event_id: eventId,
      },
    });
    return data;
  }

  static async toggleLikedEvent({ eventId, userId, type }) {
    const { data } = await axios({
      method: 'PATCH',
      url: `${USER_URI}/${userId}/liked?type=${type}`,
      data: {
        event_id: eventId,
      },
    });
    return data;
  }
  static async toggleHostingEvent({ eventId, userId, type }) {
    const { data } = await axios({
      method: 'PATCH',
      url: `${USER_URI}/${userId}/hosting?type=${type}`,
      data: {
        event_id: eventId,
      },
    });
    return data;
  }
}
