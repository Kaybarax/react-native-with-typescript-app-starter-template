const bcrypt = require('bcrypt');
const saltRounds = 10;

/**
 * sd _ Kaybarax
 * @param password
 * @returns {Promise<null>}
 */
export async function createHash(password) {
  let hash = null;
  let salt = await generateSalt();
  await bcrypt.hash(myPlaintextPassword, salt, function (err, genHash) {
    hash = genHash;
  });
  return hash;
}

/**
 * sd _ Kaybarax
 * @param password
 * @param salt
 * @returns {Promise<null>}
 */
export async function createHashWithSalt(password, salt) {
  let hash = null;
  await bcrypt.hash(password, salt, function (err, genHash) {
    hash = genHash;
  });
  return hash;
}

/**
 * sd _ Kaybarax
 * @returns {Promise<null>}
 */
export async function generateSalt() {
  let salt = null;
  await bcrypt.genSalt(saltRounds, function (err, genSalt) {
    salt = genSalt;
  });
  return salt;
}

/**
 * sd _ Kaybarax
 * @param password
 * @param passwordHash
 * @param salt
 * @returns {Promise<*>}
 */
export async function validatePassword(password, passwordHash, salt) {
  console.log('Checking the password.......' + password);
  console.log('Against.......' + passwordHash);
  console.log('Using.......' + salt);
  let result = await bcrypt.compare(password, passwordHash);
  console.log('result.......' + result);
  return result;
}
