import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdAccountCircle, MdChevronRight, MdSearch } from "react-icons/md";
import { api } from "../../utils/trpc";
import Link from "next/link";
import Badge from "../../components/Badge";

const Contacts: NextPage = () => {
  const contacts = api.user.getAllUsersByLetter.useQuery();
  const [contactList, setContactList] = useState(
    contacts.data?.usersByLetter || []
  );
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    if (!contacts.isLoading && contacts.data?.usersByLetter)
      setContactList(contacts.data?.usersByLetter);
  }, [contacts.data?.usersByLetter, contacts.isLoading]);

  useEffect(() => {
    if (searchInput.length > 0) {
      const searchResults = contacts.data?.usersByLetter.map((letter) => {
        return {
          letter: letter.letter,
          users: letter.users.filter((user) => {
            return user?.name
              ?.toLowerCase()
              .includes(searchInput.toLowerCase());
          }),
        };
      });
      setContactList(searchResults || []);
    } else {
      setContactList(contacts.data?.usersByLetter || []);
    }
  }, [searchInput, contacts.data?.usersByLetter]);

  return (
    <>
      <Head>
        <title>CKAU Enterprise | Contacts</title>
        <meta
          name="description"
          content="Enterprise application for The Campus Kitchen at Auburn University"
        />
      </Head>
      <div className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">
              Contacts
            </h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all members in the organization.
            </p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <div className="flex gap-x-4">
              <div className="min-w-0 flex-1">
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <MdSearch
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    type="search"
                    name="search"
                    id="search"
                    className="block w-full rounded-md border-0 py-1.5 pl-10 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                    placeholder="Search"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 bg-white sm:rounded-xl">
          <ul
            role="list"
            className="min-h-[calc(100vh_-_228px)] divide-gray-100 overflow-auto bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl"
          >
            {contactList.map(
              (l) =>
                l.users.length > 0 && (
                  <div key={l.letter} className="relative">
                    <div className="sticky top-0 z-10 border-b border-t border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
                      <h3>{l.letter}</h3>
                    </div>
                    <ul
                      role="list"
                      className="relative z-0 divide-y divide-gray-200"
                    >
                      {l.users.map((person) => (
                        <li
                          key={person.id}
                          className="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6"
                        >
                          <div className="flex gap-x-4">
                            {person.image ? (
                              <Image
                                className="h-12 w-12 flex-none rounded-full bg-gray-50"
                                src={person.image}
                                alt={person.name + "'s profile picture"}
                                width={48}
                                height={48}
                              />
                            ) : (
                              <MdAccountCircle className="h-12 w-12 flex-none rounded-full bg-gray-100 text-gray-400" />
                            )}
                            <div className="min-w-0 flex-auto">
                              <p className="text-sm font-semibold leading-6 text-gray-900">
                                <Link href={"/contacts/" + person.id}>
                                  <span className="absolute inset-x-0 -top-px bottom-0" />
                                  {person.name}
                                </Link>
                              </p>
                              <p className="mt-1 flex text-xs leading-5 text-gray-500">
                                <Link
                                  href={`mailto:${person.email}`}
                                  className="relative truncate hover:underline"
                                >
                                  {person.email}
                                </Link>
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-x-4">
                            <div className="hidden sm:flex sm:flex-col sm:items-end">
                              {person.title?.startsWith("VP") ? (
                                <Badge
                                  data={{ color: "GREEN", text: person.title }}
                                />
                              ) : person.title === "President" ? (
                                <Badge
                                  data={{ color: "RED", text: person.title }}
                                />
                              ) : (
                                <Badge
                                  data={{
                                    color: "BLUE",
                                    text: person.title || "",
                                  }}
                                />
                              )}
                              {/* {person.lastSeen ? (
                          <p className="mt-1 text-xs leading-5 text-gray-500">
                            Last seen{" "}
                            <time dateTime={person.lastSeenDateTime}>
                              {person.lastSeen}
                            </time>
                          </p>
                        ) : (
                          <div className="mt-1 flex items-center gap-x-1.5">
                            <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            </div>
                            <p className="text-xs leading-5 text-gray-500">
                              Online
                            </p>
                          </div>
                        )} */}
                            </div>
                            <MdChevronRight
                              className="h-5 w-5 flex-none text-gray-400"
                              aria-hidden="true"
                            />
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Contacts;

// const [selectedContact, setSelectedContact] = useState(
//   contacts.data?.usersByLetter[0]?.users[0] || null
// );
// const [contactList, setContactList] = useState(
//   contacts.data?.usersByLetter || []
// );
// const [searchInput, setSearchInput] = useState("");
// const [contactOpen, setContactOpen] = useState(
//   router.query.name != "" ? true : false
// );

// useEffect(() => {
//   if (!contacts.isLoading && contacts.data?.usersByLetter)
//     setContactList(contacts.data?.usersByLetter);
// }, [contacts.data?.usersByLetter, contacts.isLoading]);

// useEffect(() => {
//   if (searchInput.length > 0) {
//     const searchResults = contacts.data?.usersByLetter.map((letter) => {
//       return {
//         letter: letter.letter,
//         users: letter.users.filter((user) => {
//           return user?.name
//             ?.toLowerCase()
//             .includes(searchInput.toLowerCase());
//         }),
//       };
//     });
//     setContactList(searchResults || []);
//   } else {
//     setContactList(contacts.data?.usersByLetter || []);
//   }
// }, [searchInput, contacts.data?.usersByLetter]);

// useEffect(() => {
//   if (router.query.name) {
//     setContactOpen(true);
//   } else {
//     setContactOpen(false);
//   }
// }, [router.query.name]);

// return (
//   <>
//     <Head>
//       <title>CKAU Enterprise | Contacts</title>
//       <meta
//         name="description"
//         content="Enterprise application for The Campus Kitchen at Auburn University"
//       />
//     </Head>
//     <div className="flex h-[calc(100vh_-_144px)] rounded-lg bg-white shadow">
//       <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
//         <div className="relative z-0 flex flex-1 overflow-hidden">
//           <div
//             className={`relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last ${
//               contactOpen ? "block" : "hidden xl:block"
//             }`}
//           >
//             {/* Breadcrumb */}
//             <nav
//               className="flex items-start px-4 py-3 sm:px-6 lg:px-8 xl:hidden"
//               aria-label="Breadcrumb"
//             >
//               <button
//                 onClick={() =>
//                   router.push("/contacts", undefined, {
//                     shallow: true,
//                   })
//                 }
//                 className="inline-flex items-center space-x-3 text-sm font-medium text-gray-900"
//               >
//                 <MdChevronLeft
//                   className="-ml-2 h-5 w-5 text-gray-400"
//                   aria-hidden="true"
//                 />
//                 <span>Contacts</span>
//               </button>
//             </nav>

//             {selectedContact ? (
//               <Contact personId={selectedContact?.id} />
//             ) : (
//               <Contact personId={""} skeleton />
//             )}
//           </div>
//           <aside
//             className={`flex-shrink-0 border-gray-200 xl:order-first xl:flex xl:w-96 xl:flex-col xl:border-r ${
//               contactOpen ? "hidden" : "order-first flex w-full flex-col"
//             }`}
//           >
//             <div className="px-6 pb-4 pt-6">
//               <h2 className="text-lg font-medium text-gray-900">Contacts</h2>
//               <p className="mt-1 text-sm text-gray-600">
//                 Search contacts of {contacts.data?.count} members
//               </p>
//               <div className="mt-6 flex gap-x-4">
//                 <div className="min-w-0 flex-1">
//                   <label htmlFor="search" className="sr-only">
//                     Search
//                   </label>
//                   <div className="relative rounded-md shadow-sm">
//                     <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
//                       <MdSearch
//                         className="h-5 w-5 text-gray-400"
//                         aria-hidden="true"
//                       />
//                     </div>
//                     <input
//                       type="search"
//                       name="search"
//                       id="search"
//                       className="block w-full rounded-md border-0 py-1.5 pl-10 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
//                       placeholder="Search"
//                       value={searchInput}
//                       onChange={(e) => setSearchInput(e.target.value)}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* Directory list */}
//             <nav
//               className="min-h-0 flex-1 overflow-y-auto"
//               aria-label="Directory"
//             >
//               {contactList.map(
//                 (l) =>
//                   l.users.length > 0 && (
//                     <div key={l.letter} className="relative">
//                       <div className="sticky top-0 z-10 border-b border-t border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
//                         <h3>{l.letter}</h3>
//                       </div>
//                       <ul
//                         role="list"
//                         className="relative z-0 divide-y divide-gray-200"
//                       >
//                         {l.users.map((person) => (
//                           <li key={person.id}>
//                             <div className="relative flex items-center space-x-3 px-6 py-5 focus-within:ring-2 focus-within:ring-inset focus-within:ring-secondary hover:bg-gray-50">
//                               <div className="flex-shrink-0">
//                                 {person.image ? (
//                                   <Image
//                                     className="h-10 w-10 rounded-full"
//                                     src={person.image || ""}
//                                     alt={person.name + "'s profile picture"}
//                                     width={40}
//                                     height={40}
//                                   />
//                                 ) : (
//                                   <MdAccountCircle
//                                     className="h-10 w-10 text-gray-400
//                                   "
//                                   />
//                                 )}
//                               </div>
//                               <div className="min-w-0 flex-1">
//                                 <button
//                                   onClick={() => {
//                                     router.push(
//                                       "/contacts/?name=" + person.name,
//                                       undefined,
//                                       { shallow: true }
//                                     );
//                                     setSelectedContact(person);
//                                   }}
//                                   className="text-left focus:outline-none"
//                                 >
//                                   {/* Extend touch target to entire panel */}
//                                   <span
//                                     className="absolute inset-0"
//                                     aria-hidden="true"
//                                   />
//                                   <p className="text-sm font-medium text-gray-900">
//                                     {person.name}
//                                   </p>
//                                   <p className="truncate text-sm text-gray-500">
//                                     {person.title}
//                                   </p>
//                                 </button>
//                               </div>
//                             </div>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   )
//               )}
//             </nav>
//           </aside>
//         </div>
//       </div>
//     </div>
//   </>
// );
