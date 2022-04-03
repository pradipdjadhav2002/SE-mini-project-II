import React ,{useContext }from 'react';
import LoadContextProvider from './Context/LoadContext';
import AuthContextProvider from './Context/AuthContext';
import Refresh from './Refresh'
import Web3 from 'web3'
import transferabi from './abi/Transfers.json'

export let web3 = new Web3(Web3.givenProvider||"http://localhost:8545")

window.ethereum.enable()
export let transfer = new web3.eth.Contract(transferabi.abi,"0x89892266cC65B8C11Af9EfAA19b9B2A5F8FbD55E")

const App = () => {

    return (
        
        <LoadContextProvider> 
            <AuthContextProvider>  
               
                <Refresh/>
             
         </AuthContextProvider>
         </LoadContextProvider>

       
    );
}
 
export default App;
    
