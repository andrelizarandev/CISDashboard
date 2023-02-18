// Modules
import { Table, TableContainer } from '@mui/material';
import HeaderRow from '../../../../components/_shared/header-row';

// Components
import PaperStack from '../../../../components/_shared/paper-stack';

export default function AnnouncementsTable () {
  return (
    <PaperStack title='Anuncios Guardados'>
      <TableContainer>
        <Table>
          <HeaderRow columns={columns}/>
        </Table>
      </TableContainer>
    </PaperStack>
  )
}

const columns = ['Título', 'Descripción', 'Link', 'Imagen']