type AuthImageProps = {
  src: string;
  className: string;
  altImage: string;
}

export function AuthImage({ src, className, altImage }: AuthImageProps) {
  return(
    <img src={src} className={className} alt={altImage} />
  );
}
