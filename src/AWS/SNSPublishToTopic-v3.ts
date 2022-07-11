import { SNSClient, PublishCommand } from '@aws-sdk/client-sns';

const ACCESS_KEY_ID: string = process.env.REACT_APP_ACCESS_KEY_ID ? process.env.REACT_APP_ACCESS_KEY_ID : "";
const SECRET_ACCESS_KEY: string = process.env.REACT_APP_SECRET_ACCESS_KEY ? process.env.REACT_APP_SECRET_ACCESS_KEY : "";
const snsClient: SNSClient = new SNSClient({
    region: 'us-east-2',
    credentials: {
        accessKeyId: ACCESS_KEY_ID,
        secretAccessKey: SECRET_ACCESS_KEY
    }
});

const PublishToTopic = async(params: any)  => {
    try{
        const data = await snsClient.send(new PublishCommand(params));
        console.log('Success', data);
        return data;
    } catch(error: any) {
        console.log('error', error.stack);
    }
};

export default PublishToTopic;