import { RadioGroup } from "@headlessui/react";
import { MdCheckCircle } from "react-icons/md";
import classNames from "../../utils/classNames";
import type { Dispatch, SetStateAction } from "react";

export type ShiftRadioType = {
  id: number;
  name: string;
  description: string;
};

const shiftTypes: ShiftRadioType[] = [
  {
    id: 1,
    name: "On-Campus Pickup",
    description: "Pickup from on-campus locations",
  },
  {
    id: 2,
    name: "Off-Campus Pickup",
    description: "Pickup from off-campus locations",
  },
  {
    id: 3,
    name: "Packaging",
    description: "Packaging meals for delivery",
  },
  {
    id: 4,
    name: "Off-Campus Delivery",
    description: "Delivering meals to community partners off-campus",
  },
  {
    id: 5,
    name: "Lupton Delivery",
    description: "Community partner picks up meals from Lupton Hall",
  },
  {
    id: 6,
    name: "Resourcing",
    description: "Resourcing meals for the following day",
  },
];

const ShiftTypeRadio = ({
  selected,
  setSelected,
}: {
  selected: ShiftRadioType;
  setSelected: Dispatch<SetStateAction<ShiftRadioType>>;
}) => {
  return (
    <RadioGroup
      value={selected}
      onChange={setSelected}
      className="sm:col-span-6"
    >
      <RadioGroup.Label className="text-sm font-medium leading-6 text-gray-900">
        Select a shift type
      </RadioGroup.Label>

      <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
        {shiftTypes.map((type) => (
          <RadioGroup.Option
            key={type.id}
            value={type}
            className={({ checked, active }) =>
              classNames(
                checked ? "border-transparent" : "border-gray-300",
                active ? "border-secondary ring-2 ring-secondary" : "",
                "relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none"
              )
            }
          >
            {({ checked, active }) => (
              <>
                <span className="flex flex-1">
                  <span className="flex flex-col">
                    <RadioGroup.Label
                      as="span"
                      className="block text-sm font-medium text-gray-900"
                    >
                      {type.name}
                    </RadioGroup.Label>
                    <RadioGroup.Description
                      as="span"
                      className="mt-1 flex items-center text-sm text-gray-500"
                    >
                      {type.description}
                    </RadioGroup.Description>
                  </span>
                </span>
                <MdCheckCircle
                  className={classNames(
                    !checked ? "invisible" : "",
                    "h-5 w-5 text-secondary"
                  )}
                  aria-hidden="true"
                />
                <span
                  className={classNames(
                    active ? "border" : "border-2",
                    checked ? "border-secondary" : "border-transparent",
                    "pointer-events-none absolute -inset-px rounded-lg"
                  )}
                  aria-hidden="true"
                />
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
};
export default ShiftTypeRadio;
