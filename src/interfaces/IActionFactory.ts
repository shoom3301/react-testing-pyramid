import { Action } from 'redux';

export interface IActionFactory {
    (): Action;
}