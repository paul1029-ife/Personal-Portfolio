const articles = [
  {
    id: 1,
    title: "How to Find Meaning in Life",
    date: "24 October, 2024",
    description: "Explore ways to discover meaning and purpose through faith, philosophy, and self-reflection.",
    image: "https://i.pinimg.com/564x/6b/c8/47/6bc84734b2d77f55be0ed5a1161f5dad.jpg",
  },
  {
    id: 2,
    title: "The Importance of Self-Expression",
    date: "TBD",
    description: "Understanding how expressing yourself can lead to greater clarity and creativity in life.",
    image: "https://i.pinimg.com/enabled_hi/564x/bf/95/b2/bf95b293aa8a0976d9e18d48014253e1.jpg", // Replace with your image path
  },
  {
    id: 3,
    title: "Balancing Work and Personal Growth",
    date: "TBD",
    description: "Learn to prioritize personal development while building a career in tech.",
    image: "https://i.pinimg.com/enabled_hi/564x/9a/df/69/9adf69928709f2ca1f5c211b113759ab.jpg", // Replace with your image path
  },
];

const ArticlePage = () => {
  return (
    <section className="min-h-screen bg-gray-100 py-16 px-6 md:px-12 lg:px-36">
      <div className="container mx-auto">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Read My Articles</h2>
          <p className="text-lg text-gray-600">Insights and thoughts on life, growth, and creativity</p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {articles.map((article) => (
            <div key={article.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{article.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{article.date}</p>
                <p className="mt-2 text-gray-600">{article.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-12">
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-transform ease-out">
            Load more <span className="ml-2">🔗</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ArticlePage;
