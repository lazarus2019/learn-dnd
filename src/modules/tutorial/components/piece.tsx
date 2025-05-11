interface PieceProps {
  image: string
  alt: string
}

export const Piece = ({ image, alt }: PieceProps) => {
  return (
    <img
      src={image}
      alt={alt}
      draggable={false}
      className='w-[45px] h-[45px] p-1 rounded-[6px] hover:bg-[rgba(168,168,168,0.25)] shadow-[1px_3px_3px_rgba(9,30,66,0.25),_0px_0px_1px_rgba(9,30,66,0.31)]'
    />
  ) // draggable set to false to prevent dragging of the images
}
