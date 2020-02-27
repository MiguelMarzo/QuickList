import * as React from 'react'
import { withFirebase } from './../../firebase/withFirebase'
import { gamesRepository } from '../../core/games.repository';
import { TextField, MenuItem, CircularProgress } from '@material-ui/core';
import { NewGameTitle, FormGroup, StyledSelect, StyledLabel, FormActions, StyledButton } from './NewGame.styles';

const NewGame = ({firebase}) => {
  const [name, setName] = React.useState('')
  const [holder, setHolder] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)

  const addGame = async () => {
    setIsLoading(true);
    try {
      await gamesRepository.addGame(firebase, {name, holder})
      setName('')
      setHolder('')
    } catch (error) {
      // TODO: mostrar mensaje de error o de exito
    }
    setIsLoading(false);
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
          <StyledButton 
            onClick={() => !isLoading && addGame()}
            variant="contained" 
            disabled={!holder || !name || isLoading}
            color="primary">
            {
              isLoading ? (
                <CircularProgress color="secondary"/>
              ) : (
                <>Añadir juego</>
              )
            }
          </StyledButton>
        </FormActions>
      </form>
    </>
  )
}

export default withFirebase(NewGame);