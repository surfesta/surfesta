import * as Yup from 'yup';

export default Yup.object().shape({
  email: Yup.string().email('이메일형식이 아닙니다').required('필수'),
});
