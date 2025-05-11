import invariant from '@/utils/tiny-invariant'
// import invariant from 'tiny-invariant';
import { draggable } from '@atlaskit/pragmatic-drag-and-drop/element/adapter'
import { useEffect, useRef, useState } from 'react'

interface PieceProps {
  image: string
  alt: string
}

export const Piece = ({ image, alt }: PieceProps) => {
  const [dragging, setDragging] = useState(false)
  const pieceRef = useRef(null)

  useEffect(() => {
    const element = pieceRef.current
    invariant(element)

    return draggable({
      element,
      onDragStart: (args) => {
        setDragging(true)
      },
      onDrop: (args) => {
        setDragging(false)
      },
    })
  }, [])

  return (
    <img
      ref={pieceRef}
      src={image}
      alt={alt}
      draggable={false}
      style={dragging ? { opacity: 0.4 } : {}}
      className='w-[45px] h-[45px] p-1 rounded-[6px] hover:bg-[rgba(168,168,168,0.25)] shadow-[1px_3px_3px_rgba(9,30,66,0.25),_0px_0px_1px_rgba(9,30,66,0.31)]'
    />
  ) // draggable set to false to prevent dragging of the images
}
