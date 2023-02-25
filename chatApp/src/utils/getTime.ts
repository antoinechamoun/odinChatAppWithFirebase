export function getTime(time: string): string {
  let todayDate = new Date();
  if (todayDate.toDateString() === new Date(time).toDateString()) {
    return new Date(time).toLocaleTimeString().replace(/(.*)\D\d+/, "$1");
  }
  return new Date(time).toDateString().substring(4);
}
