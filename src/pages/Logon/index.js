import React,{useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import app from '../../services/api';
import './styles.css';
export default function Logon() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    
    async function handleLogin(e){
        e.preventDefault();
        const data = {login,password} 
        console.log(data);
        try{
            const response = await app.post('/session',{login:login,password:password});
            console.log(response);
            localStorage.setItem('userProfile',response.data.user_profile);
            localStorage.setItem('login',response.data.login);
            if(response.data.user_profile === '2'){
                history.push('/books');
            }else{
                history.push('/comments');    
            }    
            
        }catch(err){
            alert('Erro ao logar.');
        }
    }
    return ( 
        <div className = "logon-container" >
        <section className = "form" >
            <form onSubmit={handleLogin}>
                
                <h1> 4thlib </h1> 
                <input value={login}   onChange={e=> setLogin(e.target.value)} placeholder = "login"/>
                <input type="password" value={password} onChange={e=> setPassword(e.target.value)} placeholder = "senha"/>
                
                <button className="button"> Entrar</button>
                <Link className="back-link" to="/register">
                    <FiLogIn size={16} color="#E02041"/>
                    Não tenho cadastro
                </Link> 
            </form> 
        </section> 
        </div>
    );
}