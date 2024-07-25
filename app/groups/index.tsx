"use client";
import { useEffect } from "react";
import SearchHeaders from "../components/searchHeaders";
import Tables from "../components/tables";
import { useDispatch, useSelector } from "react-redux";
import ProductService from "../components/redux/requests/index";
import { getGroupsS } from "../components/redux/studentSlice";
export default function Groups() {
  const dispatch = useDispatch();
  const { groupData } = useSelector((state: any) => state.student);

  const getGroupHandler = async () => {
    try {
      const data = await ProductService.getGroupsReq();
      dispatch(getGroupsS(data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getGroupHandler();
  }, []);

  return (
    <>
      <div className="relative h-full">
        <SearchHeaders />
        <Tables dataBody={groupData} />
      </div>
    </>
  );
}
