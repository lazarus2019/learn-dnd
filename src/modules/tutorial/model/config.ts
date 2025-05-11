import type { PieceRecord } from '../types'
import { PieceType } from './enum'

export const initialPieces: PieceRecord[] = [
  {
    type: PieceType.KING,
    location: [3, 2]
  },
  {
    type: PieceType.PAWN,
    location: [1, 6]
  }
]
