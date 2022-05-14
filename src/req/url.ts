import axios from "axios";

export const baseUrl = axios.create({
    baseURL:
      "https://api.kontenbase.com/query/api/v1/56f20f52-29f2-437d-abde-de060837d616",
  });