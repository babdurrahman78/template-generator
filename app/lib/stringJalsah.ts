import { JALSAH } from "../constant";
import { IJadwal } from "../interfaces";

const stringJalsah = (jalsah?: IJadwal) => {
  if (!jalsah) {
    return;
  }

  const hijri = new Intl.DateTimeFormat("in-u-ca-islamic-nu-latn", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(Date.now());

  const gregorian = new Intl.DateTimeFormat("in", {
    day: "numeric",
    month: "long",
    weekday: "long",
    year: "numeric",
  }).format(Date.now());

  const isTasmi =
    jalsah.JALSAH.nama === JALSAH.TASMI_AKH.nama ||
    jalsah.JALSAH.nama === JALSAH.TASMI_IKH.nama;

  return `*${jalsah.JALSAH.nama}*\n*${isTasmi ? "Oleh" : "Pemateri"}: ${
    isTasmi ? "" : jalsah.JALSAH.pengajar
  }*\n*Tanggal: ${`${gregorian}/ ${hijri}`}*\n*Waktu: ${
    jalsah.WAKTU
  }*\n*Tempat: ${jalsah.TEMPAT}*\n`;
};

export default stringJalsah;
