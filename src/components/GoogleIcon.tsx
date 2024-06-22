interface Props {
    icon: string;
}

function GoogleIcon({ icon }: Props): JSX.Element {
    return <span className="material-symbols-outlined">{icon}</span>;
}

export default GoogleIcon;
