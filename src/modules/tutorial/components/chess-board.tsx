import king from '@/assets/king.png'
import pawn from '@/assets/pawn.png'
import type { ReactElement } from 'react'
import { pieces } from '../model/config'
import { PieceType } from '../model/enum'
import { isEqualCoord } from '../model/helper'
import type { Coord, PieceRecord } from '../types'
import { Piece } from './piece'
import { Square } from './square'

const King = () => {
  return <Piece image={king} alt='King' />
}

const Pawn = () => {
  return <Piece image={pawn} alt='Pawn' />
}

const pieceLookup: Record<PieceType, ReactElement> = {
  [PieceType.KING]: <King />,
  [PieceType.PAWN]: <Pawn />,
}

const renderSquares = (pieces: PieceRecord[]) => {
  const squares = []

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const squareCoord: Coord = [row, col]

      const piece = pieces.find((piece) =>
        isEqualCoord(piece.location, squareCoord),
      )

      squares.push(
        <Square location={[row, col]}>
          {piece && pieceLookup[piece.type]}
        </Square>,
      )
    }
  }

  return squares
}

export const ChessBoard = () => {
  return (
    <div className='grid grid-cols-8 grid-rows-8 w-[500px] h-[500px] border-3 border-[lightgray]'>
      {renderSquares(pieces)}
    </div>
  )
}
