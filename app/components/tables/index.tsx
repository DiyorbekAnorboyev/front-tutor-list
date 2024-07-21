"use client";
import sumToFormat from "../service/essentialFunc";
import axios from "../service/api";
import { useEffect, useState } from "react";
type Props = {
  dataHead: string[];
  dataBody: any;
  id: any;
};

const Tables: React.FC<Props> = ({ dataHead, dataBody }) => {
  const data: string[] = ["Ism", "Familya", "So'm", "Guruh"];
  const [groupData, setGroupData] = useState<string[]>([]);

  const getGroups = async (id: any) => {
    try {
      const response = await axios.get(`/Group/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  // getGroups();

  // console.log(dataBody);
  // console.log(groupData);

  // function formatGroup(groupId: string) {
  //   const data = groupData.find((e: any) => e._id === groupId);
  //   return data.groupName;
  // }

  // const id: string = "6699083e1566d1db770b9e5d";
  // console.log(getGroups(id));

  return (
    <div className="w-full absolute h-table-scroll border no-scroll rounded-md overflow-y-scroll touch-pan-y   ">
      <table className=" w-full  rounded-md relative ">
        <thead className="rounded-md sticky top-0  w-full bg-violet-500">
          <tr className="w-full">
            {dataHead
              ? dataHead.map((e: any) => (
                  <>
                    <th className="border ">{e._id}</th>
                  </>
                ))
              : data.map((e) => (
                  <>
                    <th className="border ">{e}</th>
                  </>
                ))}
          </tr>
        </thead>
        <tbody className="border ">
          {dataBody
            ? dataBody.map((e: any, idx: any) => (
                <>
                  <tr key={idx} className="border capitalize">
                    <td className="border ">{e.firstName}</td>
                    <td className="border ">{e.lastName}</td>
                    <td className="border ">{sumToFormat(e.paid.sum)}</td>
                    <td className="border ">{e.existGroup.groupId}</td>
                    {/* <td className="border ">{e.existGroup.groupDate}</td> */}
                  </tr>
                </>
              ))
            : data.map((e) => (
                <>
                  <td className="border ">{e}</td>
                </>
              ))}

          {/* <tr className="border">
            <td className="border">Diyorbek Anorboyev</td>
            <td className="border">Beginer</td>
            <td className="border">14.30</td>
          </tr><tr className="border">
            <td className="border">Diyorbek Anorboyev</td>
            <td className="border">Beginer</td>
            <td className="border">14.30</td>
          </tr><tr className="border">
            <td className="border">Diyorbek Anorboyev</td>
            <td className="border">Beginer</td>
            <td className="border">14.30</td>
          </tr><tr className="border">
            <td className="border">Diyorbek Anorboyev</td>
            <td className="border">Beginer</td>
            <td className="border">14.30</td>
          </tr><tr className="border">
            <td className="border">Diyorbek Anorboyev</td>
            <td className="border">Beginer</td>
            <td className="border">14.30</td>
          </tr><tr className="border">
            <td className="border">Diyorbek Anorboyev</td>
            <td className="border">Beginer</td>
            <td className="border">14.30</td>
          </tr><tr className="border">
            <td className="border">Diyorbek Anorboyev</td>
            <td className="border">Beginer</td>
            <td className="border">14.30</td>
          </tr><tr className="border">
            <td className="border">Diyorbek Anorboyev</td>
            <td className="border">Beginer</td>
            <td className="border">14.30</td>
          </tr><tr className="border">
            <td className="border">Diyorbek Anorboyev</td>
            <td className="border">Beginer</td>
            <td className="border">14.30</td>
          </tr><tr className="border">
            <td className="border">Diyorbek Anorboyev</td>
            <td className="border">Beginer</td>
            <td className="border">14.30</td>
          </tr><tr className="border">
            <td className="border">Diyorbek Anorboyev</td>
            <td className="border">Beginer</td>
            <td className="border">14.30</td>
          </tr><tr className="border">
            <td className="border">Diyorbek Anorboyev</td>
            <td className="border">Beginer</td>
            <td className="border">14.30</td>
          </tr><tr className="border">
            <td className="border">Diyorbek Anorboyev</td>
            <td className="border">Beginer</td>
            <td className="border">14.30</td>
          </tr><tr className="border">
            <td className="border">Diyorbek Anorboyev</td>
            <td className="border">Beginer</td>
            <td className="border">14.30</td>
          </tr><tr className="border">
            <td className="border">Diyorbek Anorboyev</td>
            <td className="border">Beginer</td>
            <td className="border">14.30</td>
          </tr><tr className="border">
            <td className="border">Diyorbek Anorboyev</td>
            <td className="border">Beginer</td>
            <td className="border">14.30</td>
          </tr><tr className="border">
            <td className="border">Diyorbek Anorboyev</td>
            <td className="border">Beginer</td>
            <td className="border">14.30</td>
          </tr><tr className="border">
            <td className="border">Diyorbek Anorboyev</td>
            <td className="border">Beginer</td>
            <td className="border">14.30</td>
          </tr><tr className="border">
            <td className="border">Diyorbek Anorboyev</td>
            <td className="border">Beginer</td>
            <td className="border">14.30</td>
          </tr><tr className="border">
            <td className="border">Diyorbek Anorboyev</td>
            <td className="border">Beginer</td>
            <td className="border">14.30</td>
          </tr><tr className="border">
            <td className="border">Diyorbek Anorboyev</td>
            <td className="border">Beginer</td>
            <td className="border">14.30</td>
          </tr><tr className="border">
            <td className="border">Diyorbek Anorboyev</td>
            <td className="border">Beginer</td>
            <td className="border">14.30</td>
          </tr><tr className="border">
            <td className="border">Diyorbek Anorboyev</td>
            <td className="border">Beginer</td>
            <td className="border">14.30</td>
          </tr><tr className="border">
            <td className="border">Diyorbek Anorboyev</td>
            <td className="border">Beginer</td>
            <td className="border">14.30</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default Tables;
