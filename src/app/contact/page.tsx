'use client';

import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
        ...prev,
        [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    alert('Thank you for your message!');
    setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section className="py-12 bg-gradient-to-b from-rose-50 via-fuchsia-50 to-orange-50">
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Get In Touch</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Contact Information</h2>
                <div className="space-y-4 text-gray-600">
                <p>
                    <strong>Email:</strong> Omaradan091@Gmail.com
                </p>
                <p>
                    <strong>Phone:</strong> (+254) 712-149-713
                </p>
                <p>
                    <strong>Phone:</strong> (+254) 724-654-234
                </p>
                <p>
                    <strong>Location:</strong> Nairobi, Kenya
                </p>
            </div>
            
            <div className="mt-8">
                <h3 className="text-xl font-medium text-gray-700 mb-4">Follow Me On</h3>
                <div className="flex space-x-4">
                    <a href="#" className="text-blue-600 hover:text-blue-800">GitHub</a>
                    <a href="#" className="text-blue-600 hover:text-blue-800">LinkedIn</a>
                    <a href="#" className="text-blue-600 hover:text-blue-800">Twitter</a>
                </div>
                </div>
            </div>
            
            <div>
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>
                
                <div>
                    <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                
                <div>
                <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                </div>
                
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                    Send Message
                </button>
                </form>
            </div>
            </div>
        </div>
        </section>
    );
}