import React, { useState, useEffect } from "react";
import Image from "next/image";

interface FallbackImageProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
}

const FallbackImage = ({
  src,
  alt,
  fallbackSrc = "/images/fallback.jpg",
  ...props
}: FallbackImageProps) => {
  const [imgSrc, setSrc] = useState(src);

  useEffect(() => {
    setSrc(src);
  }, [src]);

  return (
    <Image
      {...props}
      src={`/api/imageProxy?url=${encodeURI(imgSrc)}`}
      alt={alt}
      onError={() => setSrc(fallbackSrc)}
      onLoadingComplete={(result) => {
        if (!result || result.naturalWidth * result.naturalHeight === 0) {
          setSrc(fallbackSrc);
        }
      }}
      placeholder="blur"
      blurDataURL="/images/blurImg.jpg"
    />
  );
};

export { FallbackImage };
