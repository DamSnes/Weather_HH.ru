import axios from "axios";
import {BASE_URL} from "../constants/headhunter";

export const getVacancies = async()=> {
    const { data } = await axios.get(`${BASE_URL}/vacancies`);
    return data;
}