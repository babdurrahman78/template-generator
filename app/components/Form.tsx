import { useContext, useEffect } from "react";
import { IJadwal, IWaktu } from "../interfaces";
import { JadwalContext } from "../context";

interface IFormProps {
  data: IJadwal;
}

const Form = ({ data }: IFormProps) => {
  const { setData } = useContext(JadwalContext);
  if (!data) return null;

  const { JALSAH, WAKTU, TEMPAT } = data;

  const handleEdit = () => {};

  return (
    <div className="grid gap-6 p-3 rounded-md border border-white mb-6 md:grid-cols-2">
      <div>
        <label
          htmlFor="jalsah"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Jalsah
        </label>
        <input
          type="text"
          id="jalsah"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Nama Jalsah"
          defaultValue={JALSAH?.nama}
          required
        />
      </div>
      <div>
        <label
          htmlFor="pemateri"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Pemateri
        </label>
        <input
          type="text"
          id="pemateri"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Doe"
          value={JALSAH.pengajar}
          required
        />
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
        <input
          type="text"
          id="tempat"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="PESAN BISA"
          required
          value={TEMPAT}
        />
      </div>
    </div>
  );
};

export default Form;
