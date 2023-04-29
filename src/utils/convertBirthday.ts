export default function convertBirthday(birthday: Date) {
  birthday = new Date(
    birthday.getTime() + birthday.getTimezoneOffset() * 60000
  );
  return birthday.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });
}
