// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

export abstract class TargetIntrospection<T> {
  protected state: T | undefined;

  protected abstract loadState(): Promise<T>;

  public async getState(): Promise<T> {
    if (!this.state) this.state = await this.loadState();
    return this.state;
  }

  public setState(state: T) {
    this.state = state;
  }
}
