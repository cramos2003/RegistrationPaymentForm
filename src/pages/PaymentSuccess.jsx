import { useEffect, useState } from "react";
import "./PaymentSuccess.css";

export default function PaymentSuccess() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    return (
        <div className="success-page">
            <div className={`success-card ${animate ? "animate" : ""}`}>
                <div className="checkmark-wrapper">
                    <svg
                        className="checkmark"
                        viewBox="0 0 52 52"
                    >
                        <circle
                            className="checkmark-circle"
                            cx="26"
                            cy="26"
                            r="25"
                            fill="none"
                        />
                        <path
                            className="checkmark-check"
                            fill="none"
                            d="M14 27l7 7 17-17"
                        />
                    </svg>
                </div>

                <h1>Payment Successful</h1>
                <p>Your payment has been processed successfully.</p>

                <p className="subtext">
                    A confirmation email will be sent shortly.
                </p>
            </div>
        </div>
    );
}
