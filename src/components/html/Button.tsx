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
    return (
        <button
            type={type}
            className="flex w-full items-center justify-center gap-1 rounded-md bg-black p-3 font-medium text-white transition-[gap] hover:gap-2"
            {...props}>
            {title}
            <span className="material-symbols-outlined text-[1.2rem]">
                {iconName}
            </span>
        </button>
    );
}

export default Button;
