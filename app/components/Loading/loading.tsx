import React from "react";

const Loading = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="h-12 w-12 rounded-full border-4 border-t-4 border-gray-200 border-t-blue-500 animate-spin"></div>
      </div>
    </div>
  );
};

export default Loading;
