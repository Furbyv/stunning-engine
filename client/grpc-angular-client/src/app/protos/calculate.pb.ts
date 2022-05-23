/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import {
  GrpcMessage,
  RecursivePartial,
  ToProtobufJSONOptions
} from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';

/**
 * Message implementation for calculate.Calculation
 */
export class Calculation implements GrpcMessage {
  static id = 'calculate.Calculation';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Calculation();
    Calculation.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Calculation) {
    _instance.taskSize = _instance.taskSize || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Calculation,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.taskSize = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    Calculation.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: Calculation,
    _writer: BinaryWriter
  ) {
    if (_instance.taskSize) {
      _writer.writeInt32(1, _instance.taskSize);
    }
  }

  private _taskSize?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Calculation to deeply clone from
   */
  constructor(_value?: RecursivePartial<Calculation.AsObject>) {
    _value = _value || {};
    this.taskSize = _value.taskSize;
    Calculation.refineValues(this);
  }
  get taskSize(): number | undefined {
    return this._taskSize;
  }
  set taskSize(value: number | undefined) {
    this._taskSize = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Calculation.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Calculation.AsObject {
    return {
      taskSize: this.taskSize
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): Calculation.AsProtobufJSON {
    return {
      taskSize: this.taskSize
    };
  }
}
export module Calculation {
  /**
   * Standard JavaScript object representation for Calculation
   */
  export interface AsObject {
    taskSize?: number;
  }

  /**
   * Protobuf JSON representation for Calculation
   */
  export interface AsProtobufJSON {
    taskSize?: number;
  }
}

/**
 * Message implementation for calculate.Progress
 */
export class Progress implements GrpcMessage {
  static id = 'calculate.Progress';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Progress();
    Progress.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Progress) {
    _instance.toDo = _instance.toDo || 0;
    _instance.finished = _instance.finished || 0;
    _instance.progress = _instance.progress || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Progress,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.toDo = _reader.readInt32();
          break;
        case 2:
          _instance.finished = _reader.readInt32();
          break;
        case 3:
          _instance.progress = _reader.readDouble();
          break;
        default:
          _reader.skipField();
      }
    }

    Progress.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Progress, _writer: BinaryWriter) {
    if (_instance.toDo) {
      _writer.writeInt32(1, _instance.toDo);
    }
    if (_instance.finished) {
      _writer.writeInt32(2, _instance.finished);
    }
    if (_instance.progress) {
      _writer.writeDouble(3, _instance.progress);
    }
  }

  private _toDo?: number;
  private _finished?: number;
  private _progress?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Progress to deeply clone from
   */
  constructor(_value?: RecursivePartial<Progress.AsObject>) {
    _value = _value || {};
    this.toDo = _value.toDo;
    this.finished = _value.finished;
    this.progress = _value.progress;
    Progress.refineValues(this);
  }
  get toDo(): number | undefined {
    return this._toDo;
  }
  set toDo(value: number | undefined) {
    this._toDo = value;
  }
  get finished(): number | undefined {
    return this._finished;
  }
  set finished(value: number | undefined) {
    this._finished = value;
  }
  get progress(): number | undefined {
    return this._progress;
  }
  set progress(value: number | undefined) {
    this._progress = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Progress.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Progress.AsObject {
    return {
      toDo: this.toDo,
      finished: this.finished,
      progress: this.progress
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): Progress.AsProtobufJSON {
    return {
      toDo: this.toDo,
      finished: this.finished,
      progress: this.progress
    };
  }
}
export module Progress {
  /**
   * Standard JavaScript object representation for Progress
   */
  export interface AsObject {
    toDo?: number;
    finished?: number;
    progress?: number;
  }

  /**
   * Protobuf JSON representation for Progress
   */
  export interface AsProtobufJSON {
    toDo?: number;
    finished?: number;
    progress?: number;
  }
}
