export const validateFileInput = (_file_data) => {
  if (_file_data === null || _file_data === undefined) {
    alert(`다시 시도해주세요`);
    return false;
  }

  const { type, size, name } = _file_data;
  // 7 메가바이트
  if (size > 7000000) {
    alert(
      `7MB 이하 용량의 이미지를 업로드해주세요. ${size * 0.000001 - 7}MB 초과`,
    );
    return false;
  }
  if (
    type !== 'image/jpg' &&
    type !== 'image/jpeg' &&
    type !== 'image/png' &&
    type !== 'image/webp'
  ) {
    alert(`${type}는 지원하지 않는 형식의 타입입니다.`);
    return false;
  }

  return true;
};
