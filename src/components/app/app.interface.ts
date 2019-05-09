export interface IAppStateProps {
    count?: number;
    saving?: boolean;
}

export interface IAppDispatchProps {
    increment?: () => void;
    decrement?: () => void;
    save?: (count: number) => void;
}

export interface IAppProps extends IAppStateProps, IAppDispatchProps {
}