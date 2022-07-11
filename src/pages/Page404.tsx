import { useState} from 'react';
import PublishToTopic from '../AWS/SNSPublishToTopic-v3';

function Page404(): JSX.Element {
    const [input, setInput] = useState({
        name: '',
        email: '',
        customerType: '',
        message: ''
    })
    const params = {
        TopicArn: "arn:aws:sns:us-east-2:237600839617:test",
        Subject: "From KT Website",
        Message:
            "Name: " + input.name +
            "\nEmail: " + input.email +
            "\nCustomer Type: " + input.customerType +
            "\nMessage:\n" + input.message
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const {name, value} = e.target;
        setInput(prevInput => {
            return({
                ...prevInput,
                [name]: value
            })
        });
    }
    return(
        <div style={{color:'red', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px'}}>
            <h1>This page is not found</h1>
            <input name='name' type="text" onChange={(e)=> handleChange(e)}/>
            <button onClick={() => PublishToTopic(params)}>Publish a message</button>
        </div>
    )
}

export default Page404;