import Link from "next/link";
const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <header className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
          <p className="text-lg mb-6">Discover amazing stories, insights, and ideas from our writers.</p>
         
        </div>
      </header>

      {/* Featured Posts Section */}
      <section className="max-w-7xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Single Post Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJsb2clMjB3ZWJzfGVufDB8fDB8fHww" alt="Post Thumbnail" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Post Title 1</h3>
              <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsb2clMjB3ZWJzfGVufDB8fDB8fHww" alt="Post Thumbnail" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Post Title 2</h3>
              <p className="text-gray-700 mb-4">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJsb2clMjB3ZWJzfGVufDB8fDB8fHww" alt="Post Thumbnail" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Post Title 3</h3>
              <p className="text-gray-700 mb-4">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Categories Section */}
      <section className="bg-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Explore Categories</h2>
          <div className="flex justify-center space-x-4">
            <span className="bg-gray-900 text-white py-2 px-6 rounded-full hover:bg-gray-700 transition">Technology</span>
            <span className="bg-gray-900 text-white py-2 px-6 rounded-full hover:bg-gray-700 transition">Health</span>
            <span className="bg-gray-900 text-white py-2 px-6 rounded-full hover:bg-gray-700 transition">Lifestyle</span>
            <span className="bg-gray-900 text-white py-2 px-6 rounded-full hover:bg-gray-700 transition">Travel</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 Blogging Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
