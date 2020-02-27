import * as React from 'react'
import { withFirebase } from './../../firebase/withFirebase'
import { gamesRepository } from '../../core/games.repository';
import { TextField, MenuItem, Button } from '@material-ui/core';
import { NewGameTitle, FormGroup, StyledSelect, StyledLabel, FormActions } from './NewGame.styles';

const NewGame = ({firebase}) => {
  const [name, setName] = React.useState('')
  const [holder, setHolder] = React.useState('')

  const addGame = async () => {
    await gamesRepository.addGame(firebase, {name, holder})
  }

  const onNameChange = (event) => {
    setName(event.target.value);
  }

  const onHolderChange = (event) => {
    setHolder(event.target.value)
  }

  return (
    <>
      <NewGameTitle>Añadir juego</NewGameTitle>
      <form noValidate autoComplete="off">
        <FormGroup>
          <StyledLabel>¿Quien lo tiene?</StyledLabel>
          <StyledSelect 
            variant="outlined" 
            id="holder" 
            value={holder} 
            onChange={onHolderChange}>
            
            <MenuItem value="mig">Mig</MenuItem>
            <MenuItem value="jess">Jess</MenuItem>
          </StyledSelect>
        </FormGroup>
        <FormGroup>
          <StyledLabel>Nombre del juego</StyledLabel>
          <TextField 
            variant="outlined" 
            value={name} 
            onChange={onNameChange} />
        </FormGroup>
        <FormActions>
          <Button 
            onClick={() => addGame()}
            variant="contained" 
            color="primary">
            Añadir juego
          </Button>
        </FormActions>
      </form>
    </>
  )
}

export default withFirebase(NewGame);