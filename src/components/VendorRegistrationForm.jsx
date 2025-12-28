import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PayPalButton from "./PayPalButton";
import { validateForm } from "../utils/validation";
import { vendorValidattion } from "../utils/validateVendors";

export default function VendorRegistrationForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        vendorType: "",
        vendorSize: "",
        businessLicense: "",
        insuranceNumber: "",
        vendorDescription: "",
        agreement: ""
    });

    const navigate = useNavigate();

    const [touched, setTouched] = useState({});

    const [errors, setErrors] = useState({});
    const [vendorErrors, setVendorErrors] = useState({});

    const [isFormValid, setIsFormValid] = useState({});

    const [paymentSuccess, setPaymentSuccess] = useState(false);

    // VALIDATE ON FORM DATA CHANGE
    useEffect(() => {
        const validationErrors = validateForm(formData);
        setErrors(validationErrors);
        const vendorErrors = vendorValidattion(formData);
        setVendorErrors(vendorErrors);
        

        setIsFormValid(
            Object.keys(validationErrors).length == 0 && Object.keys(vendorErrors) == 0
        );
    }, [formData]);

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;

        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
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
                <h1>Event Sponsor Registration Form</h1>
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
                        placeholder="Phone (10 digits)"
                    />
                    <input 
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={touched.company && errors.company ? "input error-border" : "input"}
                        placeholder="Company (if no write none)"
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
                        placeholder="Zip"
                    />

                    <select
                        name="vendorType"
                        value={formData.vendorType}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={touched.vendorType && errors.vendorType ? "select error-border" : "select"}
                    >
                        <option value="">--VENDOR TYPE--</option>
                        <option value="FT">Food Vendor (Truck) - $225</option>
                        <option value="FP">Food Vendor (Pop-up) - $225</option>
                        <option value="MV">Merchendice Vendor - $75 to $140</option>
                    </select>

                    <select
                        name="vendorSize"
                        value={formData.vendorSize}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={touched.vendorSize && errors.vendorSize ? "select error-border" : "select"}
                    >
                        <option value="">--VENDIR SIZE--</option>
                        <option value="10">10ft by 10ft</option>
                        <option value="20">10ft by 20ft</option>
                        <option value="30">10ft by 30ft</option>
                    </select>

                    <input 
                        type="text"
                        name="businessLicense"
                        value={formData.businessLicense}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={touched.businessLicense && errors.businessLicense ? "input error-border" : "input"}
                        placeholder="Business License"
                    />
                    <input 
                        type="text"
                        name="insuranceNumber"
                        value={formData.insuranceNumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={touched.insuranceNumber && errors.insuranceNumber ? "input error-border" : "input"}
                        placeholder="Insurance Number"
                    />
                    <input 
                        type="text"
                        name="vendorDescription"
                        value={formData.vendorDescription}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={touched.vendorDescription && errors.vendorDescription ? "input error-border" : "input"}
                        placeholder="Category/list of items sold"
                    />

                    <label htmlFor="agreement">
                         <input
                            type="checkbox"
                            name="agreement"
                            id="agreement"
                            value={formData.agreement}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={touched.agreement && errors.agreement ? "input error-border" : "input"}
                        />
                        HOLD HARMLESS AND INDEMNIFICATION AGREEMENT,  
                        I (hereinafter, the "Car Participant/Vendor"),
                        hereby agree to indemnify, defend, and hold harmless the City of Riverbank, Somar Youth Project, Somar entertainment, Riverbank Police Services, and all of their respective officers, agents, servants, and employees (collectively, the "Indemnified Parties") from any and all liability, claims, demands, damages, injuries, or losses arising out of, or in any way connected to, the Participant/Vendor’s involvement in the event, including, but not limited to, damage, injury, or loss to any person, property, goods, wares, or merchandise caused by, or resulting from, the Participant/Vendor’s actions or negligence.
                        The Participant/Vendor’s agreement to indemnify and hold harmless the Indemnified Parties extends to all claims resulting from damage, injury, or loss to the Participant/Vendor and/or their employees, and damage or loss to the Participant/Vendor’s property, goods, wares, or merchandise, whether arising out of, or in any way connected to,the City of Riverbank, Somar Youth Project, Somar entertainment, Riverbank Police Services.
                    </label>
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
