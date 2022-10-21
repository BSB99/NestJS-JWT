const crypto = require('crypto');

function base64(json) {
  const stringified = JSON.stringify(json);
  // JSON을 문자열화
  const base64Encoded = Buffer.from(stringified).toString('base64');
  // 문자열화 된 JSON 을 Base64 로 인코딩
  const paddingRemoved = base64Encoded.replaceAll('=', '');
  // Base 64 의 Padding(= or ==) 을 제거

  return paddingRemoved;
}

const header = {
  alg: 'HS256',
  typ: 'JWT',
};

const encodedHeader = base64(header);
console.log(encodedHeader);

const payload = {
  email: 'test@naver.com',
  name: 'test',
  iat: 1666342827,
};

const encodedPayload = base64(payload);

const signature = crypto
  .createHmac('sha256', 'SECRET_KEY')
  .update(`${encodedHeader}.${encodedPayload}`)
  .digest('base64')
  .replaceAll('=', '');

const jwt = `${encodedHeader}.${encodedPayload}.${signature}`;

console.log(jwt);
