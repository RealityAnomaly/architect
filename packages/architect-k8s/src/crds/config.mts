import { HelmChartOpts } from "../helm/index.mts";
import { KustomizeOpts } from "../kustomize/index.mts";

export interface CrdsConfigHttp {
  paths: string[];
}

export interface CrdsConfigGit {
  repos: CrdsConfigGitRepo[];
};

export interface CrdsConfigGitRepo {
  url: string;
  ref?: string;
  paths: string[];
};

export interface CrdsConfigHelm {
  charts: CrdsConfigHelmChart[];
};

export interface CrdsConfigHelmChart {
  name: string;
  values?: any;
  options: HelmChartOpts;
};

export interface CrdsConfigKustomize {
  kustomizations: CrdsConfigKustomizeKustomization[];
};

export interface CrdsConfigKustomizeKustomization {
  path: string;
  config?: KustomizeOpts;
}

export interface CrdsConfig {
  name: string;
  http?: CrdsConfigHttp;
  git?: CrdsConfigGit;
  helm?: CrdsConfigHelm;
  kustomize?: CrdsConfigKustomize;
};
