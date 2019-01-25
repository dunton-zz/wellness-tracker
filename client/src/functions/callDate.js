function callDate() {
  const date = new Date();
  const year = date.getFullYear();
  const days = date.getDate();
  const month = date.getMonth() + 1;
  return `${month}/${days}/${year}`;
}

export default callDate;
