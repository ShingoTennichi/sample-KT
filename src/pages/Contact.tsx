import '../CSS/Contact.css';
import { useState } from 'react';
import PublishToTopic from '../AWS/SNSPublishToTopic-v3';


function Contact(): JSX.Element {
    interface ERRORMESSAGE {
        [key: string]: {
            message: string,
            status: boolean
        }
    };

    const [showSuccessfulMessage, setShowSuccessfulMessage]= useState<boolean | null>(null);
    const [errorMessage, setErrorMessage] = useState<ERRORMESSAGE>({
        nameInput: {
            message: "Please input your name",
            status: true
        },
        emailInput: {
            message: "Please input email address",
            status: true
        },
        customerTypeInput: {
            message: "Please choose your customer type",
            status: true
        },
        messageInput: {
            message: "Please input message for us",
            status: true
        }
    });
    const [input, setInput] = useState<{[key: string]: string}>({
        name: "",
        email: "",
        customerType: "",
        message: ""
    });
    const params: {[param: string]: string} = {
        TopicArn: "arn:aws:sns:us-east-2:237600839617:test",
        Subject: "From KT Website",
        Message:
            "Name: " + input.name +
            "\nEmail: " + input.email +
            "\nCustomer Type: " + input.customerType +
            "\nMessage:\n" + input.message
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>): void => {
        const {name, value} = e.target
        setInput(prevInput => {
            return({
                ...prevInput,
                [name]: value
            });
        });
    };

    const PublishMessage = (): void => {
        const propertyName: string[][] = [
            ['name', 'nameInput'],
            ['email', 'emailInput'],
            ['customerType', 'customerTypeInput'],
            ['message', 'messageInput']];
        for(let i = 0; i < propertyName.length; i++) {
            const keyOfInput: string = propertyName[i][0];
            const tempErrorMessage: ERRORMESSAGE = {...errorMessage};
            const keyOfErrorMessage: string = propertyName[i][1];
            if(!input[keyOfInput]) {
                tempErrorMessage[keyOfErrorMessage].status = false;
                setErrorMessage(tempErrorMessage);
            } else {
                tempErrorMessage[keyOfErrorMessage].status = true;
                setErrorMessage(tempErrorMessage);
            }
        };
        if(errorMessage.nameInput.status && errorMessage.emailInput.status && errorMessage.customerTypeInput.status && errorMessage.messageInput.status) {
            PublishToTopic(params);
            setInput({
                name: "",
                email: "",
                customerType: "",
                message: ""
            });
            setShowSuccessfulMessage(true);
        } else {
            setShowSuccessfulMessage(false);
        };
    };
    return(
        <div className="contact-container">
            <h1 style={{fontSize: 'calc(1.5rem + 3vh)', marginBottom: '3vh'}}>Contact</h1>
            <div className="contact-body">
                <div className='form'>
                    <span className='form-ask'>Want to Write Letter to Us?</span>
                    <label>
                        <span>Name:</span>{errorMessage.nameInput.status ? <></> : <span className='error'>{errorMessage.nameInput.message}</span>}
                        <input name='name' type='text' value={input.name} onChange={(e)=> handleChange(e)} />
                    </label>
                    <label>
                        <span>Email:</span>{errorMessage.emailInput.status ? <></> : <span className='error'>{errorMessage.emailInput.message}</span>}
                        <input name='email' type='email' value={input.email} onChange={(e)=> handleChange(e)} />
                    </label>
                    <label>
                        <span>Customer Type:</span>{errorMessage.customerTypeInput.status ? <></> : <span className='error'>{errorMessage.customerTypeInput.message}</span>}
                        <input name='customerType' type='text' value={input.customerType} onChange={(e) => handleChange(e)} />
                    </label>
                    <label>
                        <span>Message:</span>{errorMessage.messageInput.status ? <></> : <span className='error'>{errorMessage.messageInput.message}</span>}
                        <textarea rows={8} name='message' value={input.message} onChange={(e) => handleChange(e)} />
                    </label>
                    {showSuccessfulMessage === null ? <></> : showSuccessfulMessage ? <span>Thank You! Your message has been sent successfully</span> : <span className='error'>Please fill input areas as needed</span>}
                    <button className='btn-submit' onClick={() => PublishMessage()}>submit</button>
                </div>
                <div className="company-info">
                    <h2 className='company-info-title'>Our Information</h2>
                    <ul className='company-info-items'>
                        <li className='company-info-item' style={{alignItems: 'center'}}>
                            <i className='fa-solid fa-building company-info-icon'></i>
                            <div className='flex-center'>
                                <span>Monday to Friday</span>
                                <span>9:00am — 5:00pm</span>
                            </div>
                        </li>
                        <li className='company-info-item'>
                            <i className="fa-solid fa-phone company-info-icon"></i>
                            <span>06-6210-5181</span>
                        </li>
                        <li className='company-info-item'>
                            <i className="fa-solid fa-map-location-dot company-info-icon"></i>
                            <span>3-chōme-4-9 6th floors Bingomachi, Chuo Ward, Osaka, 541-0051, Japan</span>
                        </li>

                    </ul>
                    <iframe
                        className='map'
                        title='map'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7407.823051043463!2d135.4961600729602!3d34.684879974516065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e6e1f378e99b%3A0x1d28f005c5360f90!2s3-ch%C5%8Dme-4-9%20Bingomachi%2C%20Chuo%20Ward%2C%20Osaka%2C%20541-0051!5e0!3m2!1sen!2sjp!4v1657445151107!5m2!1sen!2sjp"
                        width="auto"
                        height="450"
                        style={{border:"0"}}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </div>
    )
}

export default Contact;