import Image from 'next/image';
import React from 'react';

const AboutPage = () => {
    return (
        <div>
            <main className="container mx-auto my-10 px-4">
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                    <p className="text-gray-700">
                        Our mission is to deliver accurate, timely, and insightful news to our readers. We aim to inform, educate, and engage our community through high-quality journalism.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Integrity</li>
                        <li>Transparency</li>
                        <li>Inclusivity</li>
                        <li>Innovation</li>
                        <li>Accountability</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white p-4 rounded shadow">
                            <Image src="https://via.placeholder.com/150" alt="Team Member" className="rounded-full w-32 h-32 mx-auto mb-4" width={300} height={300} />
                            <h3 className="text-lg font-bold">John Doe</h3>
                            <p className="text-gray-600">Editor-in-Chief</p>
                        </div>
                        <div className="bg-white p-4 rounded shadow">
                            <Image src="https://via.placeholder.com/150" alt="Team Member" className="rounded-full w-32 h-32 mx-auto mb-4" width={300} height={300} />
                            <h3 className="text-lg font-bold">Jane Smith</h3>
                            <p className="text-gray-600">Lead Journalist</p>
                        </div>
                        <div className="bg-white p-4 rounded shadow">
                            <Image src="https://via.placeholder.com/150" alt="Team Member" className="rounded-full w-32 h-32 mx-auto mb-4" width={300} height={300} />
                            <h3 className="text-lg font-bold">Alice Johnson</h3>
                            <p className="text-gray-600">Social Media Manager</p>
                        </div>
                        {/* Add more team members as needed */}
                    </div>
                </section>
            </main>

        </div>
    );
};

export default AboutPage;