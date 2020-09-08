import * as Yup from 'yup';

export default Yup.object().shape({
  email: Yup.string()
    .email('이메일형식이 아닙니다')
    .required('필수 입력 사항입니다'),
  username: Yup.string()
    .min(2)
    .max(20)
    .required(`최소 2자 이상 필수 입력 사항입니다`),
  phone_number: Yup.number()
    .integer()
    .positive()
    .typeError('숫자로 입력해주세요'),
  password: Yup.string().min(3).required('필수 입력 사항입니다'),
});
