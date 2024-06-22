interface Props {
    title: string;
}

function Title({ title }: Props): JSX.Element {
    return <h1 className="text-black font-bold text-3xl -mb-3">{title}</h1>;
}

export default Title;
