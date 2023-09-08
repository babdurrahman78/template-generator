import { useContext } from "react";
import { IJadwalHarian, IScheduler } from "../interfaces";
import Form from "./Form";
import { JadwalContext } from "../context";

// interface IFormWrapperProps {
//   data: IScheduler;
// }

const FormWrapper = () => {
  const { data } = useContext(JadwalContext);

  const { malam, pagi } = data;

  return (
    <div className="rounded-md border p-3 space-y-3 border-white">
      <p>PESAN 9</p>
      {<Form data={malam?.PESAN_9!} />}
      {<Form data={pagi?.PESAN_9!} />}

      <p>PESAN 10</p>
      {<Form data={malam?.PESAN_10!} />}
      {<Form data={pagi?.PESAN_10!} />}
    </div>
  );
};

export default FormWrapper;
