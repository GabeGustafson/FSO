// defines how messages should be displayed

const DURATION = 5000;

const update = (setMessage, success, text) => {
    setMessage({success, text});
    setTimeout(() => { setMessage({success:false, text:null})}, DURATION);
};

const messageUpdater = {update};

export default messageUpdater;