import { type NextPage } from "next";
import settingsNav from "../../../constants/settings/settingsNav";
import { useRouter } from "next/router";
import Image from "next/image";
import { MdAccountCircle } from "react-icons/md";
import { useEffect, useState } from "react";
import { api } from "../../../utils/trpc";
import formatPhoneNumber from "../../../utils/formatPhoneNumber";
import Alert, { type AlertProps } from "../../../components/Alert";

/**
 * Function to validate a phone number.
 * @param phone string to validate as a phone number
 * @returns  error message if phone number is invalid, otherwise empty string.
 */
const validatePhone = (phone: string | undefined) => {
  let error = "";

  if (!phone) error = "Phone number is required.";
  else if (phone.length !== 14)
    error = "Invalid phone format. ex: (555) 555-5555";

  return error;
};

const Account: NextPage = () => {
  const router = useRouter();
  /** Current user, fetch every 5 minutes */
  const { data, isSuccess, isLoading } = api.user.getCurrentUser.useQuery(
    undefined,
    {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    }
  );

  const updatePersonalInfo = api.user.updateUserPersonalInfo.useMutation();
  const updateSchoolInfo = api.user.updateUserSchoolInfo.useMutation();

  const [alert, setAlert] = useState<AlertProps>({
    type: "SUCCESS",
    message: "",
    show: false,
  });

  /** Field Variables */
  const [name, setName] = useState<string | undefined>(data?.name || "");
  const [nameError, setNameError] = useState<string | undefined>("");
  const [phone, setPhone] = useState<string | undefined>(
    formatPhoneNumber(data?.phone || "", "") || ""
  );
  const [phoneError, setPhoneError] = useState<string | undefined>("");
  const [birthday, setBirthday] = useState<string | undefined>(
    data?.birthday?.toISOString().slice(0, 10) || ""
  );
  const [birthdayError, setBirthdayError] = useState<string | undefined>("");
  const [year, setYear] = useState(data?.year?.toString() || "1");
  const [major, setMajor] = useState(data?.major || "");
  const [majorError, setMajorError] = useState<string | undefined>("");

  function personalInfoSave() {
    const phoneError = validatePhone(phone);
    if (name === "" || !name || name.length < 2) {
      setNameError("Name is required and must be at least 2 characters long.");
      return;
    }
    setNameError("");
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
    if (name && phone && birthday) {
      updatePersonalInfo.mutate({
        name: name,
        phone: phone,
        birthday: birthday,
      });
    }
  }

  function schoolInfoSave() {
    if (major === "") {
      setMajorError("Major is required");
      return;
    }
    setMajorError("");
    if (year && major) {
      updateSchoolInfo.mutate({
        year: year,
        major: major,
      });
    }
  }

  /** Upon user retrieval, set form fields */
  useEffect(() => {
    setName(data?.name || "");
    setPhone(formatPhoneNumber(data?.phone || "", "") || "");
    setBirthday(data?.birthday?.toISOString().slice(0, 10) || "");
    setYear(data?.year?.toString() || "1");
    setMajor(data?.major || "");
  }, [isSuccess, data]);

  /** Upon successful update for personal information, show success alert */
  useEffect(() => {
    if (updatePersonalInfo.isSuccess) {
      setAlert({
        type: "SUCCESS",
        message: "Personal information updated successfully.",
        show: true,
      });
    }
    if (updatePersonalInfo.isError) {
      setAlert({
        type: "ERROR",
        message: "Error updating personal information.",
        show: true,
      });
    }
  }, [updatePersonalInfo.isSuccess, updatePersonalInfo.isError]);

  /** Upon successful update for school information, show success alert */
  useEffect(() => {
    if (updateSchoolInfo.isSuccess) {
      setAlert({
        type: "SUCCESS",
        message: "School information updated successfully.",
        show: true,
      });
    }
    if (updateSchoolInfo.isError) {
      setAlert({
        type: "ERROR",
        message: "Error updating school information.",
        show: true,
      });
    }
  }, [updateSchoolInfo.isSuccess, updateSchoolInfo.isError]);

  /** If no user data, send back to setup */
  if (isSuccess && !data) router.push("/setup");

  return (
    <>
      <div className="rounded-lg bg-white shadow">
        <header className="sticky top-16 border-b border-black/5 bg-white">
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

        <Alert data={alert} setData={setAlert} />

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
                  {isLoading ? (
                    <div className="h-24 w-24 animate-pulse rounded-lg bg-gray-300" />
                  ) : data?.image ? (
                    <Image
                      src={data.image || ""}
                      alt="Profile picture for user"
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
                    {isLoading ? (
                      <div className="h-9 w-full animate-pulse rounded-md bg-gray-300" />
                    ) : (
                      <input
                        type="text"
                        name="full-name"
                        id="full-name"
                        autoComplete="given-name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-black/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                      />
                    )}
                  </div>
                  {nameError && (
                    <p className="mt-2 text-xs leading-5 text-red-500">
                      {nameError}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    {isLoading ? (
                      <div className="h-9 w-full animate-pulse rounded-md bg-gray-300" />
                    ) : (
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        value={data?.email || ""}
                        disabled
                        className="block w-full rounded-md border-0 bg-black/5 py-1.5 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                      />
                    )}
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
                    {isLoading ? (
                      <div className="h-9 w-full animate-pulse rounded-md bg-gray-300" />
                    ) : (
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
                    )}
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
                    {isLoading ? (
                      <div className="h-9 w-full animate-pulse rounded-md bg-gray-300" />
                    ) : (
                      <input
                        id="birthday"
                        name="birthday"
                        type="date"
                        autoComplete="birthday"
                        value={birthday}
                        onChange={(e) => setBirthday(e.target.value)}
                        className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-black/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6`}
                      />
                    )}
                  </div>
                  {birthdayError && (
                    <p className="mt-2 text-xs leading-5 text-red-500">
                      {birthdayError}
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-8 flex">
                {isLoading ? (
                  <div className="h-9 w-14 animate-pulse rounded-md bg-gray-300" />
                ) : (
                  <button
                    className="hover:bg-primary-600 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    onClick={() => personalInfoSave()}
                  >
                    Save
                  </button>
                )}
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
                    Year *
                  </label>
                  <div className="mt-2">
                    {isLoading ? (
                      <div className="h-9 w-full animate-pulse rounded-md bg-gray-300" />
                    ) : (
                      <select
                        id="year"
                        name="year"
                        autoComplete="year"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-black/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                      >
                        <option value={1}>Freshman</option>
                        <option value={2}>Sophmore</option>
                        <option value={3}>Junior</option>
                        <option value={4}>Senior</option>
                      </select>
                    )}
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="major"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Major *
                  </label>
                  <div className="mt-2">
                    {isLoading ? (
                      <div className="h-9 w-full animate-pulse rounded-md bg-gray-300" />
                    ) : (
                      <input
                        id="major"
                        name="major"
                        type="text"
                        autoComplete="major"
                        value={major}
                        onChange={(e) => setMajor(e.target.value)}
                        className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-black/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6`}
                      />
                    )}
                  </div>
                  {majorError && (
                    <p className="mt-2 text-xs leading-5 text-red-500">
                      {majorError}
                    </p>
                  )}
                </div>
                <div className="mt-8 flex">
                  {isLoading ? (
                    <div className="h-9 w-14 animate-pulse rounded-md bg-gray-300" />
                  ) : (
                    <button
                      onClick={() => schoolInfoSave()}
                      className="hover:bg-primary-600 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      Save
                    </button>
                  )}
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
