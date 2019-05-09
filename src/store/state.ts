export interface IState {
    count: number;
    saving: boolean;
}

export const defaultState: IState = {count: 0, saving: false};