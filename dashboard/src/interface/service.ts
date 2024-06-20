export interface ParamsInfoType {
  paramName: string;
  paramType: string;
}

export interface ServiceItemType {
  className: string;
  methodDesc: string;
  methodName: string;
  paramInfos: ParamsInfoType[];
  returnName: string;
  returnType: string;
  simpleClassName: string;
}
