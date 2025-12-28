import React from "react";
export default function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button type={type} className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}
{/*using ...props to pass any other props to button like onClick, disabled etc.  and children is same as we did in Containers component to wrap other components inside this button component*/}