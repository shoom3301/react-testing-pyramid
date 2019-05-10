export interface ICounterState {
    count: number;
    saving: boolean;
}

export const defaultCounterState: ICounterState = {count: 0, saving: false};