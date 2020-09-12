import axios from 'axios';

const EVENT_URL = '/api/v1/events';
const USER_URL = '/api/v1/users';

export default class EventService {
  static async getEvents() {
    const { data } = await axios.get(EVENT_URL);
    return data;
  }
  static async getEventDetail(eventId) {
    const { data } = await axios.get(`EVENT_URL/${eventId}`);
    return data;
  }
  static async addEnlistedUser({ eventId, userId, type }) {
    const { data } = await axios({
      method: 'PATCH',
      url: `${EVENT_URL}/${eventId}/enlisted?type=${type}`,
      data: {
        user_id: userId,
      },
    });
    return data;
  }
}
