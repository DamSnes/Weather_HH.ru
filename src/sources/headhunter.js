import axios from "axios";
import { BASE_URL } from "../constants/headhunter";

export const getVacancies = async () => {
  const { data } = await axios.get(`${BASE_URL}/vacancies`);
  return data;
};

export const getVacancyInfo = async id => {
  const { data } = await axios.get(`${BASE_URL}/vacancies/${id}`);
  return data;
};
