import CustomForm from '../components/CustomForm';
import Button from '../components/html/Button';
import Input from '../components/html/Input';

function ContactUsPage(): JSX.Element {
    return (
        <div className="absolute shadow-xl min-w-5 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-white rounded-lg">
            <CustomForm title="Contact Us">
                <div className="mb-8">
                    <div className="flex gap-5">
                        <Input labelTitle="Name" name="name" />
                        <Input labelTitle="Surname" name="surname" />
                    </div>
                    <div className="flex gap-5">
                        <Input type="email" labelTitle="Email" name="email" />
                        <Input labelTitle="Purpose" name="purpose" />
                    </div>
                    <div className="flex gap-5 w-full">
                        <Input
                            type="textarea"
                            labelTitle="Message"
                            name="message"
                        />
                    </div>
                </div>
                <Button title="Send message" iconName="send" />
            </CustomForm>
        </div>
    );
}

export default ContactUsPage;
