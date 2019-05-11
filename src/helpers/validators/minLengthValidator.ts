export function minLengthValidator(value: string, mixLength: number): boolean {
    return !!value && value.length >= mixLength;
}