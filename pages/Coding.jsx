import { FaGithub, FaCode, FaExternalLinkAlt } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

export default function Coding() {
  return (
    <section id="coding" className="py-20 px-6 bg-slate-50 text-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Coding <span className="text-blue-500">Platform</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 md:h-[500px]">

          {/* ================= LeetCode ================= */}
          <div className="md:col-span-2 md:row-span-2 p-8 rounded-3xl 
                          bg-white border border-gray-200 shadow-xl flex flex-col justify-between">
            
            <div className="flex justify-between items-start">
              <div>
                <SiLeetcode className="text-5xl text-[#FFA116] mb-2" />
                <h3 className="text-2xl font-bold">LeetCode</h3>
                <p className="text-sm text-gray-500">Problem Solving Dashboard</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold">150+</p>
                <p className="text-sm text-gray-500">Solved</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="p-4 rounded-xl bg-green-50">
                <p className="text-xs text-green-700 font-medium">Easy</p>
                <p className="text-lg font-bold">92</p>
              </div>
              <div className="p-4 rounded-xl bg-yellow-50">
                <p className="text-xs text-yellow-700 font-medium">Medium</p>
                <p className="text-lg font-bold">57</p>
              </div>
              <div className="p-4 rounded-xl bg-red-50">
                <p className="text-xs text-red-700 font-medium">Hard</p>
                <p className="text-lg font-bold">5</p>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex justify-between text-xs mb-1 text-gray-500">
                <span>Easy / Medium / Hard</span>
                <span>4 Attempting</span>
              </div>
              <div className="flex h-2 gap-1">
                <div className="w-[60%] bg-green-500 rounded-full" />
                <div className="w-[30%] bg-yellow-400 rounded-full" />
                <div className="w-[10%] bg-red-400 rounded-full" />
              </div>
            </div>

            <div className="mt-6 pt-4 border-t flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Badges</p>
                <p className="font-semibold">2</p>
                <p className="text-xs text-gray-400">100 Days Badge 2025</p>
              </div>
              <a href="#" className="flex items-center gap-2 text-sm text-[#FFA116] font-medium">
                View Profile <FaExternalLinkAlt size={12} />
              </a>
            </div>
          </div>

          {/* ================= GitHub ================= */}
          <div className="md:col-span-2 p-6 rounded-3xl 
                          bg-gradient-to-br from-gray-900 to-gray-800 
                          text-white shadow-xl flex justify-between items-center">
            <div>
              <FaGithub className="text-4xl mb-3" />
              <h3 className="text-xl font-bold">GitHub</h3>
              <p className="text-sm text-gray-300">
                160+ contributions this year
              </p>
            </div>

            <div className="hidden md:block">
              <div className="grid grid-cols-4 gap-1">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-sm ${
                      i % 3 === 0 ? "bg-green-500" : "bg-green-900"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ================= GFG ================= */}
          <div className="p-6 rounded-3xl bg-white border border-gray-200 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <SiGeeksforgeeks className="text-3xl text-[#298D46]" />
              <h3 className="font-bold text-lg">GeeksforGeeks</h3>
            </div>

            <p className="text-sm text-gray-500">Problems Solved</p>
            <p className="text-3xl font-bold mb-4">230+</p>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-green-600">Easy</span>
                <span>190</span>
              </div>
              <div className="flex justify-between">
                <span className="text-yellow-600">Medium</span>
                <span>39</span>
              </div>
              <div className="flex justify-between">
                <span className="text-red-600">Hard</span>
                <span>2</span>
              </div>
            </div>
          </div>

          {/* ================= Skillrack ================= */}
          <div className="p-6 rounded-3xl bg-white border border-gray-200 shadow-lg">
            <FaCode className="text-3xl text-sky-500 mb-3" />
            <h3 className="font-bold text-lg">Skillrack</h3>
            <p className="text-sm text-gray-500 mt-2">
              Problems Solved
            </p>
            <p className="text-3xl font-bold mt-1">600+</p>
            <p className="text-xs text-sky-600 mt-2">
          
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
