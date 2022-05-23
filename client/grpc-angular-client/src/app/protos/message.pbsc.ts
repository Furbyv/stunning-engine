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
import * as thisProto from './message.pb';
import { GRPC_MESSAGING_CLIENT_SETTINGS } from './message.pbconf';
/**
 * Service client implementation for message.Messaging
 */
@Injectable({ providedIn: 'any' })
export class MessagingClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Server streaming: /message.Messaging/ConnectToChat
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Message>>
     */
    connectToChat: (
      requestData: thisProto.Connect,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Message>> => {
      return this.handler.handle({
        type: GrpcCallType.serverStream,
        client: this.client,
        path: '/message.Messaging/ConnectToChat',
        requestData,
        requestMetadata,
        requestClass: thisProto.Connect,
        responseClass: thisProto.Message
      });
    },
    /**
     * Unary call: /message.Messaging/SendMessage
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Status>>
     */
    sendMessage: (
      requestData: thisProto.Message,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Status>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/message.Messaging/SendMessage',
        requestData,
        requestMetadata,
        requestClass: thisProto.Message,
        responseClass: thisProto.Status
      });
    },
    /**
     * Unary call: /message.Messaging/Unsubscribe
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Status>>
     */
    unsubscribe: (
      requestData: thisProto.Connect,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Status>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/message.Messaging/Unsubscribe',
        requestData,
        requestMetadata,
        requestClass: thisProto.Connect,
        responseClass: thisProto.Status
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_MESSAGING_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('message.Messaging', settings);
  }

  /**
   * Server streaming @/message.Messaging/ConnectToChat
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Message>
   */
  connectToChat(
    requestData: thisProto.Connect,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Message> {
    return this.$raw
      .connectToChat(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/message.Messaging/SendMessage
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Status>
   */
  sendMessage(
    requestData: thisProto.Message,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Status> {
    return this.$raw
      .sendMessage(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/message.Messaging/Unsubscribe
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Status>
   */
  unsubscribe(
    requestData: thisProto.Connect,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Status> {
    return this.$raw
      .unsubscribe(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
