export function maxLengthValidator(value: string, maxLength: number): boolean {
    return !!value && value.length <= maxLength;
}