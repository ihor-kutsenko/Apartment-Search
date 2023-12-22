export const isRequired = val => ({
  hasPassed: !!val,
  message: ' This field required',
});

export const charLimit = limit => val => ({
  hasPassed: val.length <= limit,
  message: 'Too long message',
});

export const emailValidation = val => ({
  hasPassed: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(val),
  message: 'Wrong email address',
});

export const passwordValidation = val => ({
  hasPassed: /^(?=.*[A-Za-z])(?=.*[\d]).{7,256}$/.test(val),
  message: 'The password must contain one number and one symbol',
});
