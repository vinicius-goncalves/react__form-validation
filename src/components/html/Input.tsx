interface Props {
    labelTitle: string;
    name: string;
    type?: React.HTMLInputTypeAttribute;
    required?: boolean;
    errorMessage?: string;
}

function Input({ labelTitle, errorMessage, ...p }: Props): JSX.Element {
    return (
        <label className="flex flex-col">
            <span className="font-medium my-2.5">
                {labelTitle} {p.required && '*'}
            </span>
            <input
                className="border border-black/10 rounded-md p-1 focus:outline-none"
                {...p}
            />
            {errorMessage && (
                <small className="my-2 text-red-700/90">{errorMessage}</small>
            )}
        </label>
    );
}

export default Input;
