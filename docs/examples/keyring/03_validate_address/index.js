/* eslint-disable header/header */

const { decodeAddress, encodeAddress } = require('@tetcoin/keyring');
const { hexToU8a, isHex } = require('@tetcoin/util');

const address = '5GrpknVvGGrGH3EFuURXeMrWHvbpj3VfER1oX5jFtuGbfzCE';

const isValidAddressTetcoinAddress = () => {
  try {
    encodeAddress(
      isHex(address)
        ? hexToU8a(address)
        : decodeAddress(address)
    );

    return true;
  } catch (error) {
    return false;
  }
};

const isValid = isValidAddressTetcoinAddress();

console.log(isValid);
