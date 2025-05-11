import type { Coord, PieceRecord } from '../types'
import { PieceType } from './enum'

export const isEqualCoord = (c1: Coord, c2: Coord) => {
  return c1[0] === c2[0] && c1[1] === c2[1]
}

export const isCoord = (token: unknown): token is Coord => {
  return (
    Array.isArray(token) &&
    token.length === 2 &&
    token.every((val) => typeof val === 'number')
  )
}

const pieceTypes: PieceType[] = [PieceType.KING, PieceType.PAWN]

export const isPieceType = (value: unknown): value is PieceType => {
  return typeof value === 'string' && pieceTypes.includes(value as PieceType)
}

export const canMove = (
  start: Coord,
  destination: Coord,
  pieceType: PieceType,
  pieces: PieceRecord[]
) => {
  const rowDist = Math.abs(start[0] - destination[0])
  const colDist = Math.abs(start[1] - destination[1])

  if (pieces.find((piece) => isEqualCoord(piece.location, destination)))
    return false

  switch (pieceType) {
    case PieceType.KING:
      // Allow king go around 1 step
      return [0, 1].includes(rowDist) && [0, 1].includes(colDist)
    case PieceType.PAWN:
      // Allow pawn go straight forward 1 step
      return colDist === 0 && start[0] - destination[0] === -1
    default:
      return false
  }
}
