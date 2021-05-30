const https = require('https');

const baseURL = 'https://jsonmock.hackerrank.com/api/stocks';

const makeRequest = async (url) => new Promise((res, rej) => {
  https.get(url, (response) => {
    let data = '';
    response.on('data', (d) => {
      data += d;
    });
    response.on('end', () => {
      res(data);
    });
    response.on('error', (e) => {
      rej(e);
    });
  });
});

const getDatesBetweenDates = (startDate, endDate) => {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  let dates = [];
  while (startDate < endDate) {
    const nextDate = new Date(startDate);
    dates = [...dates, `${nextDate.getDate()}-${monthNames[nextDate.getMonth()]}-${nextDate.getFullYear()}`];
    startDate.setDate(startDate.getDate() + 1);
  }
  return dates;
};
const printData = async (firstDate) => {
  const data = await makeRequest(`${baseURL}?date=${firstDate}`).then((d) => JSON.parse(d));
  if (data.total > data.per_page) {
    for (let i = 2; i <= Math.ceil((data.total - data.per_page) / data.per_page); i++) {
      const data2 = await makeRequest(`${baseURL}?date=${firstDate}&page=${i}`);
      data.data = [...data.data, ...data2.data];
    }
  }
  data.data.forEach((dailyData) => {
    console.log(`${firstDate} ${dailyData.open} ${dailyData.close}`);
  });
};

const openAndClose = async (firstDate, lastDate) => {
  if (firstDate === lastDate) {
    printData(firstDate);
  } else {
    const dates = getDatesBetweenDates(new Date(firstDate), new Date(lastDate));
    dates.forEach((date) => printData(date));
  }
};

export default openAndClose;

openAndClose('1-January-2000', '11-January-2014');
