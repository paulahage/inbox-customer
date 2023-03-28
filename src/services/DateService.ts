const timeDatesMinutes = {
  year: 525960,
  month: 43830,
  week: 10080.000276,
  day: 1440,
  hour: 60,
  minute: 1,
};

export function parseDateToDisplayDate(ticketDate: string) {
  const datePostMillisec = Date.parse(ticketDate);
  const dateNow = new Date().toISOString();
  const dateNowMillisec = Date.parse(dateNow);
  const dateFromNowMillisec = dateNowMillisec - datePostMillisec;
  const minutes = Math.floor(dateFromNowMillisec / 60000);

  let result;

  if (minutes >= timeDatesMinutes.year) {
    result = Math.floor(minutes / 525960);
    return result + "y";
  } else if (minutes >= timeDatesMinutes.month) {
    result = Math.floor(minutes / 43830);
    return `${result}m`;
  } else if (minutes >= timeDatesMinutes.week) {
    result = Math.floor(minutes / 10080.000276);
    return `${result}w`;
  } else if (minutes >= timeDatesMinutes.day) {
    result = Math.floor(minutes / 1440);
    return `${result}d`;
  } else {
    return "";
  }
}

export function getCompleteDateAndTime(statusTimeDate: string) {
  const newDate = new Date(statusTimeDate);
  const hour = newDate.getHours();
  const min = newDate.getMinutes();
  const date = newDate.getDate();

  return `${date} ${hour}:${min}`
}


