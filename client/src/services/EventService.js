import axios from 'axios';

const EVENT_URI = `/api/v1/events`;

export default class EventService {
  static async getEvents() {
    const { data } = await axios.get(EVENT_URI);
    return data;
  }

  static async getEventDetail(eventId) {
    const { data } = await axios.get(`${EVENT_URI}/${eventId}`);
    return data;
  }

  static async toggleEnlistedUser({ eventId, userId, type }) {
    const { data } = await axios({
      method: 'PATCH',
      url: `${EVENT_URI}/${eventId}/enlisted?type=${type}`,
      data: {
        user_id: userId,
      },
    });
    return data;
  }

  static async toggleLikedUser({ eventId, userId, type }) {
    const { data } = await axios({
      method: 'PATCH',
      url: `${EVENT_URI}/${eventId}/liked?type=${type}`,
      data: {
        user_id: userId,
      },
    });
    return data;
  }

  static async haveUserAttended({ eventId, userId, type }) {
    const { data } = await axios({
      method: 'PATCH',
      url: `${EVENT_URI}/${eventId}/attended?type=${type}`,
      data: {
        user_id: userId,
      },
    });
    return data;
  }

  static async searchEvents({ keyword }) {
    const { data } = await axios.get(`${EVENT_URI}/search?q=${keyword}`);
    return data;
  }
  static async searchListedUsers({ event_id, keyword }) {
    const { data } = await axios.get(
      `${EVENT_URI}/${event_id}/attendee/search?q=${keyword}`,
    );
    return data;
  }

  static async deleteEvent(eventId) {
    await axios.delete(`${EVENT_URI}/${eventId}`);
    const { data } = await axios.get(`${EVENT_URI}`);
    return data;
  }
  static async postEvent(payload) {
    const { data } = await axios({
      method: 'POST',
      url: `${EVENT_URI}/`,
      data: payload,
    });
    return data;
  }
  static async resiveEvent(eventId, payload) {
    axios.patch(`${EVENT_URI}/${eventId}`, payload);
  }
}
