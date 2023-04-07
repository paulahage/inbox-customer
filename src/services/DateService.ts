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
  } else if (minutes >= timeDatesMinutes.hour) {
    result = Math.floor(minutes / 60);
    return `${result}h`;
  } else {
    result = minutes;
    return `${result}m`;
  }
}

export function getCompleteDateAndTime(statusTimeDate: string) {

  const newDate = new Date(statusTimeDate);
  const hour = newDate.getHours();
  const min = newDate.getMinutes();
  const year = newDate.getFullYear();
  const date = newDate.getDate();
  let month = newDate.getMonth() + 1;

  return `${date}-${month <= 9 ? "0" + month : month}-${year} ${hour}:${min <=9 ? "0" + min : min}`
}


