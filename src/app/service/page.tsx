import React from "react";

const page = () => {
  return (
    <div className="bg-cyan-500 min-h-screen">
      <div>
        <section className="text-gray-600 body-font w-full h-full">
          <div className="w-full  px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4 text-center">
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                  2.7K
                </h2>
                <p className="leading-relaxed">Users</p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                  1.8K
                </h2>
                <p className="leading-relaxed">Subscribes</p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                  35
                </h2>
                <p className="leading-relaxed">Downloads</p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                  4
                </h2>
                <p className="leading-relaxed">Products</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="text-white bg-cyan-600 body-font w-full py-24">
          <div className="w-full px-5 mx-auto text-center">
            <h2 className="text-3xl font-medium mb-4">Ready to Get Started?</h2>
            <p className="mb-8 text-lg">
              Join thousands of satisfied users who are already using our
              services to grow their business
            </p>
            <a
              href="/"
              className="inline-flex text-white bg-cyan-700 border-0 py-2 px-8 focus:outline-none hover:bg-cyan-600 rounded text-lg"
            >
              Get Started
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
