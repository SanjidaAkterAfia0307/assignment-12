import React from 'react';

const Contact = () => {
    return (
        <div className='shadow-lg rounded-xl md:p-20 p-5 w-full bg-secondary text-slate-700  my-24'>
            <h1 className='text-4xl font-bold my-5 text-gray-600 text-center'>Contact Me</h1>
            <div className='md:flex px-3 justify-center'>
                <form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" className='flex  flex-col mt-12' action="https://formspree.io/f/xrgdnroz" method="post">

                    <label className='mt-5 mb-2 text-xl font-medium' for="full-name">Full Name</label>
                    <input className="input input-bordered w-full max-w-xs" value="" type="text" name="name" id="full-name" placeholder="First and Last" required="" />
                    <label className='mt-5 mb-2 text-xl font-medium' for="email-address">Email Address</label>
                    <input className="input input-bordered w-full max-w-xs" type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required="" />
                    <label className='mt-5 mb-2 text-xl font-medium' for="message">Message</label>
                    <textarea className="textarea w-full textarea-bordered md:w-96" name="message" id="message" placeholder="Your Text" required=""></textarea>

                    <div >
                        <input className='flex my-5 hover:bg-primary hover:text-white btn bg-white border-none text-primary text-lg' type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;