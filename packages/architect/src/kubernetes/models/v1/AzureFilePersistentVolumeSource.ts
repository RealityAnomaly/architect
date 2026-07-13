import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1AzureFilePersistentVolumeSource.js";

/**
 * AzureFile represents an Azure File Service mount on the host and bind mount to the pod.
 */
export interface IAzureFilePersistentVolumeSource {
  /**
 * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
 */
"readOnly"?: boolean;
/**
 * secretName is the name of secret that contains Azure Storage Account Name and Key
 */
"secretName": string;
/**
 * secretNamespace is the namespace of the secret that contains Azure Storage Account Name and Key default is the same as the Pod
 */
"secretNamespace"?: string;
/**
 * shareName is the azure Share Name
 */
"shareName": string;
}

/**
 * AzureFile represents an Azure File Service mount on the host and bind mount to the pod.
 */
export class AzureFilePersistentVolumeSource extends Model<IAzureFilePersistentVolumeSource> implements IAzureFilePersistentVolumeSource {
  "readOnly"?: boolean;
"secretName": string;
"secretNamespace"?: string;
"shareName": string;

constructor(data?: ModelData<IAzureFilePersistentVolumeSource>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(AzureFilePersistentVolumeSource, validate as ValidateFunc<IAzureFilePersistentVolumeSource>);

export type {
  IAzureFilePersistentVolumeSource as IIoK8sApiCoreV1AzureFilePersistentVolumeSource,
  AzureFilePersistentVolumeSource as IoK8sApiCoreV1AzureFilePersistentVolumeSource
};
