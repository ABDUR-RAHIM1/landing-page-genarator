const formFields = [
    { label: "Name", name: "name", field: "name", type: "text", required: true, placeholder: "Enter Your Good Name" },
    { label: "Address", name: "address", field: "address", type: "text", required: true, placeholder: "Present Address" },
    { label: "Mobile Number", name: "phone", field: "mobileNumber", type: "text", required: true, placeholder: "Your Phone Number" },
    { label: "Quantity", name: "quantity", field: "quantity", type: "number", required: true, placeholder: "How Much" },
    { label: "Company Name (optional)", name: "company", field: "companyName", type: "text", required: false, placeholder: "Your Company Name" },
    { label: "Opinion (optional)", name: "opinion", field: "opinion", type: "text", required: false, placeholder: "Your Opinion" },
    { label: "Town / City", name: "city", field: "city", type: "text", required: true, placeholder: "Present Town" },
    { label: "District", name: "district", field: "district", type: "text", required: true, placeholder: "Present District" },
    { label: "Postcode / ZIP (optional)", name: "zip", field: "postcodeOrZip", type: "text", required: false, placeholder: "Your Postal Code" },
    { label: "Email Address", name: "email", field: "emailAddress", type: "email", required: true, placeholder: "Valid Email Address" },
    { label: "Emergency Contact (optional)", name: "emergency", field: "emergencyContact", type: "text", required: false, placeholder: "For Emergency Contact" }
];

export default formFields;
