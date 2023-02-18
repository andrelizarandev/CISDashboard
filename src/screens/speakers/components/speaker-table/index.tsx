// Modules
import { Table, TableContainer } from '@mui/material';

// Components
import HeaderRow from '../../../../components/_shared/header-row';

export default function SpeakersTable () {
  return (
    <TableContainer>
      <Table>
        <HeaderRow columns={columns}/>
      </Table>
    </TableContainer>
  )
}

const columns = ['Nombre', 'Apellidos', 'Descripción', 'Edad', 'Foto de Perfil'];