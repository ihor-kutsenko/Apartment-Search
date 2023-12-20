export const isRequired = val => ({
  hasPassed: !!val,
  message: ' This field required',
});

export const charLimit = limit => val => ({
  hasPassed: val.length <= limit,
  message: 'Too long message',
});
