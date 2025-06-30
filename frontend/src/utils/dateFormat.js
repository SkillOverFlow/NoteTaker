const months = {
  0: "Ene",
  1: "Feb",
  2: "Mar",
  3: "Abr",
  4: "May",
  5: "Jun",
  6: "Jul",
  7: "Ago",
  8: "Sep",
  9: "Oct",
  10: "Nov",
  11: "Dic",
};

export const dateFormat = (noteDate) => {
  let date;

  if (noteDate.hasOwnProperty("seconds")) {
    date = new Date(noteDate.seconds * 1000 + noteDate.nanoseconds / 1000000);
  } else {
    date = new Date(noteDate);
  }

  const day =
    date.getDate() < 10 ? "0" + date.getDate().toString() : date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};
