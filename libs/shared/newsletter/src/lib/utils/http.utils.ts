import { faker } from '@faker-js/faker';
import axios from 'axios';

export async function sendRequest(
  url: string,
  payload: Record<string, unknown>,
  headers?: Record<string, string>,
  validStatus = 200,
  useFormUrlEncoded = false
) {
  try {
    const config = {
      headers: headers || {
        'Content-Type': useFormUrlEncoded
          ? 'application/x-www-form-urlencoded;charset=UTF-8'
          : 'application/json',
        Accept: '*/*',
        'User-Agent': faker.internet.userAgent(),
      },
    };

    const data = useFormUrlEncoded
      ? new URLSearchParams(payload as Record<string, string>).toString()
      : payload;

    const response = await axios.post(url, data, config);
    console.log('response2:', response.data);
    console.log('response:', response.status);
    return response.status === validStatus;
  } catch (error) {
    console.error(`[HTTP UTILS / REQUEST] error:`, error);
    return false;
  }
}
