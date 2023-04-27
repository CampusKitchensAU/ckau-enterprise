import { type NextPage } from "next";
import settingsNav from "../settingsNav";
import { useRouter } from "next/router";
import Image from "next/image";
import { MdAccountCircle } from "react-icons/md";
import { useState } from "react";
import { api } from "../../../utils/trpc";
import formatPhoneNumber from "../../../utils/formatPhoneNumber";
//import { TbAlertTriangleFilled } from "react-icons/tb";

const validatePhone = (phone: string | undefined) => {
  let error = "";

  if (!phone) error = "Phone number is required.";
  else if (phone.length !== 14)
    error = "Invalid phone format. ex: (555) 555-5555";

  return error;
};

const Account: NextPage = () => {
  const router = useRouter();
  //const { user } = useUser();
  const { data, isSuccess } = api.user.getCurrentUser.useQuery();
  const [phone, setPhone] = useState<string | undefined>(data?.phone || "");
  const [phoneError, setPhoneError] = useState<string | undefined>("");
  const [birthday, setBirthday] = useState<string | undefined>(
    data?.birthday?.toDateString() || ""
  );
  const [birthdayError, setBirthdayError] = useState<string | undefined>("");

  if (isSuccess && !data) router.push("/setup");

  return (
    <>
      <div className="rounded-lg bg-white shadow">
        <header className="border-b border-black/5">
          {/* Secondary navigation */}
          <nav className="flex overflow-x-auto py-4">
            <ul
              role="list"
              className="flex min-w-full flex-none gap-x-6 px-4 text-sm font-semibold leading-6 text-gray-400 sm:px-6 lg:px-8"
            >
              {settingsNav.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={
                      item.href == router.pathname
                        ? "font-bold text-primary"
                        : ""
                    }
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        {/* {!user?.profileComplete ? (
          <div className="m-4 rounded-lg bg-yellow-100 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <TbAlertTriangleFilled
                  className="h-5 w-5 text-yellow-500"
                  aria-hidden="true"
                />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">
                  Profile Incomplete!
                </h3>
                <div className="mt-2 text-sm text-yellow-700">
                  <p>
                    Please fill out the required information below to complete
                    your profile.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : null} */}

        <div className="divide-y divide-black/5">
          <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
            <div>
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Personal Information
              </h2>
            </div>

            <div className="md:col-span-2">
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
                <div className="col-span-full flex items-center gap-x-8">
                  {data?.image ? (
                    <Image
                      src={data.image || ""}
                      alt="Profile picture"
                      width={96}
                      height={96}
                      className="h-24 w-24 flex-none rounded-lg bg-gray-800 object-cover"
                    />
                  ) : (
                    <MdAccountCircle className="h-24 w-24 flex-none rounded-lg bg-gray-200 text-gray-400" />
                  )}
                  <div>
                    <button
                      type="button"
                      className="rounded-md bg-black/10 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-black/20"
                    >
                      Change avatar
                    </button>
                    <p className="mt-2 text-xs leading-5 text-gray-400">
                      JPG or PNG. 1MB max.
                    </p>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="full-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Full name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="full-name"
                      id="full-name"
                      autoComplete="given-name"
                      value={data?.name || ""}
                      disabled
                      className="block w-full rounded-md border-0 bg-black/5 py-1.5 text-gray-500 shadow-sm ring-1 ring-inset ring-black/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      value={data?.email || ""}
                      disabled
                      className="block w-full rounded-md border-0 bg-black/5 py-1.5 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-full sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Phone number *
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={phone}
                      onChange={(e) =>
                        setPhone((prev) =>
                          formatPhoneNumber(e.target.value, prev)
                        )
                      }
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-black/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    />
                  </div>
                  {phoneError && (
                    <p className="mt-2 text-xs leading-5 text-red-500">
                      {phoneError}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="birthday"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Birthday *
                  </label>
                  <div className="mt-2">
                    <input
                      id="birthday"
                      name="birthday"
                      type="date"
                      autoComplete="birthday"
                      value={birthday}
                      onChange={(e) => setBirthday(e.target.value)}
                      className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-black/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6`}
                    />
                  </div>
                  {birthdayError && (
                    <p className="mt-2 text-xs leading-5 text-red-500">
                      {birthdayError}
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-8 flex">
                <button
                  className="hover:bg-primary-600 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  onClick={() => {
                    const phoneError = validatePhone(phone);
                    if (phoneError) {
                      setPhoneError(phoneError);
                      return;
                    }
                    setPhoneError("");
                    if (!birthday || birthday === "") {
                      setBirthdayError("Birthday is required");
                      return;
                    }
                    setBirthdayError("");
                    //save
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          </div>

          <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
            <div>
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                School Information
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-400">
                Please use your current status by credit hours.
              </p>
            </div>
            <div className="md:col-span-2">
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="year"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Year
                  </label>
                  <div className="mt-2">
                    <select
                      id="year"
                      name="year"
                      autoComplete="year"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-black/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    >
                      <option value={1}>Freshman</option>
                      <option value={2}>Sophmore</option>
                      <option value={3}>Junior</option>
                      <option value={4}>Senior</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="major"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Major
                  </label>
                  <div className="mt-2">
                    <input
                      id="major"
                      name="major"
                      type="text"
                      autoComplete="major"
                      className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-black/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6`}
                    />
                  </div>
                </div>
                <div className="mt-8 flex">
                  <button className="hover:bg-primary-600 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Account;
