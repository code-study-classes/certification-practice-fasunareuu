export const calculateDistance = (x1, x2) => {
    if ( x2 > x1) {
        return x2 - x1;
    } else {
        return x1 - x2;
    };
};

export const calculateSegmentProduct = (a, b, c) => {
    let res = 0;
    let res2 = 0;
    
    if (c > a) {
        res = c - a;
    }
    if (a > c) {
        res = a - c;
    }
    if (b > c) {
        res2 = b - c;
    }
    if (c > b) {
        res2 = c - b;
    }
    return Number(res) * Number(res2);
};
calculateSegmentProduct(-1, 12, 7);

export const calculateKilobytes = (fileSizeInBytes) => {
    const kiloBytes = 1024;
    const result = (Math.trunc(fileSizeInBytes / kiloBytes));

    return result;
};
calculateKilobytes(5000);

export const calculateSegments = (lengthA, lengthB) => {
    const result = Math.trunc(lengthA / lengthB);

    if (lengthA % lengthB === 0) {
        return lengthA / lengthB;
    } else {
        return result;
    }
};
calculateSegments();

export const calculateDigitSum = (twoDigitNumber) => {
    const changedCalculateSegments = String(twoDigitNumber)
    return Number(changedCalculateSegments[0]) + Number(changedCalculateSegments[1]);
};
calculateDigitSum(47);

export const swapHundredsAndTens = (twoDigitNumber) => {
    const firstPart = String(twoDigitNumber)
    const changedPart = firstPart[1] + firstPart[0] + firstPart[2];

    return Number(changedPart);
};
swapHundredsAndTens();

export const getHundredsDigit = (number) => {
    if (number > 999) {
        return Math.floor((number / 100) % 10)
    } else {
        return 0;
    }
};
getHundredsDigit();

export const getFullHours = (seconds) => {
    if ( seconds === 0){
        return 0;
    } else if ( seconds < 0 || seconds !== Math.floor(seconds)){
        return toThrow();
    }
    return Math.floor(seconds / 60 / 60);
 };


export const getDayOfWeek = (dayOfYear) => {
    switch (dayOfYear % 7) {
      case 0:
        return 7;
        break;
      case 1:
        return 1;
        break;
      case 2:
        return 2;
        break;
      case 3:
        return 3;
        break;
      case 4:
        return 4;
        break;
      case 5:
        return 5;
        break;
      case 6:
        return 6;
        break;
      default:
    }
  };

export const countSquares = (A, B, C) => {
    return Math.floor((A * B) / (C * C));
};
countSquares(10, 15, 2);