import '@atlaskit/css-reset'
import { ChessBoard } from '@/modules/tutorial/components/chess-board'
import PragmaticDnDProvider from '@atlaskit/app-provider'

const TutorialPage = () => {
  return (
    <PragmaticDnDProvider>
      <ChessBoard />
    </PragmaticDnDProvider>
  )
}

export const Component = TutorialPage
