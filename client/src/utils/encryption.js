import CryptoJS from "crypto-js";

// Use a strong secret key – keep it private and ideally don't hardcode in prod
const SECRET_KEY = "your-very-secure-key-1234"; // You can load this from env in production

// Encrypt a string
export const encryptData = (data) => {
  try {
    const ciphertext = CryptoJS.AES.encrypt(
      JSON.stringify(data),
      SECRET_KEY
    ).toString();
    return ciphertext;
  } catch (error) {
    console.error("Encryption failed:", error);
    return null;
  }
};

// Decrypt a string
export const decryptData = (ciphertext) => {
  try {
    const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);
    return JSON.parse(decrypted);
  } catch (error) {
    console.error("Decryption failed:", error);
    return null;
  }
};
