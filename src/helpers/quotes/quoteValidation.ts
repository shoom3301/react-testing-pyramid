import { maxLengthValidator } from '../validators/maxLengthValidator';
import { minLengthValidator } from '../validators/minLengthValidator';
import { requiredValidator } from '../validators/requiredValidator';

export const authorIsValid = (author: string): boolean => requiredValidator(author)
    && maxLengthValidator(author, 64)
    && minLengthValidator(author, 2);

export const textIsValid = (text: string): boolean => requiredValidator(text)
    && maxLengthValidator(text, 256)
    && minLengthValidator(text, 2);