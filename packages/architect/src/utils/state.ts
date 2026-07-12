import appDirs from "appdirsjs";

export type StateDirectories = {
  cache: string;
  config: string;
  data: string;
  runtime?: string;
};

export class StateProvider {
  public readonly dirs: StateDirectories;

  private constructor(dirs: StateDirectories) {
    this.dirs = dirs;
  }

  public static fromAppDirs(appName = "architect"): StateProvider {
    const dirs = appDirs.default({ appName });
    return new StateProvider({
      cache: dirs.cache,
      config: dirs.config,
      data: dirs.data,
      runtime: dirs.runtime,
    });
  }

  public static fromTempDir(dir: string): StateProvider {
    return new StateProvider({
      cache: `${dir}/cache`,
      config: `${dir}/config`,
      data: `${dir}/data`,
      runtime: `${dir}/runtime`,
    });
  }
}
