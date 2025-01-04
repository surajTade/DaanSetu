import logo from '../assets/logo.png';
import { useState } from 'react';

export default function Signup() {
    const [userType, setUserType] = useState('Doner');

    return (
        <div>
            <div className="flex min-h-screen flex-1 bg-black flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img alt="DaanSetu" src={logo} className="mx-auto h-10 w-auto" />
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
                        Sign Up for an account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form action="#" method="POST" className="space-y-6">
                        <div>
                            <label htmlFor="first-name" className="block text-sm/6 font-medium text-white">
                                First Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="first-name"
                                    name="first-name"
                                    type="text"
                                    required
                                    className="block w-full rounded-md bg-black px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="last-name" className="block text-sm/6 font-medium text-white">
                                Last Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="last-name"
                                    name="last-name"
                                    type="text"
                                    required
                                    className="block w-full rounded-md bg-black px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-white">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    className="block w-full rounded-md bg-black px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm/6 font-medium text-white">
                                Phone Number
                            </label>
                            <div className="mt-2">
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    required
                                    className="block w-full rounded-md bg-black px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm/6 font-medium text-white">
                                Create Password
                            </label>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="new-password"
                                    className="block w-full rounded-md bg-black px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="retype-password" className="block text-sm/6 font-medium text-white">
                                Retype Password
                            </label>
                            <div className="mt-2">
                                <input
                                    id="retype-password"
                                    name="retype-password"
                                    type="password"
                                    required
                                    autoComplete="new-password"
                                    className="block w-full rounded-md bg-black px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="address" className="block text-sm/6 font-medium text-white">
                                Address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="address"
                                    name="address"
                                    type="text"
                                    required
                                    className="block w-full rounded-md bg-black px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm/6 font-medium text-white">User Type</label>
                            <div className="mt-2 flex space-x-4">
                                <button
                                    type="button"
                                    onClick={() => setUserType('Doner')}
                                    className={`px-3 py-1.5 rounded-md text-sm/6 font-semibold ${
                                        userType === 'Doner' ? 'bg-indigo-600 text-white' : 'bg-gray-300 text-black'
                                    }`}
                                >
                                    Doner
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setUserType('NGO')}
                                    className={`px-3 py-1.5 rounded-md text-sm/6 font-semibold ${
                                        userType === 'NGO' ? 'bg-indigo-600 text-white' : 'bg-gray-300 text-black'
                                    }`}
                                >
                                    NGO
                                </button>
                            </div>
                        </div>

                        {userType === 'NGO' && (
                            <>
                                <div>
                                    <label htmlFor="ngo-type" className="block text-sm/6 font-medium text-white">
                                        Type of NGO
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="ngo-type"
                                            name="ngo-type"
                                            type="text"
                                            required
                                            className="block w-full rounded-md bg-black px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="registration-date" className="block text-sm/6 font-medium text-white">
                                        Date of Registration
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="registration-date"
                                            name="registration-date"
                                            type="date"
                                            required
                                            className="block w-full rounded-md bg-black px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="issued-address" className="block text-sm/6 font-medium text-white">
                                        Issued Address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="issued-address"
                                            name="issued-address"
                                            type="text"
                                            required
                                            className="block w-full rounded-md bg-black px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="fcra-number" className="block text-sm/6 font-medium text-white">
                                        FCRA Number
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="fcra-number"
                                            name="fcra-number"
                                            type="text"
                                            required
                                            className="block w-full rounded-md bg-black px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="alternate-phone" className="block text-sm/6 font-medium text-white">
                                        Alternate Phone No
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="alternate-phone"
                                            name="alternate-phone"
                                            type="tel"
                                            required
                                            className="block w-full rounded-md bg-black px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="website" className="block text-sm/6 font-medium text-white">
                                        Website
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="website"
                                            name="website"
                                            type="url"
                                            required
                                            className="block w-full rounded-md bg-black px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                            </>
                        )}

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Register
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm/6 text-gray-500">
                        Already have an account?{' '}
                        <a href="/signin" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Sign In
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}