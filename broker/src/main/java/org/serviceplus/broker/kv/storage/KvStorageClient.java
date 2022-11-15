/*
 * Copyright 2022 service plus open source organization.
 *
 * Licensed under the Apache License,Version2.0(the"License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.serviceplus.broker.kv.storage;

import io.grpc.ManagedChannel;
import io.grpc.ManagedChannelBuilder;
import org.serviceplus.store.proto.KvServiceGrpc;
import org.serviceplus.store.proto.KvServiceOuterClass;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

/**
 * @author lixiaoshuang
 */
@Component
public class KvStorageClient {

    @Value("${serviceplus.storage.port:}")
    private int port;

    @Value("${serviceplus.storage.host:}")
    private String host;

    private ManagedChannel channel;
    private KvServiceGrpc.KvServiceBlockingStub kvServiceBlockingStub;

    @PostConstruct
    public void init() {
        //初始化连接
        channel = ManagedChannelBuilder.forAddress(host, port)
                .usePlaintext()
                .build();
        //初始化远程服务Stub
        kvServiceBlockingStub = KvServiceGrpc.newBlockingStub(channel);
    }

    /**
     * 添加kv
     *
     * @param key   key
     * @param value value
     * @return result
     */
    public boolean put(String key, String value) {
        KvServiceOuterClass.KvRequest kvRequest = KvServiceOuterClass.KvRequest.newBuilder().setKey(key).setValue(value).build();
        KvServiceOuterClass.KvResponse kvResponse = kvServiceBlockingStub.put(kvRequest);
        return Boolean.getBoolean(kvResponse.getDate());
    }

    /**
     * 获取kv
     *
     * @param key key
     * @return value
     */
    public String get(String key) {
        KvServiceOuterClass.KvRequest kvRequest = KvServiceOuterClass.KvRequest.newBuilder().setKey(key).build();
        KvServiceOuterClass.KvResponse kvResponse = kvServiceBlockingStub.get(kvRequest);
        return kvResponse.getDate();
    }
}
