import { IAction } from './IAction';

export interface IActionFactory<T, R = any> {
    (...argv: any[]): IAction<T, R>;
}