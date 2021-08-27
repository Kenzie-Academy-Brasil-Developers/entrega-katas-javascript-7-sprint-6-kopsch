let arrTest = [1, 2, 3, "quatro", "5"];

const newForEach = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    const currentValue = array[i];
    callback(currentValue, i, array);
  }
};

const newFill = (array, newVal, firstInd, lastInd) => {
  if (!lastInd) {
    for (let i = firstInd; i < array.length; i++) {
      array[i] = newVal;
    }
  } else {
    for (let i = firstInd; i <= lastInd; i++) {
      array[i] = newVal;
    }
  }
  return array;
};

const newMap = (array, callback) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let currentValue = array[i];
    if (currentValue !== undefined) {
      newArray[i] = callback(currentValue, i, array);
    }
  }
  return newArray;
};

const newSome = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    let currentValue = array[i];
    if (callback(currentValue, i, array)) {
      return true;
    }
  }
  return false;
};

const newFind = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    let currentValue = array[i];
    if (callback(currentValue, i, array)) {
      return currentValue;
    }
  }
};

const newFindIndex = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    let currentValue = array[i];
    if (callback(currentValue, i, array)) {
      return i;
    }
  }
  return -1;
};

const newEvery = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    let currentValue = array[i];
    if (!callback(currentValue, i, array)) {
      return false;
    }
  }
  return true;
};

const newFilter = (array, callback) => {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    let currentValue = array[i];
    if (callback(currentValue, i, array)) {
      newArr.push(currentValue);
    }
  }
  return newArr;
};

const newConcat = (...value) => {
  let newArray = [];

  for (let i = 0; i < value.length; i++) {
    let currentValue = value[i];

    if (Array.isArray(currentValue)) {
      for (let j = 0; j < currentValue.length; j++) {
        newArray.push(currentValue[j]);
      }
    } else {
      newArray.push(currentValue);
    }
  }

  return newArray;
};

const newIncludes = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    let currentValue = array[i];
    if (callback(currentValue, i, array)) {
      return true;
    }
  }
  return false;
};

const newIndexOf = (array, value, firstInd) => {
  let i = +firstInd || 0;

  if (i < 0) {
    i += array.length;
  }
  for (i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
};

const newJoin = (array, separator) => {
  let arrToString = "";
  if (separator === undefined) {
    separator = ",";
  }
  for (let i = 0; i < array.length; i++) {
    let currentValue = array[i];
    if (i > 0) {
      arrToString += separator;
    }
    if (currentValue === undefined) {
      currentValue = "";
    }
    arrToString += currentValue;
  }

  return arrToString;
};

const newReduce = (array, callback, accValue) => {
  let acc = accValue;
  let i = 0;
  if (accValue === undefined) {
    acc = array[0];
    i = 1;
  }
  for (i; i < array.length; i++) {
    let currentValue = array[i];
    acc = callback(acc, currentValue, i, array);
  }

  return acc;
};
