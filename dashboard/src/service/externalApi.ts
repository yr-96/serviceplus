import { http } from "@/utils/http";
import { EXTERNAL_OIOWEB } from "./constant";

export const fetchEveryDaySentence = async () => {
  return await http<any>(`${EXTERNAL_OIOWEB}/common/yiyan`);
};
