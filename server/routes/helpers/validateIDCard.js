
/*
* JavaScript implementation of the Luhn algorithm, with calculation and validation functions
*/

/* luhn_checksum
 * Implement the Luhn algorithm to calculate the Luhn check digit.
 * Return the check digit.
 */
function luhnChecksum(code) {
  const len = code.length;
  const parity = len % 2;
  let sum = 0;
  // eslint-disable-next-line no-plusplus
  for (let i = len - 1; i >= 0; i--) {
    let d = parseInt(code.charAt(i), 10);
    if (i % 2 === parity) {
      d *= 2;
    }
    if (d > 9) {
      d -= 9;
    }
    sum += d;
  }
  return sum % 10;
}

/* luhn_validate
* Return true if specified code (with check digit) is valid.
*/
function luhnValidate(fullcode) {
  return luhnChecksum(fullcode) === 0;
}
module.exports = luhnValidate;
