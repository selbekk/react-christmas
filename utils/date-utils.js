module.exports = {
  utcDate: date => {
    if (!date) {
      const now = new Date();
      date = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    }
    return new Date(date.getTime() + date.getTimezoneOffset() * 60000);
  }
};
