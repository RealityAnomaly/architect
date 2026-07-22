import * as logtape from '@logtape/logtape';

export interface Validator {
  validate(): void | Promise<void>;
}

export function isValidator(value: unknown): value is Validator {
  return !!value && typeof (value as Validator).validate === 'function';
}

export enum ValidationErrorLevel {
  INFO = 'info',
  WARNING = 'warning',
  ERROR = 'error',
}

export interface ValidationErrorCount {
  messages: number;
  warnings: number;
  errors: number;
}

export class ValidationError extends Error {
  public readonly level: ValidationErrorLevel;
  public readonly subject: string;

  private acked: boolean = false;

  constructor(message: string, level: ValidationErrorLevel, subject: string) {
    super(message);
    this.level = level;
    this.subject = subject;
  }

  public assert(logger: logtape.Logger) {
    if (this.acked) return;
    const message = `${this.subject}: ${this.message}`;

    switch (this.level) {
      case ValidationErrorLevel.INFO:
        logger.info(message);
        break;
      case ValidationErrorLevel.WARNING:
        logger.warn(message);
        break;
      case ValidationErrorLevel.ERROR:
        logger.error(message);
        break;
    }

    this.acked = true;
  }
}
