import { useEffect, useState } from 'react';
import { Form, Navigate, useActionData } from 'react-router-dom';
import CustomInput from '../components/CustomInput';
import Title from '../components/Title';
import Button from '../components/html/Button';
import useAuth from '../hooks/useAuth';
interface Errors {
    username: string;
    password: string;
}

function LoginPage(): JSX.Element {
    const actionData = useActionData() as Errors;
    const [errors, setErrors] = useState<Errors | null>(actionData);

    useEffect(() => {
        setErrors(actionData);
    }, [actionData]);

    const { user } = useAuth();

    if (user) {
        return <Navigate to="/contactUs" />;
    }

    return (
        <div className="flex min-h-screen min-w-full items-center justify-center bg-c-gray">
            <Form
                method="POST"
                className="w-full max-w-lg rounded-md bg-white p-8 shadow-lg">
                <header>
                    <Title title="Login" />
                </header>
                <section className="my-6" onInput={() => setErrors(null)}>
                    <CustomInput
                        labelTitle="Username"
                        name="username"
                        type="text"
                        errorMessage={errors?.username}
                        required
                    />
                    <CustomInput
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
