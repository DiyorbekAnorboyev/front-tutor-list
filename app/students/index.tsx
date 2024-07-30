"use client";
import { useEffect, useState } from "react";
import Tables from "../components/tables";
import SearchHeaders from "../components/searchHeaders";
import axios from "../components/service/api";
import ProductService from "../components/redux/requests";
import { useDispatch, useSelector } from "react-redux";
import { getStudentsS } from "../components/redux/studentSlice";

export default function Students() {
  // const [deleteshow, setdeleteshow] = useState(false);
  // const [data, setdata] = useState([]);

  // const onDelete = () => {
  //   setdeleteshow(!deleteshow ? true : false);
  // };

  const dispatch = useDispatch();
  const { studentData } = useSelector((state: any) => state.student);

  const getTeacherHandler = async () => {
    try {
      const data = await ProductService.getStudentsReq();
      dispatch(getStudentsS(data));
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTeacherHandler();
  }, []);

  const modalInput: any = ["Ism", "Familya", "Guruh nomi", "So'm"];
  const data: string[] = ["Ism", "Familya", "So'm", "Guruh"];

  return (
    <div className="relative h-full">
      <SearchHeaders modalInput={modalInput} />
      <Tables dataHead={data} dataBody={studentData} />
    </div>
  );
}
