export function vendorValidattion(formData) {
    const errors = {};
    const safe = (value) => (value ?? "").trim();

    if(!safe(formData.company)) errors.company = "Required";
    if(!safe(formData.vendorType)) errors.vendorType = "Required";
    if(!safe(formData.vendorSize)) errors.vendorSize = "Required";

    // // CONDITION FOR BUSINESS LICENSE
    //     // if vendor type is none - require business license
    //     // if food truck - require business license
    // CONDITION FOR INSURANCE NUMBER
        // if vendor type is none - require insurance number
        // if food truck - require insurance number
        if(formData.vendorType === "FT" || formData.vendorType === "FP"){
            if(!safe(formData.businessLicense)) errors.businessLicense = "Required";
            if(!safe(formData.insuranceNumber)) errors.insuranceNumber = "Required";
        }

    if(!safe(formData.vendorDescription)) errors.vendorDescription = "Required";
    if(!formData.agreement) errors.agreement = "Required Agreement";

    return errors;
}