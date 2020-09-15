import * as Yup from 'yup';

export default Yup.object().shape({
  email: Yup.string()
    .matches(/^((?!gmail(?=(.com))).)*$/, {
      message: '구글로 로그인해주세요',
      excludeEmptyString: true,
    })
    .matches(
      /^.*((.com)|(.net)|(.site)|(.kr)|(.edu)|(.org)|(.co)|(.xyz))$/,
      '이메일주소를 입력해주세요'
    )
    .email('이메일형식이 아닙니다')
    .required('필수 입력 사항입니다'),
});
