import type { PieceType } from '../model/enum'

export type Coord = [number, number]

export type PieceRecord = {
  type: PieceType
  location: Coord
}
