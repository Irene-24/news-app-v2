const monthNames = [
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

const formatDateOrdinal = (date: Date) => {
  const n = new Date(date).getDate();
  const month = new Date(date).getMonth();
  const year = new Date(date).getFullYear();

  const s = ["th", "st", "nd", "rd"];

  const v = n % 100;

  const ordinalDate = n + (s[(v - 20) % 10] || s[v] || s[0]);

  return `${ordinalDate} ${monthNames[month].slice(0, 3)}, ${year}`;
};

const formatRelativeDate = (date: Date) => {
  const diffMs = new Date().getTime() - date.getTime();
  const diffSec = Math.round(diffMs / 1000);
  const diffMin = diffSec / 60;
  const diffHour = diffMin / 60;

  if (diffSec < 1) {
    return "right now";
  } else if (diffMin < 1) {
    return `${diffSec} sec. ago`;
  } else if (diffHour < 1) {
    return `${diffMin} min. ago`;
  } else {
    return formatDateOrdinal(date);
  }
};

export { formatRelativeDate, formatDateOrdinal };
