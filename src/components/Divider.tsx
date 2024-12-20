'use client';

import React from 'react';

type DividerProps = {
  width?: string;
  borderColor?: string;
};

const Divider = ({
  width = 'w-full',
  borderColor = 'border-gray-200',
}: DividerProps) => {
  return (
    <div className="relative">
      <div aria-hidden="true" className="absolute inset-0 flex items-center">
        <div className={`${width} border-t ${borderColor}`} />
      </div>
    </div>
  );
};

export default Divider;
