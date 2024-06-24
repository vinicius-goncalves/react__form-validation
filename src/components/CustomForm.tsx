import { PropsWithChildren } from 'react';
import Title from './Title';

interface Props extends PropsWithChildren {
    title: string;
}

function CustomForm({ title, children }: Props): JSX.Element {
    return (
        <form className="p-8">
            <header className="mb-8">
                <Title title={title} />
            </header>
            <main>{children}</main>
        </form>
    );
}

export default CustomForm;
