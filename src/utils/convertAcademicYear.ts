export default function convertAcademicYear(year: number) {
  switch (year) {
    case 1:
      return "Freshman";
    case 2:
      return "Sophomore";
    case 3:
      return "Junior";
    case 4:
      return "Senior";
    default:
      return "Other";
  }
}
