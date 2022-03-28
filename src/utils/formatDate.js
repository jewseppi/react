import DateFnsAdapter from "@date-io/date-fns";

export default function formatDate(date) {
  const dateFns = new DateFnsAdapter();
  return dateFns.format(dateFns.date(date), "fullDate");
}
