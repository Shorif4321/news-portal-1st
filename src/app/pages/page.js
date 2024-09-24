// pages/services.js

const services = [
    {
        title: 'Web Development',
        description: 'Building responsive and scalable web applications. We specialize in modern frameworks like React and Next.js to create dynamic user experiences.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVp-B_c-xl6N2nCVcSi5xFhmJX8svEUzNofw&s', // Make sure to add this image
    },
    {
        title: 'Mobile App Development',
        description: 'Creating cross-platform mobile applications using React Native and Flutter, allowing you to reach a wider audience with a single codebase.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVp-B_c-xl6N2nCVcSi5xFhmJX8svEUzNofw&s', // Add this image
    },
    {
        title: 'SEO Optimization',
        description: 'Improving website visibility on search engines through targeted keyword strategies, backlinking, and on-page optimization.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVp-B_c-xl6N2nCVcSi5xFhmJX8svEUzNofw&s', // Add this image
    },
    {
        title: 'Digital Marketing',
        description: 'Strategies to enhance online presence and engagement through social media marketing, email campaigns, and content creation.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVp-B_c-xl6N2nCVcSi5xFhmJX8svEUzNofw&s', // Add this image
    },
    {
        title: 'UI/UX Design',
        description: 'Designing user-friendly and aesthetically pleasing interfaces that enhance user engagement and satisfaction.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVp-B_c-xl6N2nCVcSi5xFhmJX8svEUzNofw&s',// Add this image
    },
    {
        title: 'Cloud Services',
        description: 'Providing cloud solutions for your business needs, including cloud storage, computing, and data management.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVp-B_c-xl6N2nCVcSi5xFhmJX8svEUzNofw&s', // Add this image
    },
    {
        title: 'Web Development',
        description: 'Building responsive and scalable web applications. We specialize in modern frameworks like React and Next.js to create dynamic user experiences.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVp-B_c-xl6N2nCVcSi5xFhmJX8svEUzNofw&s', // Make sure to add this image
    },
    {
        title: 'Mobile App Development',
        description: 'Creating cross-platform mobile applications using React Native and Flutter, allowing you to reach a wider audience with a single codebase.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVp-B_c-xl6N2nCVcSi5xFhmJX8svEUzNofw&s', // Add this image
    },
    {
        title: 'SEO Optimization',
        description: 'Improving website visibility on search engines through targeted keyword strategies, backlinking, and on-page optimization.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVp-B_c-xl6N2nCVcSi5xFhmJX8svEUzNofw&s', // Add this image
    },
    {
        title: 'Digital Marketing',
        description: 'Strategies to enhance online presence and engagement through social media marketing, email campaigns, and content creation.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVp-B_c-xl6N2nCVcSi5xFhmJX8svEUzNofw&s', // Add this image
    },
    {
        title: 'UI/UX Design',
        description: 'Designing user-friendly and aesthetically pleasing interfaces that enhance user engagement and satisfaction.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVp-B_c-xl6N2nCVcSi5xFhmJX8svEUzNofw&s',// Add this image
    },
    {
        title: 'Cloud Services',
        description: 'Providing cloud solutions for your business needs, including cloud storage, computing, and data management.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVp-B_c-xl6N2nCVcSi5xFhmJX8svEUzNofw&s', // Add this image
    },
];

const ServicesPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-5">
            <h1 className="text-3xl font-bold mb-5 text-center">Our Services</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {services.map((service, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
                            <p className="text-gray-700">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesPage;
