import axoisBase from "./axiosBase";

const endpoint = "/presents";

async function getPresentComment(params) {
  try {
    const response = await axoisBase.get(`${endpoint}`, { params });
    return response;
  } catch (e) {
    console.error("getPresentComment", e);
    throw new Error(e?.response?.data?.message);
  }
}

async function updatePresentComment(data) {
  try {
    const response = await axoisBase.put(`${endpoint}`, data);
    return response;
  } catch (e) {
    console.error("updatePresentComment", e);
    throw new Error(e?.response?.data?.message);
  }
}

export { getPresentComment, updatePresentComment };
