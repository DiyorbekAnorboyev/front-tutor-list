type Props = {
  labelInp: string;
  btnColor: string;
  onFunction: any;
  btnType: any;
};

export default function ButtonModal({
  labelInp,
  btnColor,
  onFunction,
  btnType,
}: Props) {
  return (
    <button
      onClick={onFunction}
      className={`border-2 rounded-md p-1 uppercase hover:border-${btnColor}-700`}
      type={btnType ? btnType : "submit"}
    >
      {labelInp}
    </button>
  );
}
