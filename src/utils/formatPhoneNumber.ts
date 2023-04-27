const formatPhoneNumber = (
    phoneNumber: string,
    previousPhoneNumber: string | undefined
  ) => {
    if (!phoneNumber) return phoneNumber;
    const currentValue = phoneNumber.replace(/[^\d]/g, "");
    const cvLength = currentValue.length;
  
    if (!previousPhoneNumber || phoneNumber.length > previousPhoneNumber.length) {
      if (cvLength < 4) return currentValue;
      if (cvLength < 7)
        return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3)}`;
      return `(${currentValue.slice(0, 3)}) ${currentValue.slice(
        3,
        6
      )}-${currentValue.slice(6, 10)}`;
    }
  };
  
  export default formatPhoneNumber;
  