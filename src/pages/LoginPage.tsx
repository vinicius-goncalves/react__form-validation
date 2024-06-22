import { useEffect, useState } from 'react';
import { Form, useActionData } from 'react-router-dom';
import Title from '../components/Title';
import Button from '../components/html/Button';
import Input from '../components/html/Input';

function LoginPage(): JSX.Element {
    interface Errors {
        username: string;
        password: string;
    }

    const actionData = useActionData() as Errors;
    const [errors, setErrors] = useState<Errors | null>(actionData);

    useEffect(() => {
        setErrors(actionData);
    }, [actionData]);

    return (
        <div className="bg-c-gray min-w-full min-h-screen flex items-center justify-center">
            <Form
                method="POST"
                className="bg-white w-full max-w-lg p-8 rounded-md shadow-lg">
                <header>
                    <Title title="Login" />
                </header>
                <section className="my-6" onInput={() => setErrors(null)}>
                    <Input
                        labelTitle="Username"
                        name="username"
                        type="text"
                        errorMessage={errors?.username}
                        required
                    />
                    <Input
                        labelTitle="Password"
                        name="password"
                        type="password"
                        errorMessage={errors?.password}
                        required
                    />
                </section>
                <Button type="submit" title="Login" iconName="arrow_outward" />
            </Form>
        </div>
    );
}

export default LoginPage;
