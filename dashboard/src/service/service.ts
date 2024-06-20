import { http } from "@/utils/http";

import type { SerivceListType } from "@/interface/service";
import { SERVICE_PLUS_PREFIX, VERSION } from "./constant";

export const fetchServiceDetail = async (
  applicationName: string,
  applicationIp: string,
  applicationPort: string
) => {
  return http<SerivceListType>(
    `${SERVICE_PLUS_PREFIX}/${VERSION}/service/list?applicationName=${applicationName}&applicationIp=${applicationIp}&applicationPort=${applicationPort}`
  );
};
