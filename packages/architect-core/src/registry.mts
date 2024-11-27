import { constructor } from './utils/index.mts';

export class Registry {
  public readonly data: Record<string, any> = {};

  /**
    * Arguments to be passed to the constructor of registered classes
    */
  private readonly args: any[];

  constructor(args?: any[]) {
    if (args != null) {
      this.args = args;
    } else {
      this.args = [];
    };
  };

  /**
   * Registers an instance of T with the options provided.
   * If no object is passed, a new instance of T will be instantiated and used.
   */
  public register<T>(token: constructor<T>, instance?: T) {
    if (instance == null) {
      instance = new token(...this.args);
    };

    let id = Reflect.getMetadata('class', token);

    // TODO: fix this
    // if (isNamed(instance) && instance.name) {
    //   id += `@${instance.name}`;
    // };

    if (id in this.data) {
      throw Error(`${id} already exists in this Registry`);
    };

    this.data[id] = instance;
  };

  /**
   * Requests an entry from the registry
   * @param token The constructor token to request
   * @param name Optional name of the object
   * @param auto Create the object if it doesn't exist
   */
  public request<T>(token: constructor<T>, name?: string): T | undefined {
    let clazz = Reflect.getMetadata('class', token);
    if (name) clazz += `@${name}`; // ...f38be@foobar-component
    if (!(clazz in this.data)) return undefined;

    return this.data[clazz];
  };
};
