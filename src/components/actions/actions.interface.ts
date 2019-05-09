export interface IActionsStateProps {
    count?: number;
}

export interface IActionsDispatchProps {
    increment?: () => void;
    decrement?: () => void;
    save?: (count: number) => void;
}

export interface IActionsProps extends IActionsStateProps, IActionsDispatchProps {
}