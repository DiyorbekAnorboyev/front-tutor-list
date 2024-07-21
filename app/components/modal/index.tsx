import React, { FormEvent, useEffect, useState } from "react";
import axios from "../service/api";

type Props = {
  onWindow: boolean;
  closeWindow: any;
  dataInput: any;
};

export default function Modal({ onWindow, closeWindow, dataInput }: Props) {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [groupName, setGroupName] = useState<string>("");
  const [sum, setSum] = useState<string>("");
  const [group, setGroup] = useState<string[]>([]);

  const userData = {
    firstName,
    lastName,
    groupId: "668665e2bcbfb0bc565aa554",
    groupName,
    sum,
  };

  console.log(groupName);

  const handleSubmit = async (e: any) => {
    try {
      await axios
        .post("/Student", userData)
        .then(() => closeWindow())
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  const getGroups = async () => {
    await axios
      .get("/Group")
      .then((e) => setGroup(e.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getGroups();
  }, []);

  console.log(group);

  let theme = window.localStorage.getItem("darkMode");

  return (
    <div
      className={`${
        onWindow
          ? "w-full h-full flex justify-center backdrop-blur-sm items-center absolute uppercase z-10 top-0 left-0"
          : "hidden"
      }`}
    >
      <div
        className={`${
          theme === "false"
            ? "w-auto flex flex-col bg-slate-900 gap-3 h-auto z-10 border p-3 rounded-md"
            : "w-auto flex flex-col bg-slate-50 gap-3 h-auto z-10 border p-3 rounded-md"
        }`}
      >
        <div className="grid grid-cols-2 gap-4">
          {/* {dataInput.length > 0
            ? dataInput.map((e: any, idx: any) => (
                <div key={idx}>
                  <label className=" text-sm font-medium leading-6 ">{e}</label>
                  <div>
                    <input
                      onChange={(e) => sumToFormat(e.target.value)}
                      placeholder={e}
                      type="text"
                      required
                      className=" w-full rounded-md border-0 py-1.5 px-1  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              ))
            : ""} */}
          <div>
            <label className=" text-sm font-medium leading-6 ">Ism</label>
            <div>
              <input
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Ism"
                type="text"
                required
                className=" w-full rounded-md border-0 placeholder:lowercase py-1.5 px-1  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label className=" text-sm font-medium leading-6 ">familya</label>
            <div>
              <input
                onChange={(e) => setLastName(e.target.value)}
                placeholder="familya"
                type="text"
                required
                className=" w-full rounded-md border-0 placeholder:lowercase py-1.5 px-1  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label className=" text-sm font-medium leading-6 ">guruh</label>
            <div>
              <select
                onChange={(e) => setGroupName(e.target.value)}
                value={groupName}
                className={`${
                  theme === "false"
                    ? "w-full rounded-md border-0 placeholder:lowercase py-1.5 px-1  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-slate-900"
                    : "w-full rounded-md border-0 placeholder:lowercase py-1.5 px-1  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                }`}
              >
                <option>Guruh tanlsh</option>
                {group.map((e: any, idx: number) => (
                  <option className="capitalize" key={idx} value={e.groupId}>
                    {e._id}
                  </option>
                ))}
              </select>
            </div>

            {/* <div>
              <input
                onChange={(e) => setGroupName(e.target.value)}
                placeholder="guruh"
                type="text"
                required
                className=" w-full rounded-md border-0 placeholder:lowercase py-1.5 px-1  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div> */}
          </div>
          <div>
            <label className=" text-sm font-medium leading-6 ">so`m</label>
            <div>
              <input
                onChange={(e) => setSum(e.target.value)}
                placeholder="so'm"
                type="text"
                required
                className=" w-full rounded-md border-0 placeholder:lowercase py-1.5 px-1  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center ">
          <button
            onClick={closeWindow}
            className="border-2 rounded-md p-1 uppercase hover:border-red-700"
          >
            bekor qilish
          </button>
          <button
            onClick={handleSubmit}
            type="submit"
            className=" rounded-md p-1 uppercase hover:border-green-700 border-2"
          >
            Qoshish
          </button>
        </div>
      </div>
    </div>
  );
}
