const ContactPage = () => {



    return (
        <div>
            <div className="min-h-screen bg-gray-100 p-5">
                <h1 className="text-3xl font-bold mb-5 text-center mt-10">Contact Us</h1>
                <form

                    className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto"
                >

                    <div className="mb-4">
                        <label className="block text-gray-700" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"


                            required
                            className="mt-1 p-2 border border-gray-300 rounded w-full"
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"

                            required
                            className="mt-1 p-2 border border-gray-300 rounded w-full"
                            placeholder="Your Email"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"

                            required
                            className="mt-1 p-2 border border-gray-300 rounded w-full h-32"
                            placeholder="Your Message"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition duration-200"
                    >
                        Send Message
                    </button>
                </form>
            </div>


        </div>
    );
};

export default ContactPage;