import * as Yup from 'yup';

export default Yup.object().shape({
  email: Yup.string()
    .email('이메일형식이 아닙니다')
    .required('필수 입력 사항입니다'),
  password: Yup.string().required('비밀번호를 입력해주세요'),
});
