type Props = {
  labelInp: string;
  stateInp: any;
  setStateInp: any;
  dataOption: any;
};

export default function SelectModal({
  labelInp,
  stateInp,
  setStateInp,
  dataOption,
}: Props) {
  let theme = window.localStorage.getItem("darkMode");

  return (
    <div>
      <label className="capitalize text-sm font-medium leading-6 ">
        {labelInp}
      </label>
      <div>
        <select
          onChange={(e) => setStateInp(e.target.value)}
          value={stateInp}
          required
          className={`${
            theme === "false"
              ? "w-full rounded-md border-0 placeholder:lowercase py-1.5 px-1  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-slate-900"
              : "w-full rounded-md border-0 placeholder:lowercase py-1.5 px-1  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
          }`}
        >
          <option>Guruh tanlsh</option>
          {dataOption.map((e: any, idx: number) => (
            <option className="capitalize" key={idx} value={e.groupId}>
              {e._id}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
