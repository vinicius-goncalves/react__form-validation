import Input from './html/Input';

type ExtraTypes = 'textarea' | 'select';

interface Props {
    labelTitle: string;
    name: string;
    type?: React.HTMLInputTypeAttribute | ExtraTypes;
    required?: boolean;
    errorMessage?: string;
    selectOptions?: Array<{ value: string; text: string }>;
}

function CustomInput({
    labelTitle,
    errorMessage,
    selectOptions,
    ...props
}: Props): JSX.Element {
    const initialInput: JSX.Element = <Input {...props} />;
    let input: JSX.Element = initialInput;

    if (props.type === 'textarea') {
        input = (
            <textarea className="max-h-40 min-h-20 w-96 min-w-52 max-w-[400px] resize rounded-md border border-black/10 p-1 outline-none" />
        );
    }

    if (props.type === 'select') {
        if (!selectOptions) {
            throw new Error(
                'Select options must be present when using <select> element.',
            );
        }

        input = (
            <select
                className="w-full rounded-md border border-black/10 p-1 outline-none"
                name={props.name}>
                {selectOptions.map(({ text, value }) => (
                    <option value={value} className="w-full" key={value}>
                        {text}
                    </option>
                ))}
            </select>
        );
    }

    return (
        <label className="flex w-full flex-col">
            <span className="my-2.5 font-medium">
                {labelTitle} {props.required && '*'}
            </span>
            {input}
            {errorMessage && <small>{errorMessage} </small>}
        </label>
    );
}

export default CustomInput;
