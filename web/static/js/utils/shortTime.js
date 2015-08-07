// Takes a timestamp and returns a short date of form `8:28`
export default function shortTime(timestamp) {
  const date = new Date(timestamp);
  return `${date.getHours()}h${date.getMinutes()}`;
}
