import king from '@/assets/king.png'
import pawn from '@/assets/pawn.png'
import type { ReactElement } from 'react'
import { pieces } from '../model/config'
import { PieceType } from '../model/enum'
import { isEqualCoord } from '../model/helper'
import type { Coord, PieceRecord } from '../types'
import { Piece } from './piece'
import { Square } from './square'

const King = ({ location }: { location: Coord }) => {
  return (
    <Piece
      location={location}
      pieceType={PieceType.KING}
      image={king}
      alt='King'
    />
  )
}

const Pawn = ({ location }: { location: Coord }) => {
  return (
    <Piece
      location={location}
      pieceType={PieceType.PAWN}
      image={pawn}
      alt='Pawn'
    />
  )
}

const pieceLookup: Record<PieceType, (location: Coord) => ReactElement> = {
  [PieceType.KING]: (location) => <King location={location} />,
  [PieceType.PAWN]: (location) => <Pawn location={location} />
}

const renderSquares = (pieces: PieceRecord[]) => {
  const squares = []

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const squareCoord: Coord = [row, col]

      const piece = pieces.find((piece) =>
        isEqualCoord(piece.location, squareCoord)
      )

      squares.push(
        <Square pieces={pieces} location={[row, col]}>
          {piece && pieceLookup[piece.type](piece.location)}
        </Square>
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
