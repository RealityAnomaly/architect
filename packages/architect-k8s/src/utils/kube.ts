// noinspection JSUnusedGlobalSymbols
export class KubeHelpers {
  public static defaultIPFamilyPolicy(families: string[]): string {
    if (families.includes("IPv4") && families.includes("IPv6")) {
      return "PreferDualStack";
    } else {
      return "SingleStack";
    }
  }
}
