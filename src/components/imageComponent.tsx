import React from "react";

interface DynamicImageProps {
  src: string;
  alt?: string;
  width?: string;
  height?: string;
}

const DynamicImage: React.FC<DynamicImageProps> = ({
  src,
  alt = "Image",
  width = "200px",
  height = "auto",
}) => {
  return (
    <div>
      <img src={src} alt={alt} style={{ width, height }} />
    </div>
  );
};

export default DynamicImage;
