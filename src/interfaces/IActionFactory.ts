import { Action } from 'redux';

export interface IActionFactory {
    (...argv: any[]): Action;
}