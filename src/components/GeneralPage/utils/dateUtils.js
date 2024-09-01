const monthNames = {
  января: "01",
  февраля: "02",
  марта: "03",
  апреля: "04",
  мая: "05",
  июня: "06",
  июля: "07",
  августа: "08",
  сентября: "09",
  октября: "10",
  ноября: "11",
  декабря: "12",
};

export const formatBirthdate = (dateStr) => {
  const [day, monthName, year] = dateStr.split(" ");
  const month = monthNames[monthName.toLowerCase()];
  return `${day}.${month}.${year}`;
};
