// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

// noinspection JSUnusedGlobalSymbols
export class KubeHelpers {
  public static defaultIPFamilyPolicy(families: string[], require: boolean = false): string {
    if (families.includes("IPv4") && families.includes("IPv6")) {
      return require ? "RequireDualStack" : "PreferDualStack";
    } else {
      return "SingleStack";
    }
  }
}
