import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1ContainerImage.js";

/**
 * Describe a container image
 */
export interface IContainerImage {
  /**
 * Names by which this image is known. e.g. ["kubernetes.example/hyperkube:v1.0.7", "cloud-vendor.registry.example/cloud-vendor/hyperkube:v1.0.7"]
 */
"names"?: Array<string>;
/**
 * The size of the image in bytes.
 */
"sizeBytes"?: number;
}

/**
 * Describe a container image
 */
export class ContainerImage extends Model<IContainerImage> implements IContainerImage {
  "names"?: Array<string>;
"sizeBytes"?: number;

constructor(data?: ModelData<IContainerImage>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ContainerImage, validate as ValidateFunc<IContainerImage>);

export type {
  IContainerImage as IIoK8sApiCoreV1ContainerImage,
  ContainerImage as IoK8sApiCoreV1ContainerImage
};
