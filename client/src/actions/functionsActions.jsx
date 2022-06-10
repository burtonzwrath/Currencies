export function hideTicket(item, setSelectValue) {
  const rowToHide = document.getElementById(item.ticker);
  rowToHide.style.display = "none";
  setSelectValue("none");
}

export function showTicket(getValue, setSelectValue) {
  const findedTicker = document.getElementById(getValue);
  findedTicker.style.display = "none" ? "initial" : "initial";
  setSelectValue(getValue);
}
