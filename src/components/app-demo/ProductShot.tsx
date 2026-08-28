import Image from "next/image";

type ProductShotProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
};

const ProductShot = ({
  src,
  alt,
  width = 1440,
  height = 900,
  className = "",
  priority = false,
}: ProductShotProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={`h-full w-full object-cover object-top ${className}`}
      sizes="(max-width: 1024px) 100vw, 720px"
    />
  );
};

export default ProductShot;
