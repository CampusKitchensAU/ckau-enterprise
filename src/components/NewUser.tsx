import { SignOutButton, useUser } from "@clerk/nextjs";
import { useState } from "react";
import { api } from "../utils/trpc";
import { useRouter } from "next/router";
import { CgSpinnerTwo } from "react-icons/cg";
import Image from "next/image";

//write a function that takes in a string and validates it as a phone number
const validatePhone = (phone: string) => {
  phone = phone.replace(/\D/g, "");
  if (
    phone.match(/^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/) || // xxx-xxx-xxxx
    phone.match(/^\d{10}$/) || // xxxxxxxxxx
    phone.match(/^\(\d{3}\) \d{3}-\d{4}$/) // (xxx) xxx-xxxx
  ) {
    return true;
  } else {
    return false;
  }
};

const NewUser = () => {
  const router = useRouter();
  const { user } = useUser();
  const [newUser, setNewUser] = useState({
    name: user?.fullName || "",
    email: user?.primaryEmailAddress?.emailAddress || "",
    phone: "",
    birthday: "",
    year: "1",
    major: "",
  });
  const { mutate, isSuccess, isLoading, isError } =
    api.auth.createNewUser.useMutation();

  const [invalids, setInvalids] = useState({
    name: "",
    phone: "",
    birthday: "",
    major: "",
  });

  const handleSave = () => {
    const i = {
      name: "",
      phone: "",
      birthday: "",
      major: "",
    };
    if (newUser.name.trim() == "") i.name = "Name is required.";
    else i.name = "";
    if (newUser.phone.trim() == "") i.phone = "Phone number is required.";
    else if (!validatePhone(newUser.phone))
      i.phone = "Phone number is invalid.";
    else i.phone = "";
    if (newUser.birthday.trim() == "") i.birthday = "Birthday is required.";
    else i.birthday = "";
    if (newUser.major.trim() == "") i.major = "Major is required.";
    else i.major = "";
    setInvalids(i);

    if (i.name == "" && i.phone == "" && i.birthday == "" && i.major == "") {
      mutate(newUser);
      router.push("/");
    }
  };
  if (isLoading)
    return (
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <Image
            src="/logos/ckau-logo-rect-nobg.png"
            alt="CKAU Logo"
            width={200}
            height={200}
            className="mx-auto pb-4"
          />
          <h1 className="mt-4 flex items-center gap-2 text-lg font-bold tracking-tight text-gray-900 sm:text-xl">
            <CgSpinnerTwo className="text-secondary-500 animate-spin" />
            Getting everything setup...
          </h1>
        </div>
      </main>
    );
  if (isSuccess) router.reload();
  if (isError)
    return (
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <Image
            src="/logos/ckau-logo-rect-nobg.png"
            alt="CKAU Logo"
            width={200}
            height={200}
            className="mx-auto pb-4"
          />
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Error :(
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600">
            Sorry, there has been an error setting up your account. Please reach
            out to the leadership team for help.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <div className="rounded-md bg-secondary-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-500">
              <SignOutButton />
            </div>
            <a
              href="mailto:theckau@gmail.com"
              className="text-sm font-semibold text-gray-900"
            >
              Email team <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    );
  return (
    <>
      <main>
        <div className="bg-white px-6 pt-24 pb-12 sm:pt-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-base font-semibold leading-7 text-secondary-500">
              Forking hunger in a new way
            </p>
            <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Campus Kitchen Enterprise
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Welcome to Campus Kitchen Enterprise! We&apos;re excited to have
              you on board. Please fill out the form below to get started with
              your account.
            </p>
          </div>
        </div>
        <div className="p-6 pb-24 sm:pb-32">
          <div className="mx-auto max-w-7xl rounded-lg border border-gray-200 p-12">
            <div className="mx-auto max-w-2xl">
              <div>
                <div className="space-y-12">
                  <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">
                      Personal Information
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      If you would like, change your name to your preffered
                      name.
                    </p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
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
                            value={newUser.name}
                            onChange={(e) =>
                              setNewUser({ ...newUser, name: e.target.value })
                            }
                            className={`block w-full rounded-md border-0 py-1.5 ${
                              invalids.name != ""
                                ? "text-red-500 ring-red-600"
                                : "text-gray-900 ring-gray-300 focus:ring-secondary-600"
                            }  shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`}
                          />
                        </div>
                        {invalids.name != "" && (
                          <p className="mt-2 text-sm text-red-500">
                            {invalids.name}
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
                          <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            value={newUser.email}
                            disabled
                            className="block w-full rounded-md border-0 bg-gray-100 py-1.5 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-4">
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Phone number
                        </label>
                        <div className="mt-2">
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            autoComplete="phone"
                            placeholder="XXX-XXX-XXXX"
                            value={newUser.phone}
                            onChange={(e) =>
                              setNewUser({ ...newUser, phone: e.target.value })
                            }
                            className={`block w-full rounded-md border-0 py-1.5 ${
                              invalids.phone != ""
                                ? "text-red-500 ring-red-600"
                                : "text-gray-900 ring-gray-300 focus:ring-secondary-600"
                            }  shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`}
                          />
                        </div>
                        {invalids.phone != "" && (
                          <p className="mt-2 text-sm text-red-500">
                            {invalids.phone}
                          </p>
                        )}
                      </div>

                      <div className="sm:col-span-4">
                        <label
                          htmlFor="birthday"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Birthday
                        </label>
                        <div className="mt-2">
                          <input
                            id="birthday"
                            name="birthday"
                            type="date"
                            autoComplete="birthday"
                            value={newUser.birthday}
                            onChange={(e) =>
                              setNewUser({
                                ...newUser,
                                birthday: e.target.value,
                              })
                            }
                            className={`block w-full rounded-md border-0 py-1.5 ${
                              invalids.birthday != ""
                                ? "text-red-500 ring-red-600"
                                : "text-gray-900 ring-gray-300 focus:ring-secondary-600"
                            }  shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`}
                          />
                        </div>
                        {invalids.birthday != "" && (
                          <p className="mt-2 text-sm text-red-500">
                            {invalids.birthday}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">
                      School Information
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Please use your current status by credit hours.
                    </p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
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
                            value={newUser.year}
                            onChange={(e) =>
                              setNewUser({ ...newUser, year: e.target.value })
                            }
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-secondary-600 sm:max-w-xs sm:text-sm sm:leading-6"
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
                            value={newUser.major}
                            onChange={(e) =>
                              setNewUser({ ...newUser, major: e.target.value })
                            }
                            className={`block w-full rounded-md border-0 py-1.5 ${
                              invalids.major != ""
                                ? "text-red-500 ring-red-600"
                                : "text-gray-900 ring-gray-300 focus:ring-secondary-600"
                            }  shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`}
                          />
                        </div>
                        {invalids.major != "" && (
                          <p className="mt-2 text-sm text-red-500">
                            {invalids.major}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                  <button
                    onClick={handleSave}
                    className="rounded-md bg-secondary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-secondary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-600"
                  >
                    Get Started!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default NewUser;
