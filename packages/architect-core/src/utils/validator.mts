import { Logger } from "winston";

interface Validator {
  validate(): void | Promise<void>;
};

export function isValidator(value: unknown): value is Validator {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return !!value && typeof (value as any).validate === 'function';
};

export enum ValidationErrorLevel {
  INFO = 'info',
  WARNING = 'warning',
  ERROR = 'error'
};

export interface ValidationErrorCount {
  messages: number;
  warnings: number;
  errors: number;
}

export class ValidationError extends Error {
  public readonly level: ValidationErrorLevel;
  public readonly subject: object;

  private acked: boolean = false;

  constructor(message: string, level: ValidationErrorLevel, subject: object) {
    super(message);
    this.level = level;
    this.subject = subject;
  };

  public assert(logger: Logger) {
    if (this.acked) return;

    let level: string;
    switch(this.level) {
      case ValidationErrorLevel.INFO:
        level = 'info';
        break;
      case ValidationErrorLevel.WARNING:
        level = 'warning';
        break;
      case ValidationErrorLevel.ERROR:
        level = 'error';
        break;
    };

    logger.log(level, `${this.subject.toString()}: ${this.message}`);
    this.acked = true;
  };
};