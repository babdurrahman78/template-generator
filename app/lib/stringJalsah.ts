import { IJadwal, JALSAH } from "../constant";

const stringJalsah = (jalsah?: IJadwal) => {
  if (!jalsah) {
    return;
  }

  const isTasmi =
    jalsah.JALSAH.nama === JALSAH.TASMI_AKH.nama ||
    jalsah.JALSAH.nama === JALSAH.TASMI_IKH.nama;

  return `${jalsah.JALSAH.nama}\n${isTasmi ? "Oleh" : "Pemateri"}: ${
    isTasmi ? "" : jalsah.JALSAH.pengajar
  }\nTanggal: \nwaktu: 20.00 - 21.00 WIB\nTempat: ${jalsah.TEMPAT}\n`;
};

export default stringJalsah;
