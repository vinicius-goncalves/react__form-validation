interface Props {
    labelTitle: string;
    name: string;
    type?: React.HTMLInputTypeAttribute | 'textarea';
    required?: boolean;
    errorMessage?: string;
}

function Input({ labelTitle, errorMessage, ...p }: Props): JSX.Element {
    return (
        <label className="flex flex-col">
            <span className="font-medium my-2.5">
                {labelTitle} {p.required && '*'}
            </span>
            {p.type === 'textarea' ? (
                <textarea className="border border-black/10 resize max-w-[400px] min-w-52 min-h-20 max-h-40 w-96 outline-none "></textarea>
            ) : (
                <input
                    className="border border-black/10 rounded-md p-1 focus:outline-none"
                    {...p}
                />
            )}
            {errorMessage && (
                <small className="my-2 text-red-700/90">{errorMessage}</small>
            )}
        </label>
    );
}

export default Input;
