import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdAccountCircle, MdEdit } from "react-icons/md";
import { useRouter } from "next/router";
import { api } from "../../utils/trpc";
import classNames from "../../utils/classNames";
import formatPhoneNumber from "../../utils/formatPhoneNumber";
import convertAcademicYear from "../../utils/convertAcademicYear";
import convertBirthday from "../../utils/convertBirthday";
import Badge from "../../components/Badge";
import Alert, { type AlertProps } from "../../components/Alert";

const tabs = ["Profile", "Availability"];

const ContactPerson = () => {
  const router = useRouter();
  const currentUser = api.user.getCurrentUser.useQuery(undefined, {
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
  const { data, isLoading, isError } = api.user.getUserById.useQuery(
    {
      id: typeof router.query.id == "string" ? router.query.id : "",
    },
    {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    }
  );
  const [alert, setAlert] = useState<AlertProps>({
    type: "ERROR",
    message: "",
    show: false,
  });
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const profileFields = [
    { name: "Phone", value: formatPhoneNumber(data?.phone || "", "") },
    { name: "Email", value: data?.email },
    { name: "Title", value: data?.title },
    { name: "Year", value: convertAcademicYear(data?.year || 0) },
    { name: "Major", value: data?.major },
    { name: "Birthday", value: convertBirthday(data?.birthday || new Date()) },
  ];

  useEffect(() => {
    if (isError) {
      setAlert({
        type: "ERROR",
        message: "An error occurred while fetching data.",
        show: true,
        disappearTime: 10000,
      });
    }
  }, [isError]);

  /** If no current user data, send back to setup */
  if (currentUser.isSuccess && !currentUser.data) router.push("/setup");

  return (
    <>
      <Head>
        <title>CKAU Enterprise | Contacts</title>
        <meta
          name="description"
          content="Enterprise application for The Campus Kitchen at Auburn University"
        />
      </Head>
      <Alert data={alert} setData={setAlert} />
      <div className="relative z-0 block flex-1 overflow-y-auto focus:outline-none xl:order-last">
        {/* Breadcrumb */}
        {/* <nav
          className="flex items-start px-4 py-3 sm:px-6 lg:px-8"
          aria-label="Breadcrumb"
        >
          <Link
            href="/contacts"
            className="inline-flex items-center space-x-3 text-sm font-medium text-gray-900"
          >
            <MdChevronLeft
              className="-ml-2 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            <span>Contacts</span>
          </Link>
        </nav> */}

        <article className="min-h-[calc(100%_-_44px)] pb-6 xl:h-full">
          {/* Profile header */}
          <div className="sticky inset-0 z-40 bg-white">
            <div>
              {isLoading ? (
                <div className="h-32 w-full animate-pulse bg-slate-200 lg:h-48" />
              ) : (
                <Image
                  className="h-32 w-full object-cover object-[50%_-75px] lg:h-48"
                  src="/images/samford-hall.jpg"
                  alt=""
                  width={1920}
                  height={128}
                />
              )}
            </div>
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
              <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                <div className="flex">
                  {isLoading ? (
                    <div className="h-24 w-24 animate-pulse rounded-full bg-slate-200 ring-4 ring-white sm:h-32 sm:w-32" />
                  ) : data?.image ? (
                    <Image
                      className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                      src={data.image}
                      alt=""
                      height={96}
                      width={96}
                    />
                  ) : (
                    <MdAccountCircle className="h-24 w-24 rounded-full bg-white text-gray-400 ring-4 ring-white sm:h-32 sm:w-32" />
                  )}
                </div>
                <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                  <div className="mt-6 flex min-w-0 flex-1 flex-col items-start gap-1 sm:hidden 2xl:flex 2xl:flex-row 2xl:items-end 2xl:gap-2">
                    {isLoading ? (
                      <div className="mt-1 h-8 w-32 animate-pulse rounded bg-slate-200 lg:w-48" />
                    ) : (
                      <>
                        <h1 className="truncate text-2xl font-bold text-gray-900">
                          {data?.name}
                        </h1>
                        {data?.roleId === 0 ? (
                          <Badge
                            data={{ color: "BLUE", text: "Leadership Team" }}
                          />
                        ) : (
                          <Badge
                            data={{ color: "GREEN", text: "Executive Team" }}
                          />
                        )}
                      </>
                    )}
                  </div>
                  {currentUser.data?.id === data?.id && (
                    <div className="justify-stretch mt-6 flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
                      <Link
                        href="/settings/account"
                        className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      >
                        <MdEdit
                          className="-ml-0.5 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        Edit profile
                      </Link>
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-6 hidden min-w-0 flex-1 flex-col items-start gap-2 sm:flex 2xl:hidden">
                <h1 className="truncate text-2xl font-bold text-gray-900">
                  {data?.name}
                </h1>
                {data?.roleId === 0 ? (
                  <Badge data={{ color: "BLUE", text: "Leadership Team" }} />
                ) : (
                  <Badge data={{ color: "GREEN", text: "Executive Team" }} />
                )}
              </div>
            </div>

            {/* Tabs */}
            <div className="mt-6 sm:mt-2 2xl:mt-5">
              <div className="border-b border-gray-200">
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                  <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                    {tabs.map((tab, i) => (
                      <button
                        key={tab}
                        onClick={() => setSelectedTab(i)}
                        className={classNames(
                          selectedTab === i
                            ? "border-secondary text-gray-900"
                            : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                          "whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium"
                        )}
                        aria-current={selectedTab === i ? "page" : undefined}
                      >
                        {tab}
                      </button>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </div>

          {selectedTab === 0 && (
            <div className="mx-auto mt-6 max-w-5xl overflow-auto px-4 pb-4 sm:px-6 lg:px-8">
              <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                {profileFields.map((field) => (
                  <div key={field.name} className="sm:col-span-1">
                    <dt className="text-sm font-medium text-primary">
                      {field.name}
                    </dt>
                    {isLoading ? (
                      <div className="mt-1 h-6 animate-pulse rounded bg-slate-200" />
                    ) : (
                      <dd className="mt-1 text-sm text-gray-900">
                        {field.value}
                      </dd>
                    )}
                  </div>
                ))}
              </dl>
            </div>
          )}

          {selectedTab === 1 && <div>{/* <AvailabilityCalendar /> */}</div>}
        </article>
      </div>
    </>
  );
};

export default ContactPerson;
