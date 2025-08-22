interface Iprops {
  src: string;
  alt: string;
  classN: string;
}
function Image({ src, alt, classN }: Iprops) {
  return (
    <>
      <img src={src} alt={alt} className={classN} />
    </>
  );
}
export default Image;
