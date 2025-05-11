import invariant from '@/utils/tiny-invariant'
import { dropTargetForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter'
import { type PropsWithChildren, useEffect, useRef, useState } from 'react'
import type { Coord } from '../types'

const getColor = (isDraggedOver: boolean, isDark: boolean): string => {
  if (isDraggedOver) return 'skyblue'

  return isDark ? 'lightgray' : 'white'
}

interface SquareProps extends PropsWithChildren {
  location: Coord
}

export const Square = ({ location, children }: SquareProps) => {
  const [isDraggedOver, setIsDraggedOver] = useState(false)
  const squareRef = useRef(null)

  const isDark = (location[0] + location[1]) % 2 === 1

  useEffect(() => {
    const element = squareRef.current
    invariant(element)

    return dropTargetForElements({
      element,
      onDragEnter: (args) => {
        console.info('🚀 ~ onDragEnter ~ args:', args)
        setIsDraggedOver(true)
      },
      onDragLeave: (args) => {
        console.info('🚀 ~ onDragLeave ~ args:', args)
        setIsDraggedOver(false)
      },
      onDrop: (args) => {
        console.info('🚀 ~ onDrop ~ args:', args)
        setIsDraggedOver(false)
      },
    })
  }, [])

  return (
    <div
      ref={squareRef}
      className='w-full h-full flex items-center justify-center'
      style={{
        backgroundColor: getColor(isDraggedOver, isDark),
      }}
    >
      {children}
    </div>
  )
}
