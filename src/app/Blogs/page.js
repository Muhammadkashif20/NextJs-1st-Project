import React from 'react';

const BlogPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-gray-900 text-white py-10 text-center">
        <h1 className="text-4xl font-bold">My Blog</h1>
        <p className="text-lg mt-2">Sharing my thoughts and ideas.</p>
      </header>

      {/* Blog Posts Section */}
      <section className="max-w-6xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Blog Post Card 1 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMGludGVyYWN0aXZlfGVufDB8fDB8fHww" alt="Blog Post 1" className="w-full h-40 object-cover" />
          <div className="p-4">
            <h2 className="font-bold text-xl">Blog Post 1</h2>
            <p className="text-gray-600 mt-2">This is a brief description of blog post 1.</p>
            <a href="#" className="text-blue-500 hover:underline mt-2 block">Read more</a>
          </div>
        </div>

        {/* Blog Post Card 2 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="https://images.unsplash.com/photo-1439405326854-014607f694d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2VhfGVufDB8fDB8fHww" alt="Blog Post 2" className="w-full h-40 object-cover" />
          <div className="p-4">
            <h2 className="font-bold text-xl">Blog Post 2</h2>
            <p className="text-gray-600 mt-2">This is a brief description of blog post 2.</p>
            <a href="#" className="text-blue-500 hover:underline mt-2 block">Read more</a>
          </div>
        </div>

        {/* Blog Post Card 3 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="https://images.unsplash.com/photo-1722096703718-a04f14ecde52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8NDAwJTIweCUyMDIwMHxlbnwwfHwwfHx8MA%3D%3D" alt="Blog Post 3" className="w-full h-40 object-cover" />
          <div className="p-4">
            <h2 className="font-bold text-xl">Blog Post 3</h2>
            <p className="text-gray-600 mt-2">This is a brief description of blog post 3.</p>
            <a href="#" className="text-blue-500 hover:underline mt-2 block">Read more</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>&copy; 2024 My Blog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default BlogPage;
