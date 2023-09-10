import { useContext, useEffect } from "react";
import { IAngkatan, IJadwal, IJalsah, IWaktu } from "../interfaces";
import { JadwalContext } from "../context";
import {
  PENGAJAR,
  WAKTU,
  NAMA_JALSAH,
  TEMPAT as NAMA_TEMPAT,
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
    field: "JALSAH" | "WAKTU" | "TEMPAT",
    value: any,
    subfield?: "nama" | "pengajar"
  ) => {
    const tempData = { ...data };

    const tempAngkatan =
      tempData[jadwal.WAKTU === WAKTU.MLM ? "malam" : "pagi"][angkatan];

    if (tempAngkatan) {
      if (field === "JALSAH") {
        tempData[jadwal.WAKTU === WAKTU.MLM ? "malam" : "pagi"][angkatan]![
          field
        ][subfield!] = value;

        console.log(
          tempData[jadwal.WAKTU === WAKTU.MLM ? "malam" : "pagi"][angkatan]![
            field
          ][subfield!]
        );
      } else {
        tempData[jadwal.WAKTU === WAKTU.MLM ? "malam" : "pagi"][angkatan]![
          field
        ] = value;
      }
    }
    console.log(tempData);

    setData({ ...tempData });
  };

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
      <div>
        <label
          htmlFor="pemateri"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Pemateri
        </label>
        <select
          id="jalsah"
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
          placeholder="Flowbite"
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
        <input
          type="time"
          id="waktu"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div>
        <label
          htmlFor="tempat"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Tempat
        </label>
        <select
          id="jalsah"
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
          id="jalsah"
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
