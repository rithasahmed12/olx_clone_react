export const checkValidData = (email, password) => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/.test(password);

 
    if (!isEmailValid || email.trim() == '') {
        return 'Email Id is not valid';
    }

    if (!isPasswordValid || password.trim() == '') {
        return 'Password is not valid';
    }

    return null;
}
