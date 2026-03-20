import React, { useState } from "react";

const ProfileCard = ({ data, avatarStyle }) => {
  const { name, job, bio } = data;
  const avatarUrl = `https://api.dicebear.com/8.x/${avatarStyle}/svg?seed=${name || 'dynamic'}&backgroundColor=f1f5f9`;

  return (
    <div className="w-full max-w-sm mx-auto group perspective-1000">
      <div className="bg-white/90 backdrop-blur-2xl rounded-[3rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] border border-white transition-all duration-700 hover:shadow-indigo-200/50 hover:-translate-y-2">
        <div className="h-32 bg-linear-to-tr from-[#6366f1] via-[#a855f7] to-[#ec4899] relative">
          <div className="absolute inset-0 bg-black/5"></div>
        </div>
        <div className="pt-0 pb-12 px-8 text-center -mt-16 relative z-10">
          <div className="inline-block relative mb-6">
            <div className="w-32 h-32 rounded-full bg-white p-1.5 shadow-2xl transition-transform duration-500 group-hover:scale-105">
              <img 
                key={avatarUrl}
                src={avatarUrl} 
                alt="Avatar" 
                className="w-full h-full rounded-full bg-slate-50 object-cover border border-slate-100"
              />
            </div>
            <div className="absolute bottom-3 right-3 w-6 h-6 bg-green-500 border-4 border-white rounded-full animate-pulse"></div>
          </div>
          <div className="mb-8">
            <h2 className="text-3xl font-black text-slate-800 tracking-tighter leading-none mb-2 wrap-break-words">
              {name || "Username"}
            </h2>
            <p className="text-indigo-600 font-bold text-[10px] uppercase tracking-[0.2em]">
              {job || "Creative Mind"}
            </p>
          </div>
          <div className="flex justify-around items-center mb-8 px-4 py-4 bg-slate-50/50 rounded-2xl border border-slate-100">
            <div className="text-center">
              <p className="text-lg font-black text-slate-800">24</p>
              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Posts</p>
            </div>
            <div className="w-px h-8 bg-slate-200"></div>
            <div className="text-center">
              <p className="text-lg font-black text-slate-800">8.4k</p>
              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Followers</p>
            </div>
            <div className="w-px h-8 bg-slate-200"></div>
            <div className="text-center">
              <p className="text-lg font-black text-slate-800">512</p>
              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Following</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-5 mb-8 text-left border border-slate-100 shadow-sm min-h-25px flex items-center">
            <p className="text-slate-500 text-sm leading-relaxed italic font-medium wrap-break-words w-full">
              {bio ? `"${bio}"` : "Ketik bio kamu untuk melihat update real-time!"}
            </p>
          </div>
          <div className="flex gap-3">
            <button className="flex-3 py-4 bg-indigo-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all active:scale-95">
              Follow Me
            </button>
            <button className="flex-1 py-4 bg-slate-100 text-slate-500 rounded-2xl hover:bg-slate-200 transition-all flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785c-.442.496.103 1.228.72 1.056 1.15-.32 2.22-.857 3.144-1.573a1.139 1.139 0 0 1 .807-.254c.542.067 1.1.103 1.671.103Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [formData, setFormData] = useState({ name: "", job: "", bio: "" });
  const avatarOptions = [
    { id: 'avataaars', label: 'Person' },
    { id: 'pixel-art', label: 'Pixel' },
    { id: 'bottts', label: 'Robot' },
  ];
  const [selectedAvatar, setSelectedAvatar] = useState(avatarOptions[0].id);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-[#f1f5f9] flex items-center justify-center p-4 md:p-12 font-sans selection:bg-indigo-100">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-start">
        <div className="order-1 lg:order-1 space-y-6 md:space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-tight mb-2 text-center lg:text-left">
              Dynamic<br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-pink-500"> Profile Card.</span>
            </h1>
            <p className="text-slate-400 font-medium text-center lg:text-left text-sm md:text-base">
              Ubah identitas digitalmu secara real-time.
            </p>
          </div>
          <div className="bg-white p-5 md:p-6 rounded-4xl border border-slate-100 shadow-sm">
            <p className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 ml-1 text-center lg:text-left">
              Choose Avatar Style
            </p>
            <div className="grid grid-cols-3 gap-2 md:gap-3">
              {avatarOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedAvatar(opt.id)}
                  className={`py-2.5 md:py-3 rounded-2xl font-bold text-[10px] md:text-xs transition-all ${
                    selectedAvatar === opt.id 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200 scale-105' 
                    : 'bg-slate-50 text-slate-400 hover:bg-slate-100'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
          <div className="bg-white p-6 md:p-8 rounded-[2.5rem] shadow-sm border border-slate-100 space-y-4 md:space-y-6">
            <div className="space-y-1 md:space-y-2">
              <label className="text-[9px] md:text-[10px] font-black text-slate-300 uppercase tracking-widest ml-1">Full Name</label>
              <input name="name" placeholder="Siapa namamu?" onChange={handleChange} className="w-full p-3 md:p-4 bg-slate-50 border-none rounded-xl md:rounded-2xl focus:ring-4 focus:ring-indigo-500/10 transition-all outline-none font-bold text-slate-700 text-sm md:text-base" />
            </div>
            <div className="space-y-1 md:space-y-2">
              <label className="text-[9px] md:text-[10px] font-black text-slate-300 uppercase tracking-widest ml-1">Job Title</label>
              <input name="job" placeholder="Pekerjaanmu?" onChange={handleChange} className="w-full p-3 md:p-4 bg-slate-50 border-none rounded-xl md:rounded-2xl focus:ring-4 focus:ring-indigo-500/10 transition-all outline-none font-bold text-slate-700 text-sm md:text-base" />
            </div>
            <div className="space-y-1 md:space-y-2">
              <label className="text-[9px] md:text-[10px] font-black text-slate-300 uppercase tracking-widest ml-1">Bio</label>
              <textarea name="bio" placeholder="Bio singkat..." onChange={handleChange} className="w-full p-3 md:p-4 bg-slate-50 border-none rounded-xl md:rounded-2xl focus:ring-4 focus:ring-indigo-500/10 transition-all outline-none font-bold text-slate-700 h-24 md:h-28 resize-none text-sm md:text-base" />
            </div>
          </div>
        </div>
        <div className="order-2 lg:order-2 flex flex-col items-center py-8 lg:py-0 relative">
          <div className="text-center mb-6 hidden lg:block">
            <span className="px-4 py-1.5 bg-white rounded-full text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] border border-slate-100">Live Render</span>
          </div>
          <ProfileCard data={formData} avatarStyle={selectedAvatar} />
          <div className="absolute -z-10 w-48 h-48 md:w-64 md:h-64 bg-indigo-400/10 rounded-full blur-[80px] md:blur-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
