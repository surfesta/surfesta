import * as Yup from 'yup';

export default Yup.object().shape({
  password: Yup.string().required('비밀번호를 입력해주세요'),
});
