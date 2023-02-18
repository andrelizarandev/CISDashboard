// Modules
import { Table, TableContainer } from '@mui/material';

// Components
import HeaderRow from '../../../../components/_shared/header-row';
import PaperStack from '../../../../components/_shared/paper-stack';

export default function SubeventsTable () {
  return (
    <PaperStack title='Subeventos Guardados'>
      <TableContainer>
        <Table>
          <HeaderRow columns={columns}/>
        </Table>
      </TableContainer>
    </PaperStack>
  )
}

const columns = ['Nombre', 'Fecha de Inicio', 'Fecha de Finalización', 'Ponentes', 'Evento al que Pertenece'];