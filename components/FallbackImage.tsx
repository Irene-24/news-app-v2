import React, { useState, SyntheticEvent } from "react";
import Image, { ImageProps } from "next/image";

interface FallbackImageProps extends ImageProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
}

const blur =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAFAAgDAREAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACP/EABYQAQEBAAAAAAAAAAAAAAAAAFEAAf/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AWOBTlf/Z";

const fallback = "/images/fallback.jpg";

const FallbackImage = ({
  src,
  alt,
  fallbackSrc = fallback,
  ...props
}: FallbackImageProps) => {
  const [onErrorSrc, setOnErrorSrc] = useState<string | undefined>(undefined);

  const handleOnError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    if (e?.currentTarget?.src !== fallbackSrc) {
      console.warn(`Image with src = ["${src}"],  could not load`);
      setOnErrorSrc(fallbackSrc);
    }
  };

  return (
    <Image
      onError={(e) => handleOnError(e)}
      onLoadingComplete={(result) => {
        if (!result || result.naturalWidth * result.naturalHeight === 0) {
          setOnErrorSrc(fallbackSrc);
        }
      }}
      {...props}
      alt={alt}
      src={
        onErrorSrc
          ? onErrorSrc
          : src?.startsWith("/images")
          ? src
          : `/api/imageProxy?url=${encodeURIComponent(src)}`
      }
      placeholder="blur"
      blurDataURL={blur}
    />
  );
};

export { FallbackImage };
