import axios from 'axios';

const EVENT_URL = '/api/v1/events';

export default class EventService {
  static async getEvents() {
    const { data } = await axios.get(EVENT_URL);
    return data;
  }

  static async getEventDetail(eventId) {
    const { data } = await axios.get(`EVENT_URL/${eventId}`);
    return data;
  }

  static async toggleEnlistedUser({ eventId, userId, type }) {
    const { data } = await axios({
      method: 'PATCH',
      url: `${EVENT_URL}/${eventId}/enlisted?type=${type}`,
      data: {
        user_id: userId,
      },
    });
    return data;
  }

  static async toggleLikedUser({ eventId, userId, type }) {
    const { data } = await axios({
      method: 'PATCH',
      url: `${EVENT_URL}/${eventId}/liked?type=${type}`,
      data: {
        user_id: userId,
      },
    });
    return data;
  }

  static async searchEvents({ keyword }) {
    const { data } = await axios.get(`${EVENT_URL}/search?q=${keyword}`);
    return data;
  }
  static async deleteEvent(eventId) {
    await axios.delete(`${EVENT_URL}/${eventId}`);
    const { data } = await axios.get(`${EVENT_URL}`);
    return data;
  }
}
