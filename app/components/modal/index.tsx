import React, { FormEvent, useEffect, useState } from "react";
import axios from "../service/api";
import InputModal from "./inputModal";
import SelectModal from "./selectModal";
import ButtonModal from "./buttonModal";
import { getGroupsS, startLoading } from "../redux/studentSlice";
import ProductService from "../redux/requests";
import { useDispatch, useSelector } from "react-redux";

type Props = {
  onWindow: boolean;
  closeWindow: any;
};

export default function Modal({ onWindow, closeWindow }: Props) {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [groupName, setGroupName] = useState<string>("");
  const [sum, setSum] = useState<string>("");
  const [refresh, setRefresh] = useState<string>("");

  const dispatch = useDispatch();
  const { groupData } = useSelector((state: any) => state.student);

  const userData = {
    firstName,
    lastName,
    groupId: groupName,
    sum,
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      dispatch(startLoading());
      const data = await ProductService.postStudentsReq(userData);
      setRefresh(data);
      closeWindow();
    } catch (error) {
      console.log(error);
    }
  };

  const getGroupHandler = async () => {
    try {
      dispatch(startLoading());
      const data = await ProductService.getGroupsReq();
      dispatch(getGroupsS(data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getGroupHandler();
  }, [refresh]);

  let theme = window.localStorage.getItem("darkMode");

  return (
    <div
      className={`${
        onWindow
          ? "w-full h-full flex justify-center backdrop-blur-sm items-center absolute uppercase z-10 top-0 left-0"
          : "hidden"
      }`}
    >
      <form
        className={`${
          theme === "false"
            ? "w-auto flex flex-col bg-slate-900 gap-3 h-auto z-10 border p-3 rounded-md"
            : "w-auto flex flex-col bg-slate-50 gap-3 h-auto z-10 border p-3 rounded-md"
        }`}
      >
        <div className="grid grid-cols-2 gap-4">
          <InputModal
            labelInp="ism"
            setStateInp={setFirstName}
            typeInp="text"
          />
          <InputModal
            labelInp="familya"
            setStateInp={setLastName}
            typeInp="text"
          />
          <SelectModal
            labelInp="guruh"
            setStateInp={setGroupName}
            dataOption={groupData}
            stateInp={groupName}
          />
          <InputModal labelInp="sum" setStateInp={setSum} typeInp="text" />
        </div>
        <div className="flex justify-between items-center ">
          <ButtonModal
            labelInp="bekor qilish"
            btnColor="red"
            btnType="submit"
            onFunction={closeWindow}
          />
          <ButtonModal
            labelInp="Qoshish"
            btnColor="green"
            btnType="submit"
            onFunction={handleSubmit}
          />
        </div>
      </form>
    </div>
  );
}
