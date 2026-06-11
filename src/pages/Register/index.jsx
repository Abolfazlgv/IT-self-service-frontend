import { useState } from "react";
import { useUserStore } from "../../store/userStore";
import { useNavigate, Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaUserPlus } from "react-icons/fa";

function Register() {
  const { register, error, loading } = useUserStore();

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const success = await register(name, email, password);

    if (success) {
      navigate("/", {
        replace: true,
      });
    }
  };

  return (
    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center

        bg-linear-to-br
        from-slate-100
        via-green-50
        to-slate-200

        dark:from-slate-950
        dark:via-slate-900
        dark:to-slate-950

        p-6
      "
    >
      <div
        className="
          w-full
          max-w-md

          rounded-3xl
          border
          shadow-2xl

          bg-white/90
          dark:bg-slate-900/90

          border-slate-200
          dark:border-slate-800

          backdrop-blur-sm

          p-8
        "
      >
        <div className="text-center mb-8">
          <div
            className="
              w-18
              h-18
              mx-auto

              rounded-2xl

              flex
              items-center
              justify-center

              bg-green-600
              text-white

              text-3xl
              mb-4
            "
          >
            <FaUserPlus />
          </div>

          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Create Account
          </h1>

          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Join the IT Self Service Portal
          </p>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          {/* NAME */}
          <div>
            <label className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
              Full Name
            </label>

            <div className="relative">
              <FaUser
                className="
                  absolute
                  left-3
                  top-1/2
                  -translate-y-1/2
                  text-slate-400
                "
              />

              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="
                  w-full
                  pl-10
                  pr-4
                  py-3

                  rounded-xl
                  border

                  bg-white
                  dark:bg-slate-800

                  text-slate-900
                  dark:text-white

                  placeholder:text-slate-400
                  dark:placeholder:text-slate-500

                  border-slate-300
                  dark:border-slate-700

                  outline-none

                  focus:ring-2
                  focus:ring-green-500
                "
              />
            </div>
          </div>

          {/* EMAIL */}
          <div>
            <label className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
              Email
            </label>

            <div className="relative">
              <FaEnvelope
                className="
                  absolute
                  left-3
                  top-1/2
                  -translate-y-1/2
                  text-slate-400
                "
              />

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="
                  w-full
                  pl-10
                  pr-4
                  py-3

                  rounded-xl
                  border

                  bg-white
                  dark:bg-slate-800

                  text-slate-900
                  dark:text-white

                  placeholder:text-slate-400
                  dark:placeholder:text-slate-500

                  border-slate-300
                  dark:border-slate-700

                  outline-none

                  focus:ring-2
                  focus:ring-green-500
                "
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div>
            <label className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
              Password
            </label>

            <div className="relative">
              <FaLock
                className="
                  absolute
                  left-3
                  top-1/2
                  -translate-y-1/2
                  text-slate-400
                "
              />

              <input
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="
                  w-full
                  pl-10
                  pr-4
                  py-3

                  rounded-xl
                  border

                  bg-white
                  dark:bg-slate-800

                  text-slate-900
                  dark:text-white

                  placeholder:text-slate-400
                  dark:placeholder:text-slate-500

                  border-slate-300
                  dark:border-slate-700

                  outline-none

                  focus:ring-2
                  focus:ring-green-500
                "
              />
            </div>
          </div>

          {error && (
            <div
              className="
                rounded-xl
                border

                bg-red-50
                dark:bg-red-950/40

                border-red-200
                dark:border-red-900

                text-red-600
                dark:text-red-400

                text-sm

                px-4
                py-3
              "
            >
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              py-3

              rounded-xl

              bg-green-600
              hover:bg-green-700

              text-white
              font-semibold

              transition
            "
          >
            {loading ? "Creating..." : "Create Account"}
          </button>
        </form>

        <p className="text-center text-sm mt-6 text-slate-500 dark:text-slate-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="
              text-green-600
              dark:text-green-400
              font-medium
            "
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
