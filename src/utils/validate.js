const validateSignUpDetails = (email, password) => {
    const emailPattern = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    
    const isEmailValid = emailPattern.test(email);
    const isPasswordValid = passwordPattern.test(password);
    
    if (!isEmailValid) return "Email Id is Not Valid";
    if (!isPasswordValid) return "Password is Not Valid";
    
    return "";
}

export {validateSignUpDetails};