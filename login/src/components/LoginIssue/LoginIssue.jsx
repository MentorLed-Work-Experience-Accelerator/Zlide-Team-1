import React, { useState } from 'react';
import Header from '../Header';
import LoginIssueModal from './LoginIssueModal';

const LoginIssue = () => {
    const [error, setError] = useState('');
    const [isLoginIssueSuccessful, setLoginIssueSuccessful] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleLoginIssueSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !message) {
            setError("All fields are required");
            return;
        }

        console.log("Form submitted successfully");
        handleLoginIssueSuccess();
    };

    const handleLoginIssueSuccess = () => {
        setLoginIssueSuccessful(true);
    };

    const closeLoginIssueModal = () => {
        setLoginIssueSuccessful(false);
    };

    return (
        <>
            <LoginIssueModal isOpen={isLoginIssueSuccessful} onClose={closeLoginIssueModal} />
            <div className="flex flex-col w-full mt-16">
                <Header title="Login Issues" />
                <div className="mt-8">
                    <div className="flex justify-center items-center mt-16">
                        <div className="p-5 w-2/3 border-none bg-[#f8f8f6] rounded-xl">
                            <div className="p-2 text-center">
                                <h1 className="text-4xl font-bold mb-4">Trouble logging in?</h1>
                                <p className="text-center font-medium text-2xl">Please contact our support team for assistance</p>
                            </div>
                            <form onSubmit={handleLoginIssueSubmit} className="space-y-4 mt-3">
                                <div>
                                    <label htmlFor="name" className="block">Name</label>
                                    <input type="text" id="name" name="name" className="w-full p-2 border rounded bg-gray-300" onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block">Email Address</label>
                                    <input type="email" id="email" name="email" className="w-full p-2 border rounded bg-gray-300" onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block">Your Message</label>
                                    <textarea id="message" name="message" rows="4" className="w-full p-2 border rounded bg-gray-300" onChange={(e) => setMessage(e.target.value)}></textarea>
                                </div>
                                <button type="submit" className="w-full bg-yellow-500 text-[#130128] p-2 rounded">Send Message</button>
                            </form>
                            {error && <p className="text-red-500">{error}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginIssue;

