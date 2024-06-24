interface Props {
    title: string;
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
    iconName?: string;
    onClick?: React.DOMAttributes<HTMLButtonElement>['onClick'];
}

function Button({
    title,
    type = 'button',
    iconName,
    ...props
}: Props): JSX.Element {
    const tailwindClass =
        'bg-black text-white w-full p-3 rounded-md font-medium ' +
        ' flex justify-center items-center gap-1 hover:gap-2 transition-[gap]';

    return (
        <button type={type} className={tailwindClass} {...props}>
            {title}
            <span className="material-symbols-outlined text-[1.2rem]">
                {iconName}
            </span>
        </button>
    );
}

export default Button;
