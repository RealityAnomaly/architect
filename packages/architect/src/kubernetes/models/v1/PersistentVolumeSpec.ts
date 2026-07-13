import { IIoK8sApiCoreV1AWSElasticBlockStoreVolumeSource } from "./AWSElasticBlockStoreVolumeSource.ts";
import { IIoK8sApiCoreV1AzureDiskVolumeSource } from "./AzureDiskVolumeSource.ts";
import { IIoK8sApiCoreV1AzureFilePersistentVolumeSource } from "./AzureFilePersistentVolumeSource.ts";
import { IIoK8sApimachineryPkgApiResourceQuantity } from "../../apimachinery/api/resource/Quantity.ts";
import { IIoK8sApiCoreV1CephFSPersistentVolumeSource } from "./CephFSPersistentVolumeSource.ts";
import { IIoK8sApiCoreV1CinderPersistentVolumeSource } from "./CinderPersistentVolumeSource.ts";
import { IIoK8sApiCoreV1ObjectReference } from "./ObjectReference.ts";
import { IIoK8sApiCoreV1CSIPersistentVolumeSource } from "./CSIPersistentVolumeSource.ts";
import { IIoK8sApiCoreV1FCVolumeSource } from "./FCVolumeSource.ts";
import { IIoK8sApiCoreV1FlexPersistentVolumeSource } from "./FlexPersistentVolumeSource.ts";
import { IIoK8sApiCoreV1FlockerVolumeSource } from "./FlockerVolumeSource.ts";
import { IIoK8sApiCoreV1GCEPersistentDiskVolumeSource } from "./GCEPersistentDiskVolumeSource.ts";
import { IIoK8sApiCoreV1GlusterfsPersistentVolumeSource } from "./GlusterfsPersistentVolumeSource.ts";
import { IIoK8sApiCoreV1HostPathVolumeSource } from "./HostPathVolumeSource.ts";
import { IIoK8sApiCoreV1ISCSIPersistentVolumeSource } from "./ISCSIPersistentVolumeSource.ts";
import { IIoK8sApiCoreV1LocalVolumeSource } from "./LocalVolumeSource.ts";
import { IIoK8sApiCoreV1NFSVolumeSource } from "./NFSVolumeSource.ts";
import { IIoK8sApiCoreV1VolumeNodeAffinity } from "./VolumeNodeAffinity.ts";
import { IIoK8sApiCoreV1PhotonPersistentDiskVolumeSource } from "./PhotonPersistentDiskVolumeSource.ts";
import { IIoK8sApiCoreV1PortworxVolumeSource } from "./PortworxVolumeSource.ts";
import { IIoK8sApiCoreV1QuobyteVolumeSource } from "./QuobyteVolumeSource.ts";
import { IIoK8sApiCoreV1RBDPersistentVolumeSource } from "./RBDPersistentVolumeSource.ts";
import { IIoK8sApiCoreV1ScaleIOPersistentVolumeSource } from "./ScaleIOPersistentVolumeSource.ts";
import { IIoK8sApiCoreV1StorageOSPersistentVolumeSource } from "./StorageOSPersistentVolumeSource.ts";
import { IIoK8sApiCoreV1VsphereVirtualDiskVolumeSource } from "./VsphereVirtualDiskVolumeSource.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1PersistentVolumeSpec.js";

/**
 * PersistentVolumeSpec is the specification of a persistent volume.
 */
export interface IPersistentVolumeSpec {
  /**
 * accessModes contains all ways the volume can be mounted. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes
 */
"accessModes"?: Array<string>;
/**
 * awsElasticBlockStore represents an AWS Disk resource that is attached to a kubelet's host machine and then exposed to the pod. Deprecated: AWSElasticBlockStore is deprecated. All operations for the in-tree awsElasticBlockStore type are redirected to the ebs.csi.aws.com CSI driver. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
 */
"awsElasticBlockStore"?: IIoK8sApiCoreV1AWSElasticBlockStoreVolumeSource;
/**
 * azureDisk represents an Azure Data Disk mount on the host and bind mount to the pod. Deprecated: AzureDisk is deprecated. All operations for the in-tree azureDisk type are redirected to the disk.csi.azure.com CSI driver.
 */
"azureDisk"?: IIoK8sApiCoreV1AzureDiskVolumeSource;
/**
 * azureFile represents an Azure File Service mount on the host and bind mount to the pod. Deprecated: AzureFile is deprecated. All operations for the in-tree azureFile type are redirected to the file.csi.azure.com CSI driver.
 */
"azureFile"?: IIoK8sApiCoreV1AzureFilePersistentVolumeSource;
/**
 * capacity is the description of the persistent volume's resources and capacity. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#capacity
 */
"capacity"?: {
  [key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};
/**
 * cephFS represents a Ceph FS mount on the host that shares a pod's lifetime. Deprecated: CephFS is deprecated and the in-tree cephfs type is no longer supported.
 */
"cephfs"?: IIoK8sApiCoreV1CephFSPersistentVolumeSource;
/**
 * cinder represents a cinder volume attached and mounted on kubelets host machine. Deprecated: Cinder is deprecated. All operations for the in-tree cinder type are redirected to the cinder.csi.openstack.org CSI driver. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
 */
"cinder"?: IIoK8sApiCoreV1CinderPersistentVolumeSource;
/**
 * claimRef is part of a bi-directional binding between PersistentVolume and PersistentVolumeClaim. Expected to be non-nil when bound. claim.VolumeName is the authoritative bind between PV and PVC. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#binding
 */
"claimRef"?: IIoK8sApiCoreV1ObjectReference;
/**
 * csi represents storage that is handled by an external CSI driver.
 */
"csi"?: IIoK8sApiCoreV1CSIPersistentVolumeSource;
/**
 * fc represents a Fibre Channel resource that is attached to a kubelet's host machine and then exposed to the pod.
 */
"fc"?: IIoK8sApiCoreV1FCVolumeSource;
/**
 * flexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin. Deprecated: FlexVolume is deprecated. Consider using a CSIDriver instead.
 */
"flexVolume"?: IIoK8sApiCoreV1FlexPersistentVolumeSource;
/**
 * flocker represents a Flocker volume attached to a kubelet's host machine and exposed to the pod for its usage. This depends on the Flocker control service being running. Deprecated: Flocker is deprecated and the in-tree flocker type is no longer supported.
 */
"flocker"?: IIoK8sApiCoreV1FlockerVolumeSource;
/**
 * gcePersistentDisk represents a GCE Disk resource that is attached to a kubelet's host machine and then exposed to the pod. Provisioned by an admin. Deprecated: GCEPersistentDisk is deprecated. All operations for the in-tree gcePersistentDisk type are redirected to the pd.csi.storage.gke.io CSI driver. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
 */
"gcePersistentDisk"?: IIoK8sApiCoreV1GCEPersistentDiskVolumeSource;
/**
 * glusterfs represents a Glusterfs volume that is attached to a host and exposed to the pod. Provisioned by an admin. Deprecated: Glusterfs is deprecated and the in-tree glusterfs type is no longer supported. More info: https://examples.k8s.io/volumes/glusterfs/README.md
 */
"glusterfs"?: IIoK8sApiCoreV1GlusterfsPersistentVolumeSource;
/**
 * hostPath represents a directory on the host. Provisioned by a developer or tester. This is useful for single-node development and testing only! On-host storage is not supported in any way and WILL NOT WORK in a multi-node cluster. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
 */
"hostPath"?: IIoK8sApiCoreV1HostPathVolumeSource;
/**
 * iscsi represents an ISCSI Disk resource that is attached to a kubelet's host machine and then exposed to the pod. Provisioned by an admin.
 */
"iscsi"?: IIoK8sApiCoreV1ISCSIPersistentVolumeSource;
/**
 * local represents directly-attached storage with node affinity
 */
"local"?: IIoK8sApiCoreV1LocalVolumeSource;
/**
 * mountOptions is the list of mount options, e.g. ["ro", "soft"]. Not validated - mount will simply fail if one is invalid. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes/#mount-options
 */
"mountOptions"?: Array<string>;
/**
 * nfs represents an NFS mount on the host. Provisioned by an admin. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
 */
"nfs"?: IIoK8sApiCoreV1NFSVolumeSource;
/**
 * nodeAffinity defines constraints that limit what nodes this volume can be accessed from. This field influences the scheduling of pods that use this volume. This field is mutable if MutablePVNodeAffinity feature gate is enabled.
 */
"nodeAffinity"?: IIoK8sApiCoreV1VolumeNodeAffinity;
/**
 * persistentVolumeReclaimPolicy defines what happens to a persistent volume when released from its claim. Valid options are Retain (default for manually created PersistentVolumes), Delete (default for dynamically provisioned PersistentVolumes), and Recycle (deprecated). Recycle must be supported by the volume plugin underlying this PersistentVolume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#reclaiming
 */
"persistentVolumeReclaimPolicy"?: string;
/**
 * photonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine. Deprecated: PhotonPersistentDisk is deprecated and the in-tree photonPersistentDisk type is no longer supported.
 */
"photonPersistentDisk"?: IIoK8sApiCoreV1PhotonPersistentDiskVolumeSource;
/**
 * portworxVolume represents a portworx volume attached and mounted on kubelets host machine. Deprecated: PortworxVolume is deprecated. All operations for the in-tree portworxVolume type are redirected to the pxd.portworx.com CSI driver.
 */
"portworxVolume"?: IIoK8sApiCoreV1PortworxVolumeSource;
/**
 * quobyte represents a Quobyte mount on the host that shares a pod's lifetime. Deprecated: Quobyte is deprecated and the in-tree quobyte type is no longer supported.
 */
"quobyte"?: IIoK8sApiCoreV1QuobyteVolumeSource;
/**
 * rbd represents a Rados Block Device mount on the host that shares a pod's lifetime. Deprecated: RBD is deprecated and the in-tree rbd type is no longer supported. More info: https://examples.k8s.io/volumes/rbd/README.md
 */
"rbd"?: IIoK8sApiCoreV1RBDPersistentVolumeSource;
/**
 * scaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes. Deprecated: ScaleIO is deprecated and the in-tree scaleIO type is no longer supported.
 */
"scaleIO"?: IIoK8sApiCoreV1ScaleIOPersistentVolumeSource;
/**
 * storageClassName is the name of StorageClass to which this persistent volume belongs. Empty value means that this volume does not belong to any StorageClass.
 */
"storageClassName"?: string;
/**
 * storageOS represents a StorageOS volume that is attached to the kubelet's host machine and mounted into the pod. Deprecated: StorageOS is deprecated and the in-tree storageos type is no longer supported. More info: https://examples.k8s.io/volumes/storageos/README.md
 */
"storageos"?: IIoK8sApiCoreV1StorageOSPersistentVolumeSource;
/**
 * Name of VolumeAttributesClass to which this persistent volume belongs. Empty value is not allowed. When this field is not set, it indicates that this volume does not belong to any VolumeAttributesClass. This field is mutable and can be changed by the CSI driver after a volume has been updated successfully to a new class. For an unbound PersistentVolume, the volumeAttributesClassName will be matched with unbound PersistentVolumeClaims during the binding process.
 */
"volumeAttributesClassName"?: string;
/**
 * volumeMode defines if a volume is intended to be used with a formatted filesystem or to remain in raw block state. Value of Filesystem is implied when not included in spec.
 */
"volumeMode"?: string;
/**
 * vsphereVolume represents a vSphere volume attached and mounted on kubelets host machine. Deprecated: VsphereVolume is deprecated. All operations for the in-tree vsphereVolume type are redirected to the csi.vsphere.vmware.com CSI driver.
 */
"vsphereVolume"?: IIoK8sApiCoreV1VsphereVirtualDiskVolumeSource;
}

/**
 * PersistentVolumeSpec is the specification of a persistent volume.
 */
export class PersistentVolumeSpec extends Model<IPersistentVolumeSpec> implements IPersistentVolumeSpec {
  "accessModes"?: Array<string>;
"awsElasticBlockStore"?: IIoK8sApiCoreV1AWSElasticBlockStoreVolumeSource;
"azureDisk"?: IIoK8sApiCoreV1AzureDiskVolumeSource;
"azureFile"?: IIoK8sApiCoreV1AzureFilePersistentVolumeSource;
"capacity"?: {
  [key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};
"cephfs"?: IIoK8sApiCoreV1CephFSPersistentVolumeSource;
"cinder"?: IIoK8sApiCoreV1CinderPersistentVolumeSource;
"claimRef"?: IIoK8sApiCoreV1ObjectReference;
"csi"?: IIoK8sApiCoreV1CSIPersistentVolumeSource;
"fc"?: IIoK8sApiCoreV1FCVolumeSource;
"flexVolume"?: IIoK8sApiCoreV1FlexPersistentVolumeSource;
"flocker"?: IIoK8sApiCoreV1FlockerVolumeSource;
"gcePersistentDisk"?: IIoK8sApiCoreV1GCEPersistentDiskVolumeSource;
"glusterfs"?: IIoK8sApiCoreV1GlusterfsPersistentVolumeSource;
"hostPath"?: IIoK8sApiCoreV1HostPathVolumeSource;
"iscsi"?: IIoK8sApiCoreV1ISCSIPersistentVolumeSource;
"local"?: IIoK8sApiCoreV1LocalVolumeSource;
"mountOptions"?: Array<string>;
"nfs"?: IIoK8sApiCoreV1NFSVolumeSource;
"nodeAffinity"?: IIoK8sApiCoreV1VolumeNodeAffinity;
"persistentVolumeReclaimPolicy"?: string;
"photonPersistentDisk"?: IIoK8sApiCoreV1PhotonPersistentDiskVolumeSource;
"portworxVolume"?: IIoK8sApiCoreV1PortworxVolumeSource;
"quobyte"?: IIoK8sApiCoreV1QuobyteVolumeSource;
"rbd"?: IIoK8sApiCoreV1RBDPersistentVolumeSource;
"scaleIO"?: IIoK8sApiCoreV1ScaleIOPersistentVolumeSource;
"storageClassName"?: string;
"storageos"?: IIoK8sApiCoreV1StorageOSPersistentVolumeSource;
"volumeAttributesClassName"?: string;
"volumeMode"?: string;
"vsphereVolume"?: IIoK8sApiCoreV1VsphereVirtualDiskVolumeSource;

constructor(data?: ModelData<IPersistentVolumeSpec>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(PersistentVolumeSpec, validate as ValidateFunc<IPersistentVolumeSpec>);

export type {
  IPersistentVolumeSpec as IIoK8sApiCoreV1PersistentVolumeSpec,
  PersistentVolumeSpec as IoK8sApiCoreV1PersistentVolumeSpec
};
