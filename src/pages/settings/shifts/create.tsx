import { useEffect, useState } from "react";
import Link from "next/link";
import ShiftTypeRadio from "../../../components/shifts/ShiftTypeRadio";
import { type ShiftRadioType } from "../../../components/shifts/ShiftTypeRadio";
import TextInput from "../../../components/TextInput";
import TextArea from "../../../components/TextArea";
import SimpleSelect, {
  type SimpleSelectItem,
} from "../../../components/Layout/SimpleSelect";
import { fiveMinuteIntervals } from "../../../constants/timeIntervals";
import { validateEmail } from "../../../utils/validations/validateEmail";

const daysOfWeek = [
  { id: 0, label: "Sunday" },
  { id: 1, label: "Monday" },
  { id: 2, label: "Tuesday" },
  { id: 3, label: "Wednesday" },
  { id: 4, label: "Thursday" },
  { id: 5, label: "Friday" },
  { id: 6, label: "Saturday" },
];

const CreateShift = () => {
  const [shiftName, setShiftName] = useState("");

  const [selectedShiftType, setSelectedShiftType] = useState<ShiftRadioType>({
    id: -1,
    name: "",
    description: "",
  });
  const [shiftLocationName, setShiftLocationName] = useState("");
  const [shiftLocationAddress, setShiftLocationAddress] = useState("");
  const [shiftLocationNotes, setShiftLocationNotes] = useState("");
  const [shiftLocationDisabled, setShiftLocationDisabled] = useState(false);

  const [shiftDay, setShiftDay] = useState<SimpleSelectItem>({
    id: -1,
    label: "",
  });
  const [shiftTime, setShiftTime] = useState<SimpleSelectItem>({
    id: -1,
    label: "",
  });

  const [shiftPrimaryName, setShiftPrimaryName] = useState("");
  const [shiftPrimaryEmail, setShiftPrimaryEmail] = useState("");
  const [shiftPrimaryEmailError, setShiftPrimaryEmailError] = useState(false);
  const [shiftPrimaryPhone, setShiftPrimaryPhone] = useState("");

  const [shiftDescription, setShiftDescription] = useState("");

  useEffect(() => {
    if (
      selectedShiftType.id === 3 ||
      selectedShiftType.id === 5 ||
      selectedShiftType.id === 6
    ) {
      setShiftLocationName("Lupton Hall");
      setShiftLocationAddress(
        "Lupton Residence Hall, Roosevelt Concourse, Auburn, AL 36849"
      );
      setShiftLocationDisabled(true);
    } else {
      setShiftLocationName("");
      setShiftLocationAddress("");
      setShiftLocationDisabled(false);
    }
  }, [selectedShiftType]);

  return (
    <>
      <div className="bg-white px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl md:flex md:items-center md:justify-between">
          <div className="min-w-0 flex-1">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
              Create New Shift
            </h2>
          </div>
          <div className="mt-4 flex md:ml-4 md:mt-0">
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Reset
            </button>
            <Link
              href="/settings/shifts"
              className="ml-3 inline-flex items-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
            >
              Cancel
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-7xl">
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                {/* TODO: Check if shift name is already taken */}
                <TextInput
                  label="Shift name"
                  value={shiftName}
                  setValue={setShiftName}
                  id="name"
                  className="sm:col-span-4 xl:col-span-3"
                />
              </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Type and Location
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Select the type of shift and the location where it will occur.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <ShiftTypeRadio
                  selected={selectedShiftType}
                  setSelected={setSelectedShiftType}
                />

                <TextInput
                  label="Location name"
                  value={shiftLocationName}
                  setValue={setShiftLocationName}
                  id="location-name"
                  className="sm:col-span-3 xl:col-span-2"
                  disabled={shiftLocationDisabled}
                />

                <TextInput
                  label="Location address"
                  value={shiftLocationAddress}
                  setValue={setShiftLocationAddress}
                  id="location-address"
                  className="sm:col-span-4 xl:col-span-3"
                  disabled={shiftLocationDisabled}
                />

                <TextArea
                  label="Location notes"
                  value={shiftLocationNotes}
                  setValue={setShiftLocationNotes}
                  rows={3}
                  id="location-notes"
                  className="sm:col-span-4 xl:col-span-3"
                  disabled={shiftLocationDisabled}
                  optional
                />
              </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Day and Time
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Select the day of week and time that this shift will occur.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <SimpleSelect
                  items={daysOfWeek}
                  value={shiftDay}
                  setValue={setShiftDay}
                  label="Day of week"
                  className="sm:col-span-3 xl:col-span-2"
                />
                <SimpleSelect
                  items={fiveMinuteIntervals}
                  value={shiftTime}
                  setValue={setShiftTime}
                  label="Start time"
                  className="sm:col-span-3 xl:col-span-2"
                />
              </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Primary Contact
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Please provide information about the primary contact for this
                shift.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <TextInput
                  label="Contact name"
                  value={shiftPrimaryName}
                  setValue={setShiftPrimaryName}
                  id="contact-name"
                  className="sm:col-span-3 xl:col-span-2"
                />
                <TextInput
                  label="Contact email"
                  value={shiftPrimaryEmail}
                  setValue={setShiftPrimaryEmail}
                  id="contact-email"
                  className="sm:col-span-3 xl:col-span-2"
                  validation={validateEmail}
                  validationMessage="Please enter a valid email address."
                  error={shiftPrimaryEmailError}
                  setError={setShiftPrimaryEmailError}
                />
                <TextInput
                  label="Contact phone"
                  value={shiftPrimaryPhone}
                  setValue={setShiftPrimaryPhone}
                  id="contact-phone"
                  className="sm:col-span-3 xl:col-span-2"
                />
              </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <TextArea
                  label="Description"
                  value={shiftDescription}
                  setValue={setShiftDescription}
                  rows={10}
                  id="description"
                  className="col-span-full"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CreateShift;
