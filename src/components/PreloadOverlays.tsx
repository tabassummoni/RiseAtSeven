export type PreloadOverlaysProps = {
  imageUrl: string;
  imageClassName: string;
  alt: string;
};

export const PreloadOverlays = (props: PreloadOverlaysProps) => {
  return (
    <div className="fixed box-border caret-transparent hidden h-[1000px] outline-[3px] pointer-events-none w-screen z-[100] inset-0">
      <img
        src={props.imageUrl}
        alt={props.alt}
        className={`box-border caret-transparent outline-[3px] w-screen ${props.imageClassName}`}
      />
    </div>
  );
};
