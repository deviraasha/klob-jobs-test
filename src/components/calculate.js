export default function Calculate(date1, date2) {
  date1 = new Date(date1);
  date2 = new Date(date2);

  const date1_time_stamp = date1.getTime();
  const date2_time_stamp = date2.getTime();

  let calc;

  if (date1_time_stamp > date2_time_stamp) {
    calc = new Date(date1_time_stamp - date2_time_stamp);
  } else {
    calc = new Date(date2_time_stamp - date1_time_stamp);
  }

  const calcFormatTmp =
    calc.getDate() + "-" + (calc.getMonth() + 1) + "-" + calc.getFullYear();

  const calcFormat = calcFormatTmp.split("-");

  const hari = Number(Math.abs(calcFormat[0]) - 1);
  const bulan = Number(Math.abs(calcFormat[1]) - 1);
  const tahun = Number(Math.abs(calcFormat[2]) - 1970);

  const thnTxt = ["Tahun", "Tahun"];
  const blnTxt = ["Bulan", "Bulan"];
  const hariTxt = ["Hari", "Hari"];

  const result =
    (tahun === 1
      ? tahun + " " + thnTxt[0] + " "
      : tahun > 1
      ? tahun + " " + thnTxt[1] + " "
      : "") +
    (bulan === 1
      ? bulan + " " + blnTxt[0] + " "
      : bulan > 1
      ? bulan + " " + blnTxt[1] + " "
      : "") +
    (hari === 1
      ? hari + " " + hariTxt[0] + " "
      : hari > 1
      ? hari + " " + hariTxt[1] + " "
      : "");
  return result.trim() ? result.trim() + " yang lalu" : "Hari ini";
}
