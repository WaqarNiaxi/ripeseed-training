 function formatDate(dateStr) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const d = new Date(dateStr);
  const day = d.getUTCDate();
  const month = months[d.getMonth()];

  return `${month} ${day}`;
}

module.exports=formatDate;