import React, {useState} from "react"
import "./Contact.css"
//componentes externos
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button} from '@mui/material';


export default function ContactInput (props) { 

const [name, setName]=useState()


const handleChange =(e) => {
console.log(e.target.value)
setName(e.target.value)
}
    return(
    <div className="ContenedorContacto">
        <Box        
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: "50%" },
            }}
            noValidate
            autoComplete="off"
            >
                <TextField 
                    id="outlined-basic" 
                    label="Nombre" 
                    variant="outlined" 
                    onChange={handleChange}/>
                <TextField 
                    id="outlined-basic" 
                    label="Apellido" 
                    variant="outlined" />
                <TextField 
                    id="outlined-basic" 
                    label="Mail" 
                    variant="outlined" />
                <TextField 
                    id="outlined-multiline-flexible" 
                    label="Mensaje" 
                    multiline rows={8} 
                    defaultValue="Dejanos tu mensaje" />
               <Button  onClick={props.showSaludo(name)}>Enviar</Button>
        </Box>
    </div>
    )
}