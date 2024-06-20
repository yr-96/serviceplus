import { http } from "@/utils/http";

import type { ServiceItemType } from "@/interface/service";
import { SERVICE_PLUS_PREFIX, VERSION } from "./constant";

export const fetchServiceDetail = async (
  applicationName: string,
  applicationIp: string,
  applicationPort: string
) => {
  return http<ServiceItemType[]>(
    `${SERVICE_PLUS_PREFIX}/${VERSION}/service/list?applicationName=${applicationName}&applicationIp=${applicationIp}&applicationPort=${applicationPort}`
  );
};
