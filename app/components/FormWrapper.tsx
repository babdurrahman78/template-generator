import { IJadwalHarian } from "../interfaces";
import Form from "./form";

interface IFormWrapperProps {
  data: IJadwalHarian;
}

const FormWrapper = ({ data: { PESAN_9, PESAN_10 } }: IFormWrapperProps) => {
  return (
    <div className="rounded-md border border-white">
      <p>PESAN 9</p>
      {<Form data={PESAN_9!} />}
    </div>
  );
};

export default FormWrapper;
