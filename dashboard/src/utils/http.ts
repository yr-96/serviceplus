const defaultOptions = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

// 请求拦截器
function requestInterceptor(config: any) {
  // 在这里您可以对请求配置进行处理，例如添加headers
  const modifiedConfig = {
    ...defaultOptions,
    ...config,
  };
  // 返回处理后的配置
  return modifiedConfig;
}

// 响应拦截器
async function responseInterceptor(response: any) {
  try {
    if (response.ok) {
      const data = await response.json();
      if (data.code === 0) {
        return data.data;
      } else if (data.code === 200) {
        return data.result;
      } else {
        throw new Error(data.message);
      }
    } else {
      throw new Error(response.statusText);
    }
  } catch (error: any) {
    console.log("error", error);
    throw new Error(error);
  }
}

export const http = async <T>(url: string, options?: any): Promise<T> => {
  const modifiedConfig = requestInterceptor(options);

  return fetch(url, modifiedConfig).then((response) => {
    return responseInterceptor(response).catch((error) => {
      throw new Error(error);
    });
  });
};
