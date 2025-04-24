export function formatDate(date: Date) {
  const day = String(date.getDate()).padStart(2, "0"); // Ensures 2 digits for day
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Ensures 2 digits for month
  const year = date.getFullYear();

  return `${day} / ${month} / ${year}`;
}
export function formatExpiryFromNumber(inputStr: string) {
  if (inputStr.length == 4 && !inputStr.includes("/")) {
    return `${inputStr.slice(0, 2)}/${inputStr.slice(2, 4)}`;
  }
}
export function formateCardNumber(inputStr: string) {
  // const inputStr = input.toString();
  const resArr: string[] = [];
  for (let i = 0; i < inputStr.length; i++) {
    if (i % 4) {
      resArr.push(inputStr[i]);
    } else {
      resArr.push(" ");
      resArr.push(inputStr[i]);
    }
  }
  return resArr.join("");
}
