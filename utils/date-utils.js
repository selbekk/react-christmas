module.exports = {
  utcDate: (date = new Date()) =>
    new Date(date.getTime() + date.getTimezoneOffset() * 60000)
};
