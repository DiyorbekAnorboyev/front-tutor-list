type Props = {
  labelInp: string;
  typeInp: string;
  setStateInp: any;
};

export default function InputModal({ labelInp, typeInp, setStateInp }: Props) {
  return (
    <div>
      <label className=" text-sm capitalize font-medium leading-6 ">
        {labelInp}
      </label>
      <div>
        <input
          onChange={(e) => setStateInp(e.target.value)}
          placeholder={labelInp ? labelInp : " "}
          type={typeInp ? typeInp : "text"}
          required
          className=" capitalize w-full rounded-md border-0 placeholder:lowercase py-1.5 px-1  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
}
