import axios from "../../service/api";

const ProductService = {
  async getStudentsReq() {
    const data = await axios.get("/Student");
    return data.data;
  },
  async postStudentsReq(dataProps:any) {
    const data = await axios.post("/Student", dataProps);
    return data.data;
  },
  async getTeachersReq() {
    const data = await axios.get("/Teacher");
    return data.data;
  },
  async getGroupsReq() {
    const data = await axios.get("/Group");
    return data.data;
  },
};

export default ProductService;
