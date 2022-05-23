/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import {
  GrpcCallType,
  GrpcClient,
  GrpcClientFactory,
  GrpcEvent,
  GrpcMetadata
} from '@ngx-grpc/common';
import {
  GRPC_CLIENT_FACTORY,
  GrpcHandler,
  takeMessages,
  throwStatusErrors
} from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './calculate.pb';
import { GRPC_CALCULATING_CLIENT_SETTINGS } from './calculate.pbconf';
/**
 * Service client implementation for calculate.Calculating
 */
@Injectable({ providedIn: 'any' })
export class CalculatingClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Server streaming: /calculate.Calculating/Calculate
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Progress>>
     */
    calculate: (
      requestData: thisProto.Calculation,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Progress>> => {
      return this.handler.handle({
        type: GrpcCallType.serverStream,
        client: this.client,
        path: '/calculate.Calculating/Calculate',
        requestData,
        requestMetadata,
        requestClass: thisProto.Calculation,
        responseClass: thisProto.Progress
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_CALCULATING_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('calculate.Calculating', settings);
  }

  /**
   * Server streaming @/calculate.Calculating/Calculate
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Progress>
   */
  calculate(
    requestData: thisProto.Calculation,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Progress> {
    return this.$raw
      .calculate(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
