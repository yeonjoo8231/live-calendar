const dotenv = require('dotenv');
const ical = require('ical');
const fetch = require('node-fetch');

dotenv.config();

const fetchLiveCalendarData = async () => {
  try {
    const icalUrl = process.env.ICAL_URL;
    const response = await fetch(icalUrl);
    const icalData = await response.text();

    const parsedData = ical.parseICS(icalData);

    if (!parsedData) return {};

    return parsedData;
  } catch (error) {
    console.error('Error fetching or parsing iCal data:', error);
  }
};

module.exports = { fetchLiveCalendarData };
