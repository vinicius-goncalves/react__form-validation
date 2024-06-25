import { ActionFunctionArgs } from 'react-router-dom';

type RestrictionReturn = { key: string; errorMessage: string } | undefined;
type R<T> = (...args: T[]) => RestrictionReturn;

interface Restrictions {
    email: R<string>;
    name: R<string>;
}

const restrictions: Restrictions = {
    email: (email: string) => {
        const restriction = !email.includes('@');
        if (restriction) {
            return { key: 'email', errorMessage: 'Email must have the @' };
        }
    },
    name: (name: string) => {
        const restriction = !(name.length > 3);
        if (restriction) {
            return {
                key: 'name',
                errorMessage: 'Length is lower than 3',
            };
        }
    },
};

export async function contactUsAction({ request }: ActionFunctionArgs) {
    const formData = await request.formData();
    const formEntries = formData.entries() as IterableIterator<
        [keyof Restrictions, string]
    >;

    const errors: { [k: string]: string } = {};

    for (const [k, v] of formEntries) {
        if (k in restrictions) {
            const validator = restrictions[k];
            const error = validator(v);
            if (error) {
                errors[error.key] = error.errorMessage;
            }
        }
    }

    if (Object.keys(errors).length) {
        return errors;
    }

    return null;
}
