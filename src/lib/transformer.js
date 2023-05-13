import { encode, decode } from 'js-base64';

/**
 * @param {object} obj
 * @returns {string}
 * @description
 * Encode an object to base64 string
 */
export const encodeData = (obj) => {
	return encode(JSON.stringify(obj));
};

/**
 * @param {string} base64
 * @returns {object}
 * @description
 * Decode a base64 string to an object
 */
export const decodeData = (base64) => JSON.parse(decode(base64));
