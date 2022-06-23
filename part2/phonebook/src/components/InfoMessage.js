import "./InfoMessage.css"

const InfoMessage = ({message}) =>
{
    const {success, text} = message;

    if (text === null) { // no message - display nothing
        return null;
    }
    else if (success) { // success - show success message 
        return (<div className="successMessage">{text}</div>);
    }
    else { // failure - show failure message
        return (<div className="errorMessage">{text}</div>);
    }

};

export default InfoMessage;