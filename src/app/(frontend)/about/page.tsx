'use client'
import { Button } from '@nextui-org/button';
import { Image } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';

const AboutPage = () => {
    return (
        <div className="min-h-screen ">
           
           <section
    className="relative bg-slate-700/35 py-20 bg-cover bg-center"
    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdyb3VwJTIwdHJhdmVsfGVufDB8fDB8fHww')" }}
>
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/50"></div>
    
    <div className="container mx-auto text-center relative z-10">
        <h1 className="text-4xl font-bold text-white mb-4">About Us</h1>
        <p className="text-lg max-w-2xl mx-auto text-white">
            We are committed to providing top-notch services that cater to your needs.
            Our team of experts works tirelessly to ensure a seamless experience for our clients.
        </p>
    </div>
</section>


        
            <section className="py-20 bg-slate-900/85">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
                    <p className="text-lg max-w-3xl mx-auto">
                        Our mission is to innovate and lead in the industry by providing unparalleled customer service,
                        quality products, and a commitment to excellence. We strive to bring a positive impact to our clients 
                        and the community.
                    </p>
                </div>
            </section>

          
            <section className="bg-slate-700/85 py-20">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                       
                        <div className=" rounded-lg p-6 flex flex-col items-center justify-center text-center">
                            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn9zilY2Yu2hc19pDZFxgWDTUDy5DId7ITqA&s" alt="Team Member 1" className="w-32 h-32 mx-auto object-cover rounded-full mb-4" />
                            <h3 className="text-xl font-semibold">John Doe</h3>
                            <p className="">CEO & Founder</p>
                            <p className="mt-2">
                                John is a visionary leader with over 15 years of experience in the industry, 
                                passionate about creating value for customers.
                            </p>
                        </div>

                       
                        <div className=" rounded-lg p-6 flex flex-col items-center justify-center text-center">
                            <Image src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Team Member 2" className="w-32 object-cover h-32 mx-auto rounded-full mb-4" />
                            <h3 className="text-xl font-semibold">Jane Smith</h3>
                            <p className="">Chief Operating Officer</p>
                            <p className="mt-2">
                                Jane leads our operations team with efficiency and expertise, ensuring smooth processes and customer satisfaction.
                            </p>
                        </div>

                      
                        <div className=" rounded-lg p-6 flex flex-col items-center justify-center text-center">
                            <Image src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Team Member 3" className="w-32 object-cover h-32 mx-auto rounded-full mb-4" />
                            <h3 className="text-xl font-semibold">Mark Lee</h3>
                            <p className="">Head of Development</p>
                            <p className="mt-2">
                                Mark is a tech-savvy leader who drives our innovation and leads the team of developers with a passion for problem-solving.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            
            <section className="py-20 ">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Integrity</h3>
                            <p className="">
                                We believe in honesty and transparency in all our dealings with clients and partners.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                            <p className="">
                                We strive for excellence in everything we do, from service delivery to customer support.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                            <p className="">
                                Innovation is at the heart of our business, and we constantly push the boundaries to deliver cutting-edge solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

         
            <section className="py-20 bg-slate-800/85">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
                    <p className="text-lg max-w-xl mx-auto mb-8">
                        We&#39;d love to hear from you! Whether you have a question or need assistance, our team is here to help.
                    </p>
                    <Link href="/contact" className="bg-blue-600 text-white py-3 px-6 rounded-full font-bold hover:bg-blue-500">
                        Contact Us
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
