export function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

export function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
      width: 28,
      height: 28,
      fontSize: "14px",
      fontFamily: "Poppins"
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

export function calculateTransactionFee(amount) {
  let convertedAmount = Number(amount);
  let transactionFee = 0;
  let withdrawalAmount = 0;

  if (convertedAmount <= 5000) {
    transactionFee = 10;
  } else if (convertedAmount > 5000 && convertedAmount <= 50000) {
    transactionFee = 25;
  } else {
    transactionFee = 50;
  }

  withdrawalAmount = convertedAmount + transactionFee;

  return {
    transactionFee,
    withdrawalAmount
  };
}

export function shortenString(str, maxLength) {
  if (str.length <= maxLength) {
    return str;
  } else {
    return str.slice(0, maxLength) + "...";
  }
}

export function hoursLeft(createdAt) {
  // Get the created at date
  const createdAtDate = new Date(createdAt);

  // Get the current date
  const currentDate = new Date();

  // Calculate the time difference in milliseconds
  const timeDifference = currentDate - createdAtDate;

  // Convert milliseconds to hours
  const hoursDifference = timeDifference / (1000 * 60 * 60);

  // Calculate the remaining hours
  const hoursLefts = 24 - hoursDifference;

  // Check if the difference is less than 24 hours
  const isWithin24Hours = hoursDifference < 24;

  return { isWithin24Hours, hoursLefts };
}
