import { useEffect, useRef } from "react";

export default function PayPalButton({ formData, onSuccess }) {
    const paypalRef = useRef(null);
    const hasRendered = useRef(false);

    useEffect(() => {   
        if (!window.paypal) return;
        if (hasRendered.current) return;

        window.paypal
            .Buttons({
                // SERVER-SIDE: ORDER CREATION
                createOrder: async () => {
                    const res = await fetch("https://registrationpaymentformbackend.onrender.com/orders/create", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(formData),
                    });

                    if(!res.ok){
                        throw new error("failed to create order");
                    }
                    const data = await res.json();
                    return data.orderID // REQUIRED
                },

                // APPROVAL HANDLED BY WEBHOOK
                onApprove: async (data) => {
                    console.log("Order approved:", data.orderID);
                    await fetch(`https://registrationpaymentformbackend.onrender.com/orders/capture/${data.orderID}`, {
                        method: "POST"
                    });
                    onSuccess?.(data.orderID);
                    return Promise.resolve();
                },
                onError: (err) => {
                    console.error("PayPal error:", err);
                },
            }).render(paypalRef.current);

        hasRendered.current = true;
    }, [formData, onSuccess]);

    return <div ref={paypalRef} />;
}
