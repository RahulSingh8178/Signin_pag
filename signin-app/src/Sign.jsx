import { useState } from "react";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* Sign In Title */}
        <h2 className="text-3xl font-bold mb-6 text-gray-900">SIGN IN</h2>

        <form>
          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email ID
            </label>
            <div className="relative">
             <input
      type="email"
      placeholder="Enter email id / username"
      className="w-full p-3 pr-10 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      required
    />
          
            </div>
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="w-full p-3 pr-10 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                {/* Toggle Password Image Placeholder */}
                <img
                  src={showPassword ? "/blind.png" : "/blind.png"}
                  alt="Toggle Password"
                  className="w-5 h-5"
                />
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between items-center text-sm mb-6">
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <label>Remember me</label>
            </div>
            <a href="#" className="text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700">
            Login
          </button>

          {/* Social Login */}
          <div className="text-center mt-6">
            <p className="text-sm">or login with</p>
            <div className="flex justify-center space-x-4 mt-2">
              <button className="p-2 border rounded-full">
                <img src="/google.png" alt="Google" className="w-6" />
              </button>
              <button className="p-2 border rounded-full">
                <img src="/facebook.png" alt="Facebook" className="w-6" />
              </button>
              <button className="p-2 border rounded-full">
                <img src="/linkedin.png" alt="LinkedIn" className="w-6" />
              </button>
            </div>
          </div>

          {/* Register Link */}
          <p className="text-sm text-center mt-4">
            Do not have an account?{" "}
            <a href="http://localhost:5175/" className="text-blue-600 font-medium hover:underline">
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;