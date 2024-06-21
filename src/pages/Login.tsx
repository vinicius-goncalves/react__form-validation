import { ActionFunctionArgs, Form, useSubmit } from 'react-router-dom';
import Input from '../components/Input';

function Login(): JSX.Element {
    const submit = useSubmit();

    function login(event) {
        submit(event.target.closest('form'));
    }

    return (
        <div className="bg-c-gray min-w-full min-h-screen flex items-center justify-center">
            <Form
                method="POST"
                className="bg-white w-full max-w-lg p-8 rounded-md shadow-lg">
                <header>
                    <h1 className="text-black font-bold text-3xl -mb-3">
                        Login In
                    </h1>
                </header>
                <section className="my-6">
                    <Input
                        labelTitle="Username"
                        name="username"
                        type="text"
                        required
                    />
                    <Input
                        labelTitle="Password"
                        name="password"
                        type="password"
                        required
                    />
                </section>
                <button
                    type="button"
                    onClick={login}
                    className="bg-black text-white w-full
                        p-3 rounded-md font-medium flex justify-center
                        gap-0.5 items-center hover:gap-1.5 transition-[gap]">
                    Login
                    <span className="material-symbols-outlined text-[1.2rem]">
                        arrow_outward
                    </span>
                </button>
            </Form>
        </div>
    );
}

export async function loginAction({ request }: ActionFunctionArgs) {
    console.log('Hello World');
    return null;
}

export default Login;
