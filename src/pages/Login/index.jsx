import { useState } from "react";
import { useUserStore } from "../../store/userStore";
import { useNavigate, Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaRobot } from "react-icons/fa";
import { useThemeStore } from "../../store/themeStore";
function Login() {
  const { theme } = useThemeStore();
  const { login, error, loading } = useUserStore();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const success = await login(email, password);

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
        via-blue-50
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

          backdrop-blur-sm

          bg-white/90
          dark:bg-slate-900/90

          border-slate-200
          dark:border-slate-800

          p-8
        "
      >
        {/* HEADER */}
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

              bg-blue-600
              text-white

              text-3xl

              mb-4
            "
          >
            <FaRobot />
          </div>

          <h1
            className="
              text-3xl
              font-bold

              text-slate-900
              dark:text-white
            "
          >
            Welcome Back
          </h1>

          <p
            className="
              mt-2

              text-slate-500
              dark:text-slate-400
            "
          >
            Sign in to your IT Self Service Portal
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleLogin} className="space-y-4">
          {/* EMAIL */}
          <div>
            <label
              className="
                block
                mb-2
                text-sm
                font-medium

                text-slate-700
                dark:text-slate-200
              "
            >
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

                  border-slate-300
                  dark:border-slate-700

                  outline-none

                  focus:ring-2
                  focus:ring-blue-500
                "
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div>
            <label
              className="
                block
                mb-2
                text-sm
                font-medium

                text-slate-700
                dark:text-slate-200
              "
            >
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
                placeholder="Enter your password"
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

                  border-slate-300
                  dark:border-slate-700

                  outline-none

                  focus:ring-2
                  focus:ring-blue-500
                "
              />
            </div>
          </div>

          {/* ERROR */}
          {error && (
            <div
              className="
                rounded-xl

                bg-red-50
                dark:bg-red-950/40

                border
                border-red-200
                dark:border-red-900

                text-red-600
                dark:text-red-300

                text-sm

                px-4
                py-3
              "
            >
              {error}
            </div>
          )}

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="   w-full

              py-3

              rounded-xl

              bg-blue-600
              hover:bg-blue-700

              text-white
              font-semibold

              transition
            "
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        {/* FOOTER */}
        <p
          className="
            text-center
            text-sm
            mt-6

            text-slate-500
            dark:text-slate-400
          "
        >
          Don't have an account?{" "}
          <Link
            to="/register"
            className="
              text-blue-600
              dark:text-blue-400

              font-medium
            "
          >
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
