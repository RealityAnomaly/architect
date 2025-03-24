import { HelmChartOpts } from '../builders/helm.mts';
import { KustomizeOpts } from '../builders/kustomize.mts';

export interface CrdsConfigLocal {
}

export interface CrdsConfigHttp {
  paths: string[];
}

export interface CrdsConfigGit {
  repos: CrdsConfigGitRepo[];
}

export interface CrdsConfigGitRepo {
  url: string;
  ref?: string;
  paths: string[];
}

export interface CrdsConfigHelm {
  charts: CrdsConfigHelmChart[];
}

export interface CrdsConfigHelmChart {
  name: string;
  values: object;
  options: HelmChartOpts;
}

export interface CrdsConfigKustomize {
  kustomizations: CrdsConfigKustomizeKustomization[];
}

export interface CrdsConfigKustomizeKustomization {
  path: string;
  config?: KustomizeOpts;
}

export interface CrdsConfig {
  name: string;
  local?: CrdsConfigLocal;
  http?: CrdsConfigHttp;
  git?: CrdsConfigGit;
  helm?: CrdsConfigHelm;
  kustomize?: CrdsConfigKustomize;
}
