import { clear } from "@testing-library/user-event/dist/clear";
import React,{ useEffect } from "react";

function DelayAlert() {
    useEffect(() => {
        const timer = setTimeout(() => {
            alert("Hello after 3 seconds");
        },3000);

        return () => clearTimeout(timer);
    },[]);

    return <h2>Wait for the alert...</h2>;
}
export default DelayAlert;