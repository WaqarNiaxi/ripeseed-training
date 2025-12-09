"use strict";
const fs = require("fs");
const path = require("path");

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  const day = d.getUTCDate();
  const month = d.toLocaleString("en-US", { month: "long" });

  return `${month} ${day}`;
}

const getMonthName = (monthNumber: string): string => {
  const date = new Date(
    Number(monthNumber.split("/")[0]),
    Number(monthNumber.split("/")[1]) - 1
  );
  return date.toLocaleString("en-US", { month: "short" });
};

const getFileDataByMonth = (
  dataDir: string,
  yearMonth: string,
  parser: Function
): [] => {
  const year = yearMonth.split("/")[0];
  const monthName = getMonthName(yearMonth);
  const searchKey = `${year}_${monthName}`;

  const files :string[]= fs.readdirSync(dataDir);

  const fileName = files.find((file: string) => file.includes(searchKey));

  if (!fileName) {
    return [];
  }

  return parser(path.join(dataDir, fileName));
};

const yearlyData = (dataDir: string, year: string, parser: Function) => {
  const files = fs.readdirSync(dataDir);

  // Filter files
  const yearFiles = files.filter((file: string) => file.includes(year));

  let wholeData = [];
  for (let i = 0; i < yearFiles.length; i++) {
    wholeData.push(parser(dataDir + "/" + yearFiles[i]));
  }

  return wholeData.flat(Infinity);
};

module.exports = {
  formatDate,
  getMonthName,
  getFileDataByMonth,
  yearlyData,
};
