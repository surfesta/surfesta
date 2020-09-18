import axios from 'axios';
const BASE_URL =
  navigator.userAgent === 'ReactSnap'
    ? 'http://ec2-15-164-210-226.ap-northeast-2.compute.amazonaws.com:5000'
    : '';
const UPLOAD_URI = `${BASE_URL}/api/v1/uploads`;

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
