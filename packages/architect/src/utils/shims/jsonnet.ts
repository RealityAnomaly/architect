import { Shim } from '../shim.ts';

export interface JsonnetOptions {
  exec?: boolean;
  jpath?: string[];
  outputFile?: string;
  multi?: string;
  createOutputDirs?: boolean;
  yamlStream?: boolean;
  string?: boolean;
  noTrailingNewline?: boolean;
  maxStack?: number;
  maxTrace?: number;

  extStr?: Record<string, string | undefined>;
  extStrFile?: Record<string, string>;
  extCode?: Record<string, string | undefined>;
  extCodeFile?: Record<string, string>;

  tlaStr?: Record<string, string | undefined>;
  tlaStrFile?: Record<string, string>;
  tlaCode?: Record<string, string | undefined>;
  tlaCodeFile?: Record<string, string>;
}

export class JsonnetShim extends Shim {
  constructor(binary: string = 'jsonnet') {
    super(binary);
  }

  public async template(filename: string, options: JsonnetOptions = {}): Promise<string> {
    const params: string[] = [];

    if (options.exec) params.push('--exec');
    if (options.jpath) options.jpath.forEach(j => params.push('--jpath', j));
    if (options.outputFile) params.push('--output-file', options.outputFile);
    if (options.multi) params.push('--multi', options.multi);
    if (options.createOutputDirs) params.push('--create-output-dirs');
    if (options.yamlStream) params.push('--yaml-stream');
    if (options.string) params.push('--string');
    if (options.noTrailingNewline) params.push('--no-trailing-newline');
    if (options.maxStack) params.push('--max-stack', options.maxStack.toString());
    if (options.maxTrace) params.push('--max-trace', options.maxTrace.toString());

    if (options.extStr) Object.entries(options.extStr).forEach(([k, v]) => params.push('--ext-str', v ? `${k}=${v}` : k));
    if (options.extStrFile) Object.entries(options.extStrFile).forEach(([k, v]) => params.push('--ext-str-file', `${k}=${v}`));
    if (options.extCode) Object.entries(options.extCode).forEach(([k, v]) => params.push('--ext-code', v ? `${k}=${v}` : k));
    if (options.extCodeFile) Object.entries(options.extCodeFile).forEach(([k, v]) => params.push('--ext-code-file', `${k}=${v}`));

    if (options.tlaStr) Object.entries(options.tlaStr).forEach(([k, v]) => params.push('--tla-str', v ? `${k}=${v}` : k));
    if (options.tlaStrFile) Object.entries(options.tlaStrFile).forEach(([k, v]) => params.push('--tla-str-file', `${k}=${v}`));
    if (options.tlaCode) Object.entries(options.tlaCode).forEach(([k, v]) => params.push('--tla-code', v ? `${k}=${v}` : k));
    if (options.tlaCodeFile) Object.entries(options.tlaCodeFile).forEach(([k, v]) => params.push('--tla-code-file', `${k}=${v}`));

    params.push(filename);

    return await this.run(params, async (p) => p.stdout.text());
  }
}
