import { useContext, useEffect } from "react";
import { IAngkatan, IJadwal, IJalsah, IWaktu } from "../interfaces";
import { JadwalContext } from "../context";
import {
  PENGAJAR,
  WAKTU,
  NAMA_JALSAH,
  TEMPAT as NAMA_TEMPAT,
  THULLAB,
  JUZ,
} from "../constant";

interface IFormProps {
  angkatan: IAngkatan;
  jadwal: IJadwal;
}

const Form = ({ jadwal, angkatan }: IFormProps) => {
  const { data, setData } = useContext(JadwalContext);
  if (!jadwal) return null;

  const { JALSAH, TEMPAT } = jadwal;

  const handleEdit = (
    field: "JALSAH" | "WAKTU" | "TEMPAT" | "TANGGAL",
    value: any,
    subJalsah?: "nama" | "pengajar" | "oleh" | "juz" | null,
    subWaktu?: "mulai" | "akhir"
  ) => {
    const tempData = { ...data };

    const tempAngkatan =
      tempData[jadwal.WAKTU.isMalam ? "malam" : "pagi"][angkatan];
    if (tempAngkatan) {
      if (field === "JALSAH") {
        if (subJalsah) {
          tempData[jadwal.WAKTU.isMalam ? "malam" : "pagi"][angkatan]![field][
            subJalsah
          ] = value;
        }
      } else if (field === "WAKTU") {
        tempData[jadwal.WAKTU.isMalam ? "malam" : "pagi"][angkatan]![field][
          subWaktu!
        ] = value;
      } else if (field === "TANGGAL") {
        tempData[jadwal.WAKTU.isMalam ? "malam" : "pagi"][angkatan]![field] =
          new Date(value);
      } else {
        tempData[jadwal.WAKTU.isMalam ? "malam" : "pagi"][angkatan]![field] =
          value;
      }
    }

    setData({ ...tempData });
  };

  const handleDate = (e: Date) => {
    const monthPlus = e.getMonth() + 1;
    const month = monthPlus % 10 === monthPlus ? `0${monthPlus}` : monthPlus;
    const date =
      e.getDate() % 10 === e.getDate() ? `0${e.getDate()}` : e.getDate();
    const value = `${e.getFullYear()}-${month}-${date}`;
    return value;
  };

  const isTasmi =
    jadwal.JALSAH.nama === NAMA_JALSAH.TASMI_AKH.nama ||
    jadwal.JALSAH.nama === NAMA_JALSAH.TASMI_IKH.nama;

  return (
    <div className="grid gap-6 p-3 rounded-md border border-white mb-6 md:grid-cols-2">
      <div>
        <label
          htmlFor="jalsah"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Jalsah
        </label>
        <select
          id="jalsah"
          value={JALSAH.nama}
          onChange={(e) => handleEdit("JALSAH", e.target.value, "nama")}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {Object.values(NAMA_JALSAH).map((item, index) => (
            <option value={item.nama} key={index}>
              {item.nama}
            </option>
          ))}
        </select>
      </div>
      {isTasmi ? (
        <div>
          <label
            htmlFor="oleh"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Oleh
          </label>
          <select
            id="jalsah"
            value={JALSAH.oleh}
            onChange={(e) => handleEdit("JALSAH", e.target.value, "oleh")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {THULLAB.map((item, index) => (
              <option value={item.nama} key={index}>
                {item.nama}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <div>
          <label
            htmlFor="pemateri"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Pemateri
          </label>
          <select
            id="pengajar"
            value={JALSAH.pengajar || ""}
            onChange={(e) => handleEdit("JALSAH", e.target.value, "pengajar")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {Object.values(PENGAJAR).map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
        </div>
      )}
      {isTasmi && (
        <div>
          <label
            htmlFor="juz"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Juz
          </label>
          <select
            id="juz"
            value={JALSAH?.juz}
            onChange={(e) => handleEdit("JALSAH", e.target.value, "juz")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {JUZ.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
        </div>
      )}
      <div>
        <label
          htmlFor="tanggal"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Tanggal
        </label>
        <input
          type="date"
          id="tanggal"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => handleEdit("TANGGAL", e.target.value)}
          value={handleDate(jadwal?.TANGGAL)}
          required
        />
      </div>
      <div>
        <label
          htmlFor="waktu"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Waktu
        </label>
        <div className="grid gap-6 md:grid-cols-2">
          <input
            type="time"
            id="waktuAwal"
            value={jadwal.WAKTU.mulai}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            onChange={(e) => handleEdit("WAKTU", e.target.value, null, "mulai")}
          />
          <input
            type="time"
            id="waktuAkhir"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            value={jadwal.WAKTU.akhir}
            onChange={(e) => handleEdit("WAKTU", e.target.value, null, "akhir")}
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="tempat"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Tempat
        </label>
        <select
          id="tempat"
          value={TEMPAT}
          onChange={(e) => handleEdit("TEMPAT", e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {Object.values(NAMA_TEMPAT).map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label
          htmlFor="url"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          URL
        </label>
        <select
          id="url"
          value={TEMPAT}
          onChange={(e) => handleEdit("TEMPAT", e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {Object.values(NAMA_TEMPAT).map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Form;
