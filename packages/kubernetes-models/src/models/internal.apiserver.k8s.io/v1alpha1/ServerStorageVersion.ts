import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/internal.apiserver.k8s.io/v1alpha1/ServerStorageVersion.js";

/**
 * An API server instance reports the version it can decode and the version it encodes objects to when persisting objects in the backend.
 */
export interface IServerStorageVersion {
  /**
 * apiServerID is the ID of the reporting API server.
 */
"apiServerID": string;
/**
 * decodableVersions are the encoding versions the API server can handle to decode. The API server can decode objects encoded in these versions. The encodingVersion must be included in the decodableVersions.
 */
"decodableVersions": Array<string>;
/**
 * encodingVersion the API server encodes the object to when persisting it in the backend (e.g., etcd).
 */
"encodingVersion": string;
/**
 * servedVersions lists all versions the API server can serve. DecodableVersions must include all ServedVersions.
 */
"servedVersions"?: Array<string>;
}

/**
 * An API server instance reports the version it can decode and the version it encodes objects to when persisting objects in the backend.
 */
export class ServerStorageVersion extends Model<IServerStorageVersion> implements IServerStorageVersion {
  "apiServerID": string;
"decodableVersions": Array<string>;
"encodingVersion": string;
"servedVersions"?: Array<string>;

constructor(data?: ModelData<IServerStorageVersion>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ServerStorageVersion, validate as ValidateFunc<IServerStorageVersion>);

export type {
  IServerStorageVersion as IIoK8sApiApiserverinternalV1alpha1ServerStorageVersion,
  ServerStorageVersion as IoK8sApiApiserverinternalV1alpha1ServerStorageVersion
};
