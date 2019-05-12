import { IQuoteBlank } from '../../../interfaces/IQuote';

export interface IQuoteCreateFormDispatchProps {
    create: (quote: IQuoteBlank) => void;
}

export interface IQuoteCreateFormProps extends IQuoteCreateFormDispatchProps {
    onClose: () => void;
}

export interface IQuoteCreateFormState extends IQuoteBlank {
    isValid?: boolean | null;
}