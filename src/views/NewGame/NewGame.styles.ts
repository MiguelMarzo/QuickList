import { styled } from '../../theme/themedStyledComponents';
import { Select, InputLabel } from '@material-ui/core';

export const NewGameTitle = styled.div`
    margin-bottom: 24px;
    font-size: 14px;
`

export const FormGroup = styled.div`
    margin-bottom: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const StyledSelect = styled(Select)`
    display: flex;
    flex-grow: 1;
`

export const StyledLabel = styled(InputLabel)`
    margin-right: 12px;
`

export const FormActions = styled.div`
    display: flex;
    justify-content: center;
`
