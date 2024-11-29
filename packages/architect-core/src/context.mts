import { Component, constructor } from "./index.mts";

export interface Context {
  name: string;

  request<T extends Component>(token: constructor<T>, name?: string, auto?: boolean): T;
};
