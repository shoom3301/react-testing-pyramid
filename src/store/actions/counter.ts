import { IActionFactory } from '../../interfaces/IActionFactory';

export enum CounterActionTypes {
    INCREMENT = 'INCREMENT',
    DECREMENT = 'DECREMENT',
}

export const counterIncrement: IActionFactory = () => ({type: CounterActionTypes.INCREMENT});
export const counterDecrement: IActionFactory = () => ({type: CounterActionTypes.DECREMENT});