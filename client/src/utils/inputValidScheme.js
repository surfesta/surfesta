import * as Yup from 'yup';

export default Yup.object().shape({
  email: Yup.string().email('이메일을 입력해주세요').required(''),
});
