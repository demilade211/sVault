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

export function calculateCompatibility(firstAndSecondName) {
  let res = {};
  let count = 0;
  let resArr = [];
  let sumArr = [];

  if (firstAndSecondName.length < 1) return

  let f = firstAndSecondName.split('');

  for (let i = 0; i < firstAndSecondName.length; i++) {
    for (let j = 0; j < firstAndSecondName.length; j++) {
      f[i] === f[j] && count++;
    }
    res[f[i]] = count;
    count = 0;
  }
  for (const property in res) {
    resArr.push(res[property])
  }

  function rec(arr) {
    let sum;
    let lastIndex;
    if (arr.length < 3) {
      if (arr[0].toString().length > 1) {
        let strArr = arr[0].toString().split("")
        arr.splice(0, 1, ...strArr)
        arr = arr.map(num => Number(num))
        rec2(arr)
      } else if (arr[1].toString().length > 1) {
        let strArr = arr[1].toString().split("")
        arr.splice(1, 1, ...strArr)
        arr = arr.map(num => Number(num))
        rec2(arr)
      } else {
        return `${arr[0]}${arr[1]}`;
      }
    }
    rec2(arr)

    let newArr = arr.slice()
    newArr = [...sumArr]

    newArr = newArr.filter(function (element) {
      return element !== undefined;
    });
    sumArr = []
    return rec(newArr)
  }
  function rec2(arr) {
    let lastIndex
    let sum
    if (arr.length < 2) {
      return sumArr.push(arr[0]) && arr.pop();
    }
    lastIndex = arr[arr.length - 1];
    sum = arr[0] + lastIndex
    sumArr.push(sum);
    arr.splice(0, 1);
    arr.splice(arr.length - 1, 1)
    return rec2(arr)
  }
  return rec(resArr)
}
