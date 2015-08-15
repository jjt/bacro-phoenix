// Takes a timestamp and returns a short date of form `8:28a`
export default function shortTime(timestamp) {
  const date = new Date(timestamp);
  const hours24h = date.getHours();
  const meridiem = hours24h < 12 ? 'a' : 'p';
  const hours = (hours24h === 0 || hours24h === 12) ? 12 : hours24h % 12;
  const minutes = `0${date.getMinutes()}`.slice(-2);

  return `${hours}:${minutes}${meridiem}`;
}
