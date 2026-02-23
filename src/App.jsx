import React, { useState } from "react";
import ProfileCard from "./components/ProfilCard";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    job: "",
    bio: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4">
      <div className="max-w-3xl w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-8 text-center tracking-tight">
          InstantIdentity
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-xs font-bold text-gray-400 uppercase mb-4 tracking-wider">
              Input Data
            </h3>
            <div className="space-y-4">
              <input
                name="name"
                placeholder="Nama Lengkap"
                onChange={handleChange}
                className="w-full p-2 border-b border-gray-200 outline-none focus:border-blue-500 transition-all text-sm"
              />
              <input
                name="job"
                placeholder="Pekerjaan"
                onChange={handleChange}
                className="w-full p-2 border-b border-gray-200 outline-none focus:border-blue-500 transition-all text-sm"
              />
              <textarea
                name="bio"
                placeholder="Bio Singkat"
                onChange={handleChange}
                className="w-full p-2 border border-gray-200 rounded outline-none focus:border-blue-500 h-24 resize-none text-sm"
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-lg p-6 bg-white/50">
            <p className="text-[10px] font-bold text-gray-400 uppercase mb-4 tracking-[0.2em]">
              Preview
            </p>

            <ProfileCard data={formData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
