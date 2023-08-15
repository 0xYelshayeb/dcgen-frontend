// generateChartData.js
const fs = require('fs');
const path = require('path');

function generateDataPoints(numberOfDataPoints, spanInDays, startDate = new Date()) {
    let data = [];
    let currentYear = startDate.getUTCFullYear();
    let currentMonth = startDate.getUTCMonth();
    let currentDay = startDate.getUTCDate();
    for (let i = 0; i < numberOfDataPoints; i++) {
        // Calculate date
        let year = currentYear;
        let month = currentMonth - Math.floor(i * spanInDays / 30);
        let day = currentDay - i * spanInDays % 30;
        if(day < 1) {
            month--;
            day += 30;
        }
        if(month < 0) {
            year--;
            month += 12;
        }

        // Generate random value
        let value = (Math.random() * 1000 + 500).toFixed(2);

        // Push data
        data.push([Date.UTC(year, month, day), Number(value)]);
    }
    // Reverse the data to have the oldest first
    data.reverse();
    return data;
}
  

function writeToFile(fileName, data) {
  const filePath = path.join(__dirname, fileName);
  const fileData = `export default ${JSON.stringify(data, null, 2)};`;
  fs.writeFileSync(filePath, fileData, 'utf8');
}

// Generate data
const oneMonthData = generateDataPoints(180, 1); // span is 1 day
const sixMonthsData = generateDataPoints(180, 7); // span is 1 week
const oneYearData = generateDataPoints(180, 14); // span is 2 weeks

// Write data to files
writeToFile('1m-chartData.js', oneMonthData);
writeToFile('6m-chartData.js', sixMonthsData);
writeToFile('1y-chartData.js', oneYearData);
// writeToFile('max-chartData.js', maxData);
