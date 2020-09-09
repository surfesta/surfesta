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
}
