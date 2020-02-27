import * as React from 'react'
import { withFirebase } from './../../firebase/withFirebase'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { gamesRepository } from '../../core/games.repository';
import { DeleteIcon } from './TableGames.styles';

const TableGames = ({firebase}) => {
  const [games, setGames] = React.useState([]);

  React.useEffect(() => {
    const unsubscribe = gamesRepository.getGames(firebase, setGames);
    return () => unsubscribe()
  }, [])

  const deleteGame = async (game) => {
    try {
      await gamesRepository.deleteGame(firebase, game);
    } catch {
      // TODO: gestión de errores
    }
  }

  return (
    <>
      <div>Tabla</div>
       <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Quien lo tiene?</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {games.map(game => (
            <TableRow key={game.name}>
              <TableCell>{game.name}</TableCell>
              <TableCell>{game.holder}</TableCell>
              <TableCell>
                <DeleteIcon onClick={() => deleteGame(game)} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

export default withFirebase(TableGames);