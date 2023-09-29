import { IJadwal } from "../interfaces";

const stringJalsah = (
  waktu: "MALAM" | "PAGI",
  isTasmi: boolean,
  jalsah?: IJadwal
) => {
  if (!jalsah) {
    return;
  }

  const tomorrow = new Date(new Date().setDate(jalsah.TANGGAL.getDate() + 1));

  const hijriDate = jalsah.WAKTU.isMalam
    ? new Date(new Date().setDate(jalsah.TANGGAL.getDate() + 1))
    : jalsah.TANGGAL;

  const hijri = new Intl.DateTimeFormat("in-u-ca-islamic-nu-latn", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(hijriDate);

  const gregorian = new Intl.DateTimeFormat("in", {
    day: "numeric",
    month: "long",
    weekday: "long",
    year: "numeric",
  }).format(jalsah.TANGGAL);

  return `*${jalsah.JALSAH.nama}*\n*${isTasmi ? "Oleh" : "Pemateri"}: ${isTasmi ? jalsah.JALSAH.oleh || "" : jalsah.JALSAH.pengajar
    }*\n${isTasmi ? `*Juz Bacaan: Juz ${jalsah.JALSAH.juz || ""}*\n` : ""}*Tanggal: ${`${gregorian}/ ${hijri}`}*\n*Waktu: ${jalsah.WAKTU.mulai} - ${jalsah.WAKTU.akhir
    } WIB*\n*Tempat: ${jalsah.TEMPAT}*\n`;
};

export default stringJalsah;
