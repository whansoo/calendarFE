import List from '@mui/material/List'
import { DatesPayload } from '../../types/dates'
import Typography from '@mui/material/Typography'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import { Box, Button } from '@mui/material'
import { flexDirection, textAlign } from 'styled-system'

interface AdminPageProps {
  dates: DatesPayload[]
}

function AnnualDutyList({ dates }: AdminPageProps) {
  const formatter = new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  })
  return (
    <div>
      <Box>
        <Typography
          variant="h2"
          color="initial"
          style={{ whiteSpace: 'nowrap', textAlign: 'center' }}
        >
          연차 / 당직 관리
        </Typography>
      </Box>

      <List>
        {dates.map((result: DatesPayload) => (
          <ListItem sx={{ border: '1px solid black', marginBottom: '2px' }}>
            <ListItemText
              primary={result.username + ' ' + result.role + ' ' + result.title}
              secondary={
                formatter.format(new Date(result.start)) +
                ' - ' +
                formatter.format(new Date(result.end))
              }
            />
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
              <Button>승인</Button>
              <Button variant="outlined">거부</Button>
            </Box>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default AnnualDutyList