import { baseUrl } from "./url";

export const getHome = async () => {
    try {
      const res = await baseUrl.get(`/HomeData`);
      return res.data;
    } catch (error: any) {
      return {
        status: error.response.status,
        message: error.response.data.message,
      };
    }
  };