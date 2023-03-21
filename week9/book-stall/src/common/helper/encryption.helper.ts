import * as CryptoJS from 'crypto-js';
import { constants } from 'src/common/helper/constants';

export function encrypt(password: string): string {
  return CryptoJS.AES.encrypt(password, constants.secret).toString();
}

export function decrypt(password): string {
  return CryptoJS.AES.decrypt(password, constants.secret).toString(
    CryptoJS.enc.Utf8,
  );
}
