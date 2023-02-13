import React from "react";

function Loading() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <img src={require(`../../assets/other/loading.png`)} alt="loading" />
    </div>
  );
}

export default Loading;
