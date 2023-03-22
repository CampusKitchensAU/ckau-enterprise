export default function convertTo12Hour(time: number) {
  const hour = time / 60;
  const min = time % 60;
  const hour12 = Math.floor(hour % 12);
  const AMPM = hour >= 12 ? "PM" : "AM";
  if (min === 0) return `${hour12 == 0 ? 12 : hour12}:${min}0 ${AMPM}`;
  if (min < 10) return `${hour12 == 0 ? 12 : hour12}:0${min} ${AMPM}`;
  return `${hour12 == 0 ? 12 : hour12}:${min} ${AMPM}`;
}
