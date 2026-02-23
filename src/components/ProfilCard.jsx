import React from 'react';

const ProfileCard = ({ data }) => {
  return (
    <div className="w-64 bg-white border border-gray-200 rounded-lg p-5 shadow-sm text-center">
      {/* Inisial Nama */}
      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
        <span className="text-xl font-bold text-gray-600">
          {data.name ? data.name.charAt(0).toUpperCase() : "?"}
        </span>
      </div>
      
      {/* Konten yang dikirim dari Props */}
      <h2 className="text-lg font-bold text-gray-800">
        {data.name || "Nama Anda"}
      </h2>
      <p className="text-sm text-blue-600 font-medium mb-3">
        {data.job || "Pekerjaan"}
      </p>
      
      <div className="border-t border-gray-100 pt-3">
        <p className="text-xs text-gray-500 leading-relaxed">
          {data.bio || "Deskripsi singkat akan muncul di sini."}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
