import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import logo from "../assets/logo.jpeg";
import { authenticate, getDefaultRoute } from "../auth/mockAuth";

export default function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = authenticate(email, password);

    if (user) {
      localStorage.setItem("adminUser", JSON.stringify(user));
      navigate(getDefaultRoute(user));
    } else {
      alert("Email ou mot de passe incorrect");
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0B1020]">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-violet-600/20 blur-[150px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[150px]" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-10">
        <div className="grid w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div className="flex flex-col items-center justify-center p-10 lg:p-16">
            <motion.img
              src={logo}
              alt="Triova Media"
              className="w-48 md:w-64 rounded-2xl"
              animate={{
                y: [0, -12, 0],
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 text-center text-3xl font-bold text-white"
            >
              Welcome to Triova Media
            </motion.h1>

            <p className="mt-4 max-w-md text-center text-slate-300">
              Manage clients, services, quotations and projects from your
              administration dashboard.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center justify-center p-8 lg:p-16">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-md"
            >
              <h2 className="mb-2 text-3xl font-bold text-white">
                Admin Login
              </h2>

              <p className="mb-8 text-slate-400">
                Sign in to access your dashboard
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">

                {/* EMAIL */}
                <div>
                  <label className="mb-2 block text-sm text-slate-300">
                    Email Address
                  </label>

                  <div className="relative">
                    <Mail
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="email"
                      placeholder="email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="h-12 w-full rounded-xl border border-white/10 bg-white/5 pl-11 pr-4 text-white outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-500/20"
                    />
                  </div>
                </div>

                {/* PASSWORD */}
                <div>
                  <label className="mb-2 block text-sm text-slate-300">
                    Password
                  </label>

                  <div className="relative">
                    <Lock
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="h-12 w-full rounded-xl border border-white/10 bg-white/5 pl-11 pr-12 text-white outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-500/20"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                    >
                      {showPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>
                </div>

                {/* OPTIONS */}
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-slate-300">
                    <input
                      type="checkbox"
                      className="rounded border-slate-600"
                    />
                    Remember me
                  </label>

                  <button
                    type="button"
                    className="text-violet-400 hover:text-violet-300"
                  >
                    Forgot password?
                  </button>
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="h-12 w-full rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 font-semibold text-white transition duration-300 hover:scale-[1.02]"
                >
                  Sign In
                </button>

              </form>

              

            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}