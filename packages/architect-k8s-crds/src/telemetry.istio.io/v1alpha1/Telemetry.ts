import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/TelemetryIstioIoV1alpha1Telemetry.js";

export interface ITelemetry {
  /**
   * Telemetry configuration for workloads. See more details at: https://istio.io/docs/reference/config/telemetry.html
   */
  "spec"?: {
    /**
     * Optional.
     */
    "accessLogging"?: Array<{
      /**
       * Controls logging.
       */
      "disabled"?: boolean;
      /**
       * Optional.
       */
      "filter"?: {
        /**
         * CEL expression for selecting when requests/connections should be logged.
         */
        "expression"?: string;
      };
      /**
       * Allows tailoring of logging behavior to specific conditions.
       */
      "match"?: {
        "mode"?: "CLIENT_AND_SERVER" | "CLIENT" | "SERVER";
      };
      /**
       * Optional.
       */
      "providers"?: Array<{
        /**
         * Required.
         */
        "name"?: string;
      }>;
    }>;
    /**
     * Optional.
     */
    "metrics"?: Array<{
      /**
       * Optional.
       */
      "overrides"?: Array<{
        /**
         * Optional.
         */
        "disabled"?: boolean;
        /**
         * Match allows provides the scope of the override.
         */
        "match"?: {
          /**
           * Allows free-form specification of a metric.
           */
          "customMetric"?: string;
          /**
           * One of the well-known Istio Standard Metrics.
           */
          "metric"?: "ALL_METRICS" | "REQUEST_COUNT" | "REQUEST_DURATION" | "REQUEST_SIZE" | "RESPONSE_SIZE" | "TCP_OPENED_CONNECTIONS" | "TCP_CLOSED_CONNECTIONS" | "TCP_SENT_BYTES" | "TCP_RECEIVED_BYTES" | "GRPC_REQUEST_MESSAGES" | "GRPC_RESPONSE_MESSAGES";
          "mode"?: "CLIENT_AND_SERVER" | "CLIENT" | "SERVER";
        } & (Exclude<{
          /**
           * Allows free-form specification of a metric.
           */
          "customMetric"?: string;
          /**
           * One of the well-known Istio Standard Metrics.
           */
          "metric"?: "ALL_METRICS" | "REQUEST_COUNT" | "REQUEST_DURATION" | "REQUEST_SIZE" | "RESPONSE_SIZE" | "TCP_OPENED_CONNECTIONS" | "TCP_CLOSED_CONNECTIONS" | "TCP_SENT_BYTES" | "TCP_RECEIVED_BYTES" | "GRPC_REQUEST_MESSAGES" | "GRPC_RESPONSE_MESSAGES";
          "mode"?: "CLIENT_AND_SERVER" | "CLIENT" | "SERVER";
        }, {
          /**
           * Allows free-form specification of a metric.
           */
          "customMetric"?: string;
          /**
           * One of the well-known Istio Standard Metrics.
           */
          "metric"?: "ALL_METRICS" | "REQUEST_COUNT" | "REQUEST_DURATION" | "REQUEST_SIZE" | "RESPONSE_SIZE" | "TCP_OPENED_CONNECTIONS" | "TCP_CLOSED_CONNECTIONS" | "TCP_SENT_BYTES" | "TCP_RECEIVED_BYTES" | "GRPC_REQUEST_MESSAGES" | "GRPC_RESPONSE_MESSAGES";
          "mode"?: "CLIENT_AND_SERVER" | "CLIENT" | "SERVER";
        } & ({
          /**
           * Allows free-form specification of a metric.
           */
          "customMetric"?: string;
          /**
           * One of the well-known Istio Standard Metrics.
           */
          "metric": "ALL_METRICS" | "REQUEST_COUNT" | "REQUEST_DURATION" | "REQUEST_SIZE" | "RESPONSE_SIZE" | "TCP_OPENED_CONNECTIONS" | "TCP_CLOSED_CONNECTIONS" | "TCP_SENT_BYTES" | "TCP_RECEIVED_BYTES" | "GRPC_REQUEST_MESSAGES" | "GRPC_RESPONSE_MESSAGES";
          "mode"?: "CLIENT_AND_SERVER" | "CLIENT" | "SERVER";
        } | {
          /**
           * Allows free-form specification of a metric.
           */
          "customMetric": string;
          /**
           * One of the well-known Istio Standard Metrics.
           */
          "metric"?: "ALL_METRICS" | "REQUEST_COUNT" | "REQUEST_DURATION" | "REQUEST_SIZE" | "RESPONSE_SIZE" | "TCP_OPENED_CONNECTIONS" | "TCP_CLOSED_CONNECTIONS" | "TCP_SENT_BYTES" | "TCP_RECEIVED_BYTES" | "GRPC_REQUEST_MESSAGES" | "GRPC_RESPONSE_MESSAGES";
          "mode"?: "CLIENT_AND_SERVER" | "CLIENT" | "SERVER";
        })> | {
          /**
           * Allows free-form specification of a metric.
           */
          "customMetric"?: string;
          /**
           * One of the well-known Istio Standard Metrics.
           */
          "metric": "ALL_METRICS" | "REQUEST_COUNT" | "REQUEST_DURATION" | "REQUEST_SIZE" | "RESPONSE_SIZE" | "TCP_OPENED_CONNECTIONS" | "TCP_CLOSED_CONNECTIONS" | "TCP_SENT_BYTES" | "TCP_RECEIVED_BYTES" | "GRPC_REQUEST_MESSAGES" | "GRPC_RESPONSE_MESSAGES";
          "mode"?: "CLIENT_AND_SERVER" | "CLIENT" | "SERVER";
        } | {
          /**
           * Allows free-form specification of a metric.
           */
          "customMetric": string;
          /**
           * One of the well-known Istio Standard Metrics.
           */
          "metric"?: "ALL_METRICS" | "REQUEST_COUNT" | "REQUEST_DURATION" | "REQUEST_SIZE" | "RESPONSE_SIZE" | "TCP_OPENED_CONNECTIONS" | "TCP_CLOSED_CONNECTIONS" | "TCP_SENT_BYTES" | "TCP_RECEIVED_BYTES" | "GRPC_REQUEST_MESSAGES" | "GRPC_RESPONSE_MESSAGES";
          "mode"?: "CLIENT_AND_SERVER" | "CLIENT" | "SERVER";
        });
        /**
         * Optional.
         */
        "tagOverrides"?: {
          [key: string]: {
            /**
             * Operation controls whether or not to update/add a tag, or to remove it.
             */
            "operation"?: "UPSERT" | "REMOVE";
            /**
             * Value is only considered if the operation is `UPSERT`.
             */
            "value"?: string;
          };
        };
      }>;
      /**
       * Optional.
       */
      "providers"?: Array<{
        /**
         * Required.
         */
        "name"?: string;
      }>;
    }>;
    /**
     * Optional.
     */
    "selector"?: {
      "matchLabels"?: {
        [key: string]: string;
      };
    };
    /**
     * Optional.
     */
    "tracing"?: Array<{
      /**
       * Optional.
       */
      "customTags"?: {
        [key: string]: {
          /**
           * Environment adds the value of an environment variable to each span.
           */
          "environment"?: {
            /**
             * Optional.
             */
            "defaultValue"?: string;
            /**
             * Name of the environment variable from which to extract the tag value.
             */
            "name"?: string;
          };
          "header"?: {
            /**
             * Optional.
             */
            "defaultValue"?: string;
            /**
             * Name of the header from which to extract the tag value.
             */
            "name"?: string;
          };
          /**
           * Literal adds the same, hard-coded value to each span.
           */
          "literal"?: {
            /**
             * The tag value to use.
             */
            "value"?: string;
          };
        } & (Exclude<{
          /**
           * Environment adds the value of an environment variable to each span.
           */
          "environment"?: {
            /**
             * Optional.
             */
            "defaultValue"?: string;
            /**
             * Name of the environment variable from which to extract the tag value.
             */
            "name"?: string;
          };
          "header"?: {
            /**
             * Optional.
             */
            "defaultValue"?: string;
            /**
             * Name of the header from which to extract the tag value.
             */
            "name"?: string;
          };
          /**
           * Literal adds the same, hard-coded value to each span.
           */
          "literal"?: {
            /**
             * The tag value to use.
             */
            "value"?: string;
          };
        }, {
          /**
           * Environment adds the value of an environment variable to each span.
           */
          "environment"?: {
            /**
             * Optional.
             */
            "defaultValue"?: string;
            /**
             * Name of the environment variable from which to extract the tag value.
             */
            "name"?: string;
          };
          "header"?: {
            /**
             * Optional.
             */
            "defaultValue"?: string;
            /**
             * Name of the header from which to extract the tag value.
             */
            "name"?: string;
          };
          /**
           * Literal adds the same, hard-coded value to each span.
           */
          "literal"?: {
            /**
             * The tag value to use.
             */
            "value"?: string;
          };
        } & ({
          /**
           * Environment adds the value of an environment variable to each span.
           */
          "environment"?: {
            /**
             * Optional.
             */
            "defaultValue"?: string;
            /**
             * Name of the environment variable from which to extract the tag value.
             */
            "name"?: string;
          };
          "header"?: {
            /**
             * Optional.
             */
            "defaultValue"?: string;
            /**
             * Name of the header from which to extract the tag value.
             */
            "name"?: string;
          };
          /**
           * Literal adds the same, hard-coded value to each span.
           */
          "literal": {
            /**
             * The tag value to use.
             */
            "value"?: string;
          };
        } | {
          /**
           * Environment adds the value of an environment variable to each span.
           */
          "environment": {
            /**
             * Optional.
             */
            "defaultValue"?: string;
            /**
             * Name of the environment variable from which to extract the tag value.
             */
            "name"?: string;
          };
          "header"?: {
            /**
             * Optional.
             */
            "defaultValue"?: string;
            /**
             * Name of the header from which to extract the tag value.
             */
            "name"?: string;
          };
          /**
           * Literal adds the same, hard-coded value to each span.
           */
          "literal"?: {
            /**
             * The tag value to use.
             */
            "value"?: string;
          };
        } | {
          /**
           * Environment adds the value of an environment variable to each span.
           */
          "environment"?: {
            /**
             * Optional.
             */
            "defaultValue"?: string;
            /**
             * Name of the environment variable from which to extract the tag value.
             */
            "name"?: string;
          };
          "header": {
            /**
             * Optional.
             */
            "defaultValue"?: string;
            /**
             * Name of the header from which to extract the tag value.
             */
            "name"?: string;
          };
          /**
           * Literal adds the same, hard-coded value to each span.
           */
          "literal"?: {
            /**
             * The tag value to use.
             */
            "value"?: string;
          };
        })> | {
          /**
           * Environment adds the value of an environment variable to each span.
           */
          "environment"?: {
            /**
             * Optional.
             */
            "defaultValue"?: string;
            /**
             * Name of the environment variable from which to extract the tag value.
             */
            "name"?: string;
          };
          "header"?: {
            /**
             * Optional.
             */
            "defaultValue"?: string;
            /**
             * Name of the header from which to extract the tag value.
             */
            "name"?: string;
          };
          /**
           * Literal adds the same, hard-coded value to each span.
           */
          "literal": {
            /**
             * The tag value to use.
             */
            "value"?: string;
          };
        } | {
          /**
           * Environment adds the value of an environment variable to each span.
           */
          "environment": {
            /**
             * Optional.
             */
            "defaultValue"?: string;
            /**
             * Name of the environment variable from which to extract the tag value.
             */
            "name"?: string;
          };
          "header"?: {
            /**
             * Optional.
             */
            "defaultValue"?: string;
            /**
             * Name of the header from which to extract the tag value.
             */
            "name"?: string;
          };
          /**
           * Literal adds the same, hard-coded value to each span.
           */
          "literal"?: {
            /**
             * The tag value to use.
             */
            "value"?: string;
          };
        } | {
          /**
           * Environment adds the value of an environment variable to each span.
           */
          "environment"?: {
            /**
             * Optional.
             */
            "defaultValue"?: string;
            /**
             * Name of the environment variable from which to extract the tag value.
             */
            "name"?: string;
          };
          "header": {
            /**
             * Optional.
             */
            "defaultValue"?: string;
            /**
             * Name of the header from which to extract the tag value.
             */
            "name"?: string;
          };
          /**
           * Literal adds the same, hard-coded value to each span.
           */
          "literal"?: {
            /**
             * The tag value to use.
             */
            "value"?: string;
          };
        });
      };
      /**
       * Controls span reporting.
       */
      "disableSpanReporting"?: boolean;
      /**
       * Allows tailoring of behavior to specific conditions.
       */
      "match"?: {
        "mode"?: "CLIENT_AND_SERVER" | "CLIENT" | "SERVER";
      };
      /**
       * Optional.
       */
      "providers"?: Array<{
        /**
         * Required.
         */
        "name"?: string;
      }>;
      "randomSamplingPercentage"?: number;
      "useRequestIdForTraceSampling"?: boolean;
    }>;
  };
  "status"?: {
  };
  "apiVersion": "telemetry.istio.io/v1alpha1";
  "kind": "Telemetry";
  "metadata"?: IObjectMeta;
}

export class Telemetry extends Model<ITelemetry> implements ITelemetry {
  "spec"?: ITelemetry["spec"];
  "status"?: ITelemetry["status"];
  "apiVersion": ITelemetry["apiVersion"];
  "kind": ITelemetry["kind"];
  "metadata"?: ITelemetry["metadata"];

static apiVersion: ITelemetry["apiVersion"] = "telemetry.istio.io/v1alpha1";
static kind: ITelemetry["kind"] = "Telemetry";
static is = createTypeMetaGuard<ITelemetry>(Telemetry);

constructor(data?: ModelData<ITelemetry>) {
  super({
    apiVersion: Telemetry.apiVersion,
    kind: Telemetry.kind,
    ...data
  } as ITelemetry);
}
}


setValidateFunc(Telemetry, validate as ValidateFunc<ITelemetry>);
