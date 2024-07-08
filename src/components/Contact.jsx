import React from 'react';
import Profile from './Profile';
import LinkedIn from '../assets/In-Blue-40.png';
import GitHub from '../assets/github-mark-white.png';
import Gmail from '../assets/gmail_icon.png';

function Contact() {
    return (
        <div>
        <Profile />

        <div class="max-w-screen-lg mx-auto p-5">
    <div class="grid grid-cols-1 lg:grid-cols-12 border">
        <div class="bg-cyan-500 md:col-span-4 p-10 text-white">

            <h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
                Get In <span class="text-pink-700">Touch</span>
            </h3>
            <p class="mt-4 leading-7 text-gray-200">Do you have constructive feedback, ideas, or want to discuss my career and potential projects?
            </p>
            <p class="mt-4 leading-7 text-gray-200">Reach out; I'd like to hear from you!
            </p>

            <a class="flex items-center mt-5" href="www.linkedin.com/in/katherine-bensley-89599624b">
                <img type="icon" src={ LinkedIn } class="bg-white rounded-md mr-5" />
                <span class="text-sm">www.linkedin.com/in/katherine-bensley-89599624b</span>
            </a>
            <a class="flex items-center mt-5" href="https://github.com/Katherine-Be">
            <img type="icon" src={ GitHub } class="size-10 mr-5" />
            <span class="text-sm">https://github.com/Katherine-Be</span>
            </a>
            <a class="flex items-center mt-5">
            <img type="icon" src={ Gmail } class="size-10 rounded-md mr-5" />
                <span class="text-sm">ka.alex.bensley@gmail.com</span>
            </a>

        </div>
        <form class="md:col-span-8 p-10">
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-first-name">
                        First Name
                    </label>
                    <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name" type="text" placeholder="Jane" />
                </div>
                <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-last-name">
                        Last Name
                    </label>
                    <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name" type="text" placeholder="Doe" />
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-password">
                        Email Address</label>

                    <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-email" type="email" placeholder="********@*****.**" />
                </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-password">
                        Your Message
                    </label>
                    <textarea rows="10"
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></textarea>
                </div>
                <div class="flex justify-between w-full px-3">
                    <div class="md:flex md:items-center">

                    </div>
                    <button
                        class="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                        type="submit">
                        Send Message
                    </button>
                </div>

            </div>

        </form>

    </div>
</div>


    </div>
    )
}

export default Contact;