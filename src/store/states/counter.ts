export type CounterState = {
    count: number;
    saving: boolean;
}

export const defaultCounterState: CounterState = {count: 0, saving: false};