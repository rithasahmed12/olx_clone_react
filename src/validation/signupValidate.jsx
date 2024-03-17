export const checkValidData = (email, password, name) => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/.test(password);
    const isNameValid = /^[a-zA-Z_-]{3,16}$/.test(name)

    if (!isNameValid || name.trim()=='') {
        return 'Name is not valid'
    }
    if (!isEmailValid || email.trim()=='') {
        return 'Email Id is not valid';
    }

    if (!isPasswordValid || password.trim()==''){
        return 'Password is not valid';
    }

    return null;
}
