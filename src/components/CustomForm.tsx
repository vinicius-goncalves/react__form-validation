import { PropsWithChildren } from 'react';
import { FetcherFormProps, Form } from 'react-router-dom';
import Title from './Title';

interface Props extends PropsWithChildren {
    title: string;
    method: FetcherFormProps['method'];
}

function CustomForm({ title, method, children }: Props): JSX.Element {
    return (
        <Form className="p-8" method={method}>
            <header className="mb-8">
                <Title title={title} />
            </header>
            <main>{children}</main>
        </Form>
    );
}

export default CustomForm;
