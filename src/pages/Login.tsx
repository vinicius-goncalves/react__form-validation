import { ActionFunctionArgs, Form } from 'react-router-dom';

function Login(): JSX.Element {
    return (
        <div className="bg-c-gray min-w-full min-h-screen flex items-center justify-center">
            <Form
                method="POST"
                className="bg-white w-full max-w-lg p-5 rounded-md shadow-lg">
                <header>
                    <h1 className="text-black font-bold text-4xl py-3">
                        Login In
                    </h1>
                </header>
                <section className="py-3">
                    <label className="flex flex-col gap-3">
                        <span className="font-medium">Username *</span>
                        <input
                            type="text"
                            className="border border-black/10 rounded-md p-1 focus:outline-none"
                        />
                    </label>
                </section>
                <button type="submit">Login</button>
            </Form>
        </div>
    );
}

export function loginAction({ params }: ActionFunctionArgs) {
    console.log(params);
    return null;
}

export default Login;
