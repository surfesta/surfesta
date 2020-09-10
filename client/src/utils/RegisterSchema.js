import * as Yup from 'yup';

export default Yup.object().shape({
  email: Yup.string()
    .email('이메일형식이 아닙니다')
    .required('필수 입력 사항입니다'),
  username: Yup.string()
    .min(2, '2자 이상 성함을 작성하세요')
    .max(20, '20자 이내 성함을 작성하세요')
    .required('성함은 필수입력입니다.'),
  phone_number: Yup.number().typeError('숫자로 입력해주세요'),
  password: Yup.string()
    .required('비밀번호를 입력해주세요')
    .min(3, '패스워드는 3자리 이상입니다.')
    .matches(/(?=.*[0-9])/, '패스워드는 숫자를 포함해야합니다'),
});
