//ex 840 - 1050, 2pm - 5:30pm
//ex 168 - 210, 14 - 17.5

const AvailabilityCalendarEvent = ({
  type,
  day,
  start,
  end,
  name,
  location,
}: {
  type: "SHIFT" | "AVAILABILITY";
  day: number; // 1-7, 0 is Monday
  start: number; // number of minutes from 12am
  end: number;
  name?: string;
  location?: string;
}) => {
  const startRow = (start / 60) * 12 + 2;
  const length = (end / 60) * 12 + 2 - startRow;

  switch (type) {
    case "SHIFT":
      return (
        <li
          className={`z-[5] relative mt-px flex col-start-${day}`}
          style={{ gridRow: startRow + " / span " + length }}
        >
          <div className="group absolute inset-1 m-1 flex flex-col overflow-y-auto rounded-lg bg-orange-50 p-2 text-xs leading-5 hover:bg-orange-100">
            <p className="order-1 font-semibold text-orange-700">{name}</p>
            <p className="order-1 text-orange-500 group-hover:text-orange-700">
              {location}
            </p>
            <p className="text-orange-500 group-hover:text-orange-700">
              <time>
                {ConvertTo12Hour(start)} - {ConvertTo12Hour(end)}
              </time>
            </p>
          </div>
        </li>
      );
    case "AVAILABILITY":
      return (
        <li
          className={`hover:z-[6] relative mt-px flex col-start-${day}`}
          style={{ gridRow: startRow + " / span " + length }}
        >
          <div className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-blue-50 p-2 text-xs leading-5 hover:bg-blue-100">
            <p className="order-1 font-semibold text-blue-700">Available</p>
            <p className="text-blue-500 group-hover:text-blue-700">
              <time>
                {ConvertTo12Hour(start)} - {ConvertTo12Hour(end)}
              </time>
            </p>
          </div>
        </li>
      );
  }
};

export default AvailabilityCalendarEvent;

function ConvertTo12Hour(time: number) {
  const hour = time / 60;
  const min = time % 60;
  const hour12 = Math.floor(hour % 12);
  const AMPM = hour >= 12 ? "PM" : "AM";
  if (min === 0) return `${hour12}:${min}0 ${AMPM}`;
  if (min < 10) return `${hour12}:0${min} ${AMPM}`;
  return `${hour12}:${min} ${AMPM}`;
}
