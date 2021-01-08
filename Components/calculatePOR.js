export default ({ rsp, packSize, cost, vatRate }) => {
  if (!packSize || !rsp) {
    return "";
  }

  const vat = cost * (vatRate / 100);
  const profit = rsp * packSize - (cost + vat);
  const profitPerPiece = profit / packSize;
  const por = (profitPerPiece / rsp) * 100;

  return isNaN(por) ? "" : por.toFixed(2);
};
