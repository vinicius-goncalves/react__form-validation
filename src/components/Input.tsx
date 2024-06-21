interface Props {
    labelTitle: string;
    name: string;
    type?: React.HTMLInputTypeAttribute;
    required?: boolean;
}

function Input(props: Props): JSX.Element {
    const { labelTitle, ...p } = props;

    return (
        <label className="flex flex-col">
            <span className="font-medium my-2.5">
                {labelTitle} {p.required && '*'}
            </span>
            <input
                className="border border-black/10 rounded-md p-1 focus:outline-none"
                {...p}
            />
        </label>
    );
}

export default Input;
