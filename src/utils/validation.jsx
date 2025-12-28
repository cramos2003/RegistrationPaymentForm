export function validateForm(formData) {
    const errors = {};
    const safe = (value) => (value ?? "").trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    const zipRegex = /^\d{5}$/;

    if (!safe(formData.firstName)) errors.firstName = "Required";
    if (!safe(formData.lastName)) errors.lastName = "Required";
    if (!emailRegex.test(safe(formData.email)))
        errors.email = "Invalid email";
    if (!phoneRegex.test(safe(formData.phone)))
        errors.phone = "Invalid phone number";
    if (!safe(formData.address)) errors.address = "Required";
    if (!safe(formData.city)) errors.city = "Required";
    if (!safe(formData.state)) errors.state = "Required";
    if (!zipRegex.test(safe(formData.zip)))
        errors.zip = "Invalid ZIP code";
    // if (!safe(formData.carMake)) errors.carMake = "Required";
    // if (!safe(formData.carModel)) errors.carModel = "Required";
    // if (!year || year < 1900 || year > currentYear)
    //     errors.year = "Invalid year";

    return errors;
}
