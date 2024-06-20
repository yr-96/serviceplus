import { http } from "@/utils/http";

import type { AppItemType } from "@/interface/app";
import { SERVICE_PLUS_PREFIX, VERSION } from "./constant";

export const fetchAppList = () => {
  return http<AppItemType[]>(
    `${SERVICE_PLUS_PREFIX}/${VERSION}/application/list`
  );
};
