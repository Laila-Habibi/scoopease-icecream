import React from 'react';
import Image from 'next/image';

interface CircularImageWithBorderTextProps {
  imageUrl: string;
  imageSize?: number;
  borderColor?: string;
  borderWidth?: number;
  textContent?: string;
  textColor?: string;
}

const CircularImageWithBorderText: React.FC<CircularImageWithBorderTextProps> = ({
  imageUrl,
  imageSize = 450,
  borderColor = 'border-blue-500',
  borderWidth = 4,
  textContent = 'Text along the border',
  textColor = 'text-gray-800',
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={`
          relative
          w-${imageSize} h-${imageSize}
          rounded-full
          ${borderColor}
          border-${borderWidth}
          flex items-center justify-center
          overflow-hidden
        `}
      >
        <Image
          src={imageUrl}
          alt="Circular Image"
          className="rounded-full"
          height={imageSize}
          width={imageSize}
        />
        <div
          className={`
            absolute
            top-0 left-0 w-full h-full
            flex items-center justify-center
            text-${textColor}
            font-bold
            text-sm
            transform rotate-45
          `}
        >
          <span className="whitespace-nowrap">
            <span className="inline-block transform -rotate-45">
              {textContent}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CircularImageWithBorderText;