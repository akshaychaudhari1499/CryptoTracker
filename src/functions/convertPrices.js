export const convertNumbers = (number) => {
    console.log(number)
  const arr = number.toLocaleString().split(",");
  switch (arr.length) {
    case 5:
      return arr[0] + "." + arr[1].slice(0, 2) + "T";
      break;
    case 4:
      return arr[0] + "." + arr[1].slice(0, 2) + "B";
      break;
    case 3:
      return arr[0] + "." + arr[1].slice(0, 2) + "M";
      break;
    case 2:
      return arr[0] + "." + arr[1].slice(0, 2) + "K";
      break;
      default:
        return number.toLocaleString()
  }
  
};
