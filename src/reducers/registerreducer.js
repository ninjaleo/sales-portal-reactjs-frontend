const REGISTERATION_PENDING = 'REGISTERATION_PENDING';
const REGISTERATION_SUCCESS = 'REGISTERATION_SUCCESS';
const REGISTERATION_ACTIVATED = 'REGISTERATION_ACTIVATED';
const REGISTERATION_USER_FOUND = 'REGISTERATION_USER_FOUND';
const REGISTERATION_FAILED = 'REGISTERATION_FAILED';

const registerreducer = (state = { isRegistered: false, isActivated: false, registerReason: ' ' },
    action) => {
    // write Reducers to handle the actions.
    console.log("Action Payload:" + action.payload)
    console.log("Action Type:" + action.type)
    switch (action.type) {
        case REGISTERATION_SUCCESS:
            return (
                {
                    isRegistered: true,
                    isActivated: false,
                    message: action.payload
                });
        case REGISTERATION_ACTIVATED:
            return (
                {
                    isRegistered: true,
                    isActivated: true
                });
        case REGISTERATION_USER_FOUND:
            return (
                {
                    isRegistered: false,
                    isActivated: false,
                    registerReason: 'USER_FOUND'
                });
        case REGISTERATION_FAILED:
            return (
                {
                    isRegistered: false,
                    isActivated: false,
                    message: action.payload
                });
        default:
            return state;

    }
}

export default registerreducer;