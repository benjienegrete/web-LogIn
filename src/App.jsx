import { useState } from 'react'
import { Box, Button, TextField} from '@mui/material'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Box
      component="form"
      sx={{display: "flex", flexDirection: 'column'}}
      noValidate
      auricomplete="off"
      >
        <TextField id="Outlined-basic" label="Username" variant="outlined"/>
        <br></br>
        <TextField id="Outlined-basic" label="Username" variant="outlined" type='password'/>
        <br></br>
        <Button variant="contained">Login</Button>
        </Box>

    </>
  )
}

export default App
