import React from 'react';
import Spline from '@splinetool/react-spline';

const System = () => {
  return (
    <div
      className="
        relative w-full min-h-screen overflow-hidden
        md:min-h-[100dvh]
      "
      style={{
        // For browsers that support 100dvh (dynamic viewport)
        minHeight: '100svh',
      }}
    >
      <div className="absolute inset-0 w-full h-full">
        <Spline
          scene="https://prod.spline.design/w0rsATDfzYTUPxtX/scene.splinecode"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default System;
