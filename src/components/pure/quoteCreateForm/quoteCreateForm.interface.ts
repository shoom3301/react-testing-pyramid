import { IQuoteBlank } from '../../../interfaces/IQuote';

export interface IQuoteCreateFormProps {
    onClose(): void;
    onSubmit(quote: IQuoteBlank): void;
}

export interface IQuoteCreateFormState extends IQuoteBlank {
    isValid?: boolean | null;
}