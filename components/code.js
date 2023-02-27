
import EncryptedStorage from 'react-native-encrypted-storage';


async function storeUserSession(token)  {
    try {
        console.log("start")
        await EncryptedStorage.setItem(
            "user_session",
            JSON.stringify({
                token : token,
            })
        );
        // Congrats! You've just stored your first value!
    } catch (error) {
        // There was an error on the native side
    }
}

async function retrieveUserSession() {
    console.log("start getting user session")
    try {   
        const session = await EncryptedStorage.getItem("user_session");
        console.log(session)
        if (session !== undefined) {
            return session
        } else {
            return ""
        }
    } catch (error) {
        return ""
    }
}

export { storeUserSession, retrieveUserSession}