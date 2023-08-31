import { Link } from "react-router-dom";
import heroImage from "../assets/images/output-onlinepngtools 1.png"; // Replace with your image path

const HeroBanner = () => {
  return (
    <div className="bg-gradient-to-b from-blue-500 via-blue-400 to-blue-300 relative">
      <nav className="bg-white py-4 px-6 flex justify-between items-center">
      
        <div className="text-blue-500 text-2xl font-bold">
          <span className="text-yellow-400">Your</span> Dash Cow
        </div>

        
        <Link
          to="/auth"
          className="bg-yellow-400 text-blue-500 px-4 py-2 rounded-full font-semibold hover:bg-yellow-300 hover:text-blue-400"
        >
          Login
        </Link>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto py-20 text-white text-center">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="lg:w-1/2 lg:pr-8">
            <h1 className="text-5xl font-bold mb-4">
              Welcome to Your Dash Cow
            </h1>
            <p className="text-lg mb-8">
              Discover the freshest milk products from our farm.
            </p>
            <div className="space-x-4">
              <Link
                to="/products"
                className="bg-yellow-400 text-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 hover:text-blue-400 transition duration-300"
              >
                Explore Products
              </Link>
              <Link
                to="/about"
                className="bg-transparent border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-500 hover:border-blue-500 transition duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <img
              src={heroImage}
              alt="Milk Production"
              className="mx-auto h-auto lg:h-96 w-full lg:w-auto mb-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
