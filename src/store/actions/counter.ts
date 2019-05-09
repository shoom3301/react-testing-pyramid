import { IActionFactory } from '../../interfaces/IActionFactory';

export enum CounterActionTypes {
    INCREMENT = 'INCREMENT',
    DECREMENT = 'DECREMENT',
    SAVE_START = 'SAVE_START',
    SAVE_SUCCESS = 'SAVE_SUCCESS',
    SAVE_ERROR = 'SAVE_ERROR',
}

export const counterIncrement: IActionFactory = () => ({type: CounterActionTypes.INCREMENT});
export const counterDecrement: IActionFactory = () => ({type: CounterActionTypes.DECREMENT});
export const counterSave: IActionFactory = (count: number) => (
    {
        type: CounterActionTypes.SAVE_START,
        payload: {count}
    }
);
export const counterSaveSuccess: IActionFactory = () => ({type: CounterActionTypes.SAVE_SUCCESS});
export const counterSaveError: IActionFactory = () => ({type: CounterActionTypes.SAVE_ERROR});