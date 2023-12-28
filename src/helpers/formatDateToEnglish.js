const formatDateToEnglish = (postgresDate) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Split the PostgreSQL date into an array [YYYY, MM, DD]
  const dateParts = postgresDate.split("-");

  // Get the three-letter month abbreviation
  const monthAbbreviation = months[parseInt(dateParts[1], 10) - 1];

  // Rearrange the date parts into English format (Mon DD, YYYY)
  const englishDate = `${monthAbbreviation} ${dateParts[2]}, ${dateParts[0]}`;

  return englishDate;
};

export default formatDateToEnglish;
