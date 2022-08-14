import React, { useState, SyntheticEvent } from "react";
import Image, { ImageProps } from "next/image";

interface FallbackImageProps extends ImageProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
}

const blur =
  "data:image/jpeg;base64,/9j/4QCLRXhpZgAATU0AKgAAAAgABgEPAAIAAAAIAAAAVgESAAMAAAABAAEAAAEaAAUAAAABAAAAXgEbAAUAAAABAAAAZgEoAAMAAAABAAIAAAExAAIAAAAVAAAAbgAAAABCZUZ1bmt5AAAAASwAAAABAAABLAAAAAFCZUZ1bmt5IFBob3RvIEVkaXRvcgD/4AAQSkZJRgABAQEBLAEsAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMABAMDBAMDBAQDBAUEBAUGCgcGBgYGDQkKCAoPDRAQDw0PDhETGBQREhcSDg8VHBUXGRkbGxsQFB0fHRofGBobGv/bAEMBBAUFBgUGDAcHDBoRDxEaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGv/AABEIABQAFAMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAwQC/8QAGBABAQEBAQAAAAAAAAAAAAAAAAIBITH/xAAXAQEBAQEAAAAAAAAAAAAAAAAABAEC/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAMAwEAAhEDEQA/AMMSvMuZleJQqYZPBbJ4DGacWgB0tngAP//Z";

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
      {...props}
      src={onErrorSrc || `/api/imageProxy?url=${encodeURI(src)}`}
      alt={
        onErrorSrc || !alt.trim().length
          ? `Unable to load image. Using site [Aster news] logo as image instead`
          : alt
      }
      onError={(e) => handleOnError(e)}
      onLoadingComplete={(result) => {
        if (!result || result.naturalWidth * result.naturalHeight === 0) {
          setOnErrorSrc(fallbackSrc);
        }
      }}
      placeholder="blur"
      blurDataURL={blur}
    />
  );
};

export { FallbackImage };
