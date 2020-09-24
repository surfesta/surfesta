import axios from 'axios';

const UPLOAD_URI = `/api/v1/uploads`;

export default class UploadService {
  static async uploadImage(formData) {
    const { data } = await axios({
      method: 'POST',
      url: `${UPLOAD_URI}/`,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: formData,
    });

    return data;
  }
}
