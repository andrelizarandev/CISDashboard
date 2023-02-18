// Modules
import { Table, TableContainer } from '@mui/material';

// Components
import HeaderRow from '../../../../components/_shared/header-row';
import PaperStack from '../../../../components/_shared/paper-stack';

type Props = {
  isLoading:boolean;
}

export default function SpeakersTable (props:Props) {
  const { isLoading } = props;
  return (
    <PaperStack title='Ponentes Guardados' isLoading={isLoading}>
      <TableContainer>
        <Table>
          <HeaderRow columns={columns}/>
        </Table>
      </TableContainer>
    </PaperStack>
  )
}

const columns = ['Nombre', 'Apellidos', 'Descripción', 'Edad', 'Foto de Perfil'];