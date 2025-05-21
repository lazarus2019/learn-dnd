import invariant from '@/utils/tiny-invariant'
import { dropTargetForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter'
import { type PropsWithChildren, useEffect, useRef, useState } from 'react'
import { canMove, isCoord, isEqualCoord, isPieceType } from '../model/helper'
import type { Coord, PieceRecord } from '../types'

type HoveredState = 'idle' | 'validMove' | 'invalidMove'

const getColor = (state: HoveredState, isDark: boolean): string => {
  if (state === 'validMove') {
    return 'lightgreen'
  }

  if (state === 'invalidMove') {
    return 'pink'
  }

  return isDark ? 'lightgray' : 'white'
}

interface SquareProps extends PropsWithChildren {
  location: Coord
  pieces: PieceRecord[]
}

export const Square = ({ location, children, pieces }: SquareProps) => {
  const [state, setState] = useState<HoveredState>('idle')
  const squareRef = useRef(null)

  const isDark = (location[0] + location[1]) % 2 === 1

  useEffect(() => {
    const element = squareRef.current
    invariant(element)

    return dropTargetForElements({
      element,
      getData: () => ({ location }), // data location onDrag itself, data location for monitorForElements
      onDragEnter: ({ source, location: locationP }) => {
        console.info(source, locationP)
        // source is the piece begin dragged over the drop target
        if (
          // type guards
          !isCoord(source.data.location) ||
          !isPieceType(source.data.pieceType)
        )
          return

        if (
          canMove(source.data.location, location, source.data.pieceType, pieces)
        ) {
          setState('validMove')
        } else {
          setState('invalidMove')
        }
      },
      canDrop: ({ source }) => {
        if (!isCoord(source.data.location)) return false

        return !isEqualCoord(source.data.location, location)
      },
      onDragLeave: () => setState('idle'),
      onDrop: () => setState('idle')
    })
  }, [location, pieces])

  return (
    <div
      ref={squareRef}
      className='w-full h-full flex items-center justify-center'
      style={{
        backgroundColor: getColor(state, isDark)
      }}
    >
      {children}
    </div>
  )
}
