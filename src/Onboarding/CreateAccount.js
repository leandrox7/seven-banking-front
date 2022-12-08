import './CreateAccount.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import * as React from 'react';
import TextField from '@mui/material/Button';

function CreateAccount() {
  return (
    <div className="CreateAccount">
      
      <p>teste</p>
      <TextField id="standard-basic" label="Name" variant="standard" />
      <TextField id="standard-basic2" label="Sobrenome" variant="standard" />
      <TextField id="standard-basic3" label="Endereco" variant="standard" />
     <p>fim do teste</p>

    </div>
  );
}

export default CreateAccount;
