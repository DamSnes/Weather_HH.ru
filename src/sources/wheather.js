import axios from "axios";
import { API_KEY, BASE_URL } from "../constants/wheather";

export const getWheatherData = async (city = "Kaluga") => {
  const api_url = `${BASE_URL}weather?q=${city}&appid=${API_KEY}&units=metric`;
  const { data } = await axios.get(api_url);
  return data;
};
