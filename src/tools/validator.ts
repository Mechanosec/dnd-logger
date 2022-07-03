import {
  validateSync as baseValidateSync,
  ValidationError,
} from 'class-validator';

export function validateSync(object: object): string {
  const errValidates: ValidationError[] = baseValidateSync(object);
  return errValidates
    .map((errValidate: ValidationError) => errValidate.toString())
    .join(',');
}
