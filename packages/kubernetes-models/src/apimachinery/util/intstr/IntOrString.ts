
/**
 * IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
 */
export type IIntOrString = string | number;

export type IntOrString = IIntOrString;

export type {
  IIntOrString as IIoK8sApimachineryPkgUtilIntstrIntOrString,
  IntOrString as IoK8sApimachineryPkgUtilIntstrIntOrString
};
