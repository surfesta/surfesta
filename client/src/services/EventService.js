import axios from 'axios';

const EVENT_URL = 'http://localhost:5000/api/v1/events';
const USER_URL = 'http://localhost:5000/api/v1/users';

export default class EventService {
  static async getEvents() {
    const { data } = await axios.get(EVENT_URL);
    return data;
  }

  static async toggleFavInEvent({ eventId, liked_users }) {
    const { data } = await axios({
      method: 'PATCH',
      url: `${EVENT_URL}/${eventId}`,
      data: {
        liked_users,
      },
    });
    return data;
  }

  static async toggleFavInUser({ userId, liked_events }) {
    const { data } = await axios({
      method: 'PATCH',
      url: `${USER_URL}/${userId}`,
      data: {
        liked_events,
      },
    });
    return data;
  }
}
