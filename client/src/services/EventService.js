import axios from 'axios';

const EVENT_URL = 'http://localhost:5000/api/v1/events';
const USER_URL = 'http://localhost:5000/api/v1/users';

export default class EventService {
  static async getEvents() {
    const { data } = await axios.get(EVENT_URL);
    return data;
  }
}
