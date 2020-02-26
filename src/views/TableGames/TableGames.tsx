import * as React from 'react'
import { withFirebase } from './../../firebase/withFirebase'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const TableGames = ({firebase}) => {
  const { gamesCollection } = firebase;
  const [games, setGames] = React.useState([]);

  React.useEffect(() => {
    const unsubscribe = gamesCollection
      .orderBy('name', 'desc')
      .onSnapshot(({ docs }) => {
        const gamesFromDB = []

        docs.forEach(doc => {
          const details = {
            id: doc.id,
            holder: doc.data().holder,
            name: doc.data().name
          }
          gamesFromDB.push(details)
        })

        setGames(gamesFromDB)
      })

    return () => unsubscribe()
  }, [])

  return (
    <>
      <div>Tabla</div>
       <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="right">Nombre</TableCell>
            <TableCell align="right">Quien lo tiene?</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {games.map(game => (
            <TableRow key={game.name}>
              <TableCell align="right">{game.name}</TableCell>
              <TableCell align="right">{game.holder}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

export default withFirebase(TableGames);