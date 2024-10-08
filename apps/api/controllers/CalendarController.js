const { fetchLiveCalendarData } = require('../services/calendarService');

const calendarData = async (req, res, next) => {
  const data = await fetchLiveCalendarData();
  console.log('DATA', data);
  res.status(200).json(data);
};

module.exports = {
  calendarData,
};
