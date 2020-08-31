import * as Yup from 'yup';

export default Yup.object().shape({
  email: Yup.string().ensure().email('이메일형식이 아닙니다').required('필수'),
  password: Yup.string().ensure().required('비밀번호를 입력해주세요'),
});
