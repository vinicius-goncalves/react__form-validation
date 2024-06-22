import { ActionFunctionArgs } from 'react-router-dom';

export async function loginAction({ request }: ActionFunctionArgs) {
    const errors: Record<string, string> = {};
    const formData = await request.formData();

    for (const [k, v] of formData.entries()) {
        if (String(v).length < 3) {
            errors[
                k
            ] = `The "${k}" must be have three (3) or more characters."`;
        }
    }

    if (Object.keys(errors).length) {
        return errors;
    }

    console.log('Logged In');

    return null;
}
