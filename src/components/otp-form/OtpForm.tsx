import React, { useState } from "react";
import { Navigate } from "react-router-dom";

interface Change {
    element: HTMLInputElement;
    index: number;
}

interface KeyDown {
    element: HTMLInputElement;
    e: React.KeyboardEvent<HTMLInputElement>;
}

const OtpForm: React.FC = () => {
    const [otp, setOtp] = useState<string[]>(["", "", "", ""]);
    const [isVerified, setIsVerified] = useState<boolean | null>(null)
    const verifyOtp = "1234"
    const userEnteredOtp = otp.join("");


    const handleChange = ({ element, index }: Change) => {
        if (isNaN(Number(element.value))) return;
        const newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);

        if (element.value && element.nextSibling) {
            (element.nextSibling as HTMLInputElement).focus();
        }
        if (isVerified !== null) {
            setIsVerified(null);
        }
    };
    const handleKeyDown = ({ element, e }: KeyDown) => {
        if (e.key === 'Backspace' && !element.value && element.previousSibling) {
            (element.previousSibling as HTMLInputElement).focus();
        }
        if (e.key === "Enter" && otp.every(val => val !== "")) {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        if (verifyOtp.length < 4) return;

        if (userEnteredOtp === verifyOtp) {
            setIsVerified(true)
        } else {
            setIsVerified(false)
        }
    }
    // setTimeout(() => {
    //     {
    //         isVerified && (
    //             <Navigate to="/courses" replace={true} />
    //         )
    //     }
    // }, 1000);

    return (
        <>


            <div className='flex flex-col pt-16 items-center bg-Blue min-h-screen'>
                <h2 className="text-white text-6xl font-bold">Chai aur Code</h2>
                <div className="bg-white mt-16 rounded-3xl">
                    <div className="mx-20 text-center">
                        <h2 className="text-3xl font-bold pt-8 px-20">Mobile Phone Verification</h2>
                        <p className="text-Gray py-4 text-xl">
                            Enter the 4-digit verification code that was sent to <br /> your phone number.
                        </p>
                        <div className="flex justify-center gap-4 mb-10">
                            {otp.map((data, index) => (
                                <input
                                    className={`w-20 h-24 text-center border ${isVerified === null ? " border-gray-200" : isVerified === true ? "border-[#23CF9B]" : "border-[#EB2D5B]"} bg-[#DBE2EF] rounded-xl *:mx-1 text-4xl font-medium`}
                                    type="text"
                                    name="otp"
                                    maxLength={1}
                                    key={index}
                                    value={data}
                                    onChange={e => handleChange({ element: e.target as HTMLInputElement, index })}
                                    onKeyDown={e => handleKeyDown({ element: e.target as HTMLInputElement, e })}
                                    onFocus={e => (e.target as HTMLInputElement).select()}
                                />
                            ))}
                        </div>
                        <button type="submit" onClick={handleSubmit} className={`w-96 ${isVerified === null ? "bg-[#112D4E] " : isVerified === true ? "bg-[#23CF9B]" : "bg-[#EB2D5B]"} text-xl text-white py-4 rounded-lg`}>{isVerified === null ? "Verify Account" : isVerified === true ? "Verified" : "Verification failed"}</button>
                        <p className="mt-4 text-center text-Gray pb-10 mb-5 text-xl">Didn't receive code? <a href="#" className="text-[#112D4E] ">Resend</a></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OtpForm;
