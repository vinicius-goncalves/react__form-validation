import { useActionData } from 'react-router-dom';
import CustomForm from '../components/CustomForm';
import CustomInput from '../components/CustomInput';
import Button from '../components/html/Button';

function ContactUsPage(): JSX.Element {
    const errors = useActionData();
    console.log(errors);

    return (
        <div className="absolute left-[50%] top-[50%] min-w-5 translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white shadow-xl">
            <CustomForm title="Contact Us" method="POST">
                <div className="mb-8">
                    <div className="flex gap-5">
                        <CustomInput
                            labelTitle="Name"
                            name="name"
                            errorMessage={errors?.name}
                        />
                        <CustomInput labelTitle="Surname" name="surname" />
                    </div>
                    <div className="flex gap-5">
                        <CustomInput
                            type="email"
                            labelTitle="Email"
                            name="email"
                            errorMessage={errors?.email}
                        />
                        <CustomInput
                            type="select"
                            labelTitle="Purpose"
                            name="purpose"
                            selectOptions={[
                                { value: 'feedback', text: 'Feedback' },
                                { value: 'order', text: 'Order' },
                                { value: 'product', text: 'Product' },
                            ]}
                        />
                    </div>
                    <div className="flex gap-5">
                        <CustomInput
                            type="textarea"
                            labelTitle="Message"
                            name="message"
                        />
                    </div>
                </div>
                <Button type="submit" title="Send message" iconName="send" />
            </CustomForm>
        </div>
    );
}

export default ContactUsPage;
