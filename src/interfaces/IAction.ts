export interface IAction<T> {
    type: T;
    payload?: any;
}