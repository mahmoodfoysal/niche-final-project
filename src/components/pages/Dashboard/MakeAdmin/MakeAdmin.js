import { Alert } from '@mui/material';
import React, {useState} from 'react';

const MakeAdmin = () => {
    const [success, setSuccess] = useState(false)
    const [email, setEmail] = useState('')
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    
    const handleAdminSubmit = e => {
        e.preventDefault();
        const user = {email};
        fetch('https://vast-lake-15285.herokuapp.com/users/admin', {
            method:'put',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount) {
                setSuccess(true)
                console.log(data);

            }
        })
    }

    return (
        <div>
            <h2>Please Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input onBlur={handleOnBlur} name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <button type="submit" class="btn btn-primary">Make Admin</button>
</form>
{success && <Alert severity="success">Made Admin successfully</Alert>}
        </div>
    );
};

export default MakeAdmin;