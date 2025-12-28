import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PayPalButton from "./PayPalButton";
import { validateForm } from "../utils/validation";

export default function CarRegistrationForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        carMake: "",
        carModel: "",
        year: "",
    });

    const navigate = useNavigate();

    const [touched, setTouched] = useState({});

    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    const [paymentSuccess, setPaymentSuccess] = useState(false);

    // Re-validate whenever form data changes
    useEffect(() => {
        const validationErrors = validateForm(formData);
        setErrors(validationErrors);

        const allFieldsFilled = Object.values(formData).every(
            (value) => value && value.trim() !== ""
        );

        setIsFormValid(
            Object.keys(validationErrors).length === 0 && allFieldsFilled
        );
    }, [formData]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleBlur = (e) => {
        setTouched({
            ...touched,
            [e.target.name]: true,
        });
    };

    return (
        <div className="form-container">
            <div className="form-card">
                <h1>Car Show Registration Form (General)</h1>
                <p className="subtitle">Please enter your information</p>
                <form>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={touched.firstName && errors.firstName ? "input error-border" : "input"}
                        placeholder="First Name"
                    />
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={touched.lastName && errors.lastName ? "input error-border" : "input"}
                        placeholder="Last Name"
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={touched.email && errors.email ? "input error-border" : "input"}
                        placeholder="Email"
                    />
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={touched.phone && errors.phone ? "input error-border" : "input"}
                        placeholder="Phone"
                    />
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={touched.address && errors.address ? "input error-border" : "input"}
                        placeholder="Address"
                    />
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={touched.city && errors.city ? "input error-border" : "input"}
                        placeholder="City"
                    />
                    <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={touched.state && errors.state ? "input error-border" : "input"}
                        placeholder="State"
                    />
                    <input
                        type="text"
                        name="zip"
                        value={formData.zip}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={touched.zip && errors.zip ? "input error-border" : "input"}
                        placeholder="Zip Code"
                    />
                    <input
                        type="text"
                        name="carMake"
                        value={formData.carMake}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={touched.carMake && errors.carMake ? "input error-border" : "input"}
                        placeholder="Car Make"
                    />
                    <input
                        type="text"
                        name="carModel"
                        value={formData.carModel}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={touched.carModel && errors.carModel ? "input error-border" : "input"}
                        placeholder="Car Model"
                    />
                    <input
                        type="text"
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={touched.year && errors.year ? "input error-border" : "input"}
                        placeholder="Year"
                    />
                </form>
                {isFormValid ? (
                    <div className="paypal-container">
                        <PayPalButton
                            formData={formData}
                            onSuccess={() => {
                                setPaymentSuccess(true);
                                navigate("/payment-success");
                            }}
                        />
                        {paymentSuccess && (
                            <p className="success-message">
                                Payment successful! Thank you for your submission.
                            </p>
                        )}
                    </div>
                ) : (
                    <p className="paypal-disabled-text">
                        Please complete all fields correctly to proceed to payment.
                    </p>
                )}
            </div>
        </div>
    );
}