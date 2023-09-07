import { JALSAH } from "../constant";
import { IJadwal } from "../interfaces";

const stringJalsah = (waktu: "MALAM" | "PAGI", jalsah?: IJadwal) => {
  if (!jalsah) {
    return;
  }

  const date = new Date();
  const tomorrow = new Date(new Date().setDate(date.getDate() + 1));

  console.log({
    date,
    tomorrow,
  });

  const hijri = new Intl.DateTimeFormat("in-u-ca-islamic-nu-latn", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);

  const gregorian = new Intl.DateTimeFormat("in", {
    day: "numeric",
    month: "long",
    weekday: "long",
    year: "numeric",
  }).format(date);

  const gregorianTomorrow = new Intl.DateTimeFormat("in", {
    day: "numeric",
    month: "long",
    weekday: "long",
    year: "numeric",
  }).format(tomorrow);

  const isTasmi =
    jalsah.JALSAH.nama === JALSAH.TASMI_AKH.nama ||
    jalsah.JALSAH.nama === JALSAH.TASMI_IKH.nama;

  return `*${jalsah.JALSAH.nama}*\n*${isTasmi ? "Oleh" : "Pemateri"}: ${
    isTasmi ? "" : jalsah.JALSAH.pengajar
  }*\n*Tanggal: ${
    waktu === "MALAM"
      ? `${gregorian}/ ${hijri}`
      : `${gregorianTomorrow}/ ${hijri}`
  }*\n*Waktu: ${jalsah.WAKTU}*\n*Tempat: ${jalsah.TEMPAT}*\n`;
};

export default stringJalsah;
