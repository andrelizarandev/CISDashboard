// Modules
import { TableRow, TableHead } from '@mui/material';

// Components
import BlueHeaderCell from '../blue-header-cell';

type Props = {
  columns:string[];
}

export default function HeaderRow (props:Props) {
  const { columns } = props;
  return (
    <TableHead>
      <TableRow>
        {columns.map((title, key) => <BlueHeaderCell size='small' key={key}>{title}</BlueHeaderCell>)} 
      </TableRow>
    </TableHead>
  )
}
