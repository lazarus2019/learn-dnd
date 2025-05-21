import type { PieceRecord } from '../types'
import { PieceType } from './enum'

export const initialPieces: PieceRecord[] = [
  {
    type: PieceType.KING,
    location: [3, 2]
  },
  {
    type: PieceType.PAWN,
    location: [2, 0]
  },
  {
    type: PieceType.CEH,
    location: [1, 3]
  },
  {
    type: PieceType.PENGUIN,
    location: [4, 6]
  }
]
