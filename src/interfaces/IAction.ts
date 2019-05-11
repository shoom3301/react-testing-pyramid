export interface IAction<T, R = any> {
    type: T;
    payload: R;
}