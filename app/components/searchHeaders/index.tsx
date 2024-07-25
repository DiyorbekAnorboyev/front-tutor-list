import { useState } from "react";
import Modal from "../modal";

type Props = {
  dataHead: string[];
  modalInput: string[];
};

const SearchHeaders: React.FC<Props> = ({ dataHead, modalInput }) => {
  if (dataHead === undefined) {
    dataHead = ["F.I.O"];
  }

  const [modal, setModal] = useState(false);

  const onModal = () => {
    setModal(modal ? false : true);
  };
  const offModal = (a: any) => {
    return a(false);
  };

  return (
    <div className="flex justify-between m-1">
      <div className="flex gap-3">
        {dataHead.map((e) => (
          <>
            <input
              type="text"
              className="border rounded-md p-1"
              placeholder={e}
            />
          </>
        ))}
      </div>

      <div className="w-auto flex justify-between gap-3">
        <button className="flex rounded-md p-1 bg-violet-500 font-serif uppercase items-center">
          <img src="https://img.icons8.com/?size=20&id=132&format=png&color=000000" />
          Qidirish
        </button>
        <button
          onClick={() => onModal()}
          className="flex rounded-md p-1 bg-violet-500 font-serif uppercase items-center"
        >
          + Qoshish
        </button>
      </div>

      <Modal
        onWindow={modal}
        closeWindow={() => offModal(setModal)}
        modalInput={modalInput}
      />
    </div>
  );
};

export default SearchHeaders;
