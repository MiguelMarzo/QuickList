import * as React from 'react'
import { withFirebase } from './../../firebase/withFirebase'
import { gamesRepository } from '../../core/games.repository';

const NewGame = ({firebase}) => {

  const addGame = (game) => {
    gamesRepository.addGame(firebase, game)
  }

  return (
    <>
      <a onClick={() => addGame({
        name: 'Umtata',
        holder: 'Mig'
      })}>Añadir juego</a>

    </>
  )
}

export default withFirebase(NewGame);