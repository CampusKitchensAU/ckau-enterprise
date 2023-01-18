import { useRouter } from "next/router";

const ContactPerson = () => {
  const router = useRouter();

  return <div>Testing {router.pathname}</div>;
};

export default ContactPerson;
