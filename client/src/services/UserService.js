import axios from "axios";
const URL = "/api/v1/users";
const USER_1_ID = "5f59c33719e12a35a0bee7ca";

export default class UserService {
  static async authenticate() {
    const { data } = await axios.post(`${URL}/auth`);
    console.log(`User authentication done: ${data.isAuth}`);
    return data;
  }

  static async checkEmail({ email }) {
    const { data } = await axios({
      method: "POST",
      url: `${URL}/emails`,
      data: {
        email,
      },
    });
    return { data, email };
  }
  static async login({ email, password }) {
    const { data } = await axios({
      method: "POST",
      url: `${URL}/login`,
      data: {
        email,
        password,
      },
    });
    return data;
  }

  static async register(user) {
    const { data } = await axios({
      method: "POST",
      url: `${URL}/`,
      data: user,
    });
    return data;
  }

  // patch --------------------------------------------------------------

  static async patchUser({ username, phone_number }) {
    const { data } = await axios({
      method: "PATCH",
      url: `${URL}/${USER_1_ID}`,
      data: {
        username,
        phone_number,
      },
    });
    return data;
  }

  // --------------------------------------------------------------------

  static async logout() {
    const { data } = await axios({
      method: "POST",
      url: `${URL}/logout`,
    });
    return data;
  }

  static async deactivate(user) {
    const result = await axios({
      method: "DELETE",
      url: `${URL}/`,
    });
    return result.status;
  }

  static async toggleEnlistedEvent({ eventId, userId, type }) {
    const { data } = await axios({
      method: "PATCH",
      url: `${URL}/${userId}/enlisted?type=${type}`,
      data: {
        event_id: eventId,
      },
    });
    return data;
  }

  static async toggleLikedEvent({ eventId, userId, type }) {
    const { data } = await axios({
      method: "PATCH",
      url: `${URL}/${userId}/liked?type=${type}`,
      data: {
        event_id: eventId,
      },
    });
    return data;
  }
  static async toggleHostingEvent({ eventId, userId, type }) {
    const { data } = await axios({
      method: "PATCH",
      url: `${URL}/${userId}/hosting?type=${type}`,
      data: {
        event_id: eventId,
      },
    });
    return data;
  }
}
