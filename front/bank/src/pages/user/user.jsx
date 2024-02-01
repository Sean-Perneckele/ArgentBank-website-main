import '../../designs/css/main.css'
 import Account from '../../compossant/account.jsx'
 import { useSelector, useDispatch, } from 'react-redux'; 
 import { recUser } from './userSlice.js'
 import { useNavigate } from 'react-router-dom'; 

function User () {

       const authState = useSelector((state) => state.auth);
       const userData = useSelector((state) => state.user);
       const dispatch = useDispatch();
       const navigate = useNavigate();

       const nameUser = async () => {
              try {        
                const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authState.token}` 
                  },
                });
              //   console.log('API name', response)
                if (response.ok) {
                  const data = await response.json();
                  dispatch(recUser({ userName:data.body.userName, firstName: data.body.firstName, lastName: data.body.lastName }));
                  // console.log(' Nom reçues :', data);
                } else {
                  const errorData = await response.json(); 
                  console.error('Erreur de connexion :', errorData);
                }
              } catch (error) {
                console.error('Erreur lors de la connexion :', error);
              }
            };
            if (authState.isAuthenticated) {
              nameUser()
             }
             const edit =  () =>  { 
              navigate('/update')
         }

    return (
        <main className="main bg-dark">
              <div className='bank'>
      <div className="header">
        <h1>Welcome back<br />{userData.userName}</h1>
        <button className="edit-button" onClick={edit}>Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
    
      <Account titre="Argent Bank Checking (x8349)"
             montant="$2,082.79" description="Available Balance" />

      <Account titre="Argent Bank savings (x6712)"
             montant="$10,928.42" description="Available Balance" />

      <Account titre="Argent Bank credit Card (x8349)"
             montant="$184.30" description="Current Balance" /> 
      </div>
    </main>
    )
}

export default User