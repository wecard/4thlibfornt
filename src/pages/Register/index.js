import React,{ useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api'
import './style.css';
export default function Register(){
        const [name, setName] = useState('');
        const [login, setLogin] = useState('');
        const [password, setPassword] = useState('');
        const [userProfile, setUserProfile] = useState('');
        const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();
        setUserProfile(1);
        
        const data = {"name":name, "login":login, "password":password, "user_profile":userProfile};
        console.log(data);
        try{
            const response = await api.post('users',data);        
            alert(`Sucesso. id gerado: ${response.data.id}`);
            history.push('/');
        }catch (error){
            alert('Falha ao salvar');
        }
    }
    return(
        <div className="register-container">
           
            <div className="content">
                <section>
                    <h1>Cadastro</h1>
                    <p>Faça aqui seu cadastro</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar
                    </Link>
                </section> 
                <form onSubmit={handleRegister}>
                    <input 
                        value={name} 
                        onChange = {e=> setName(e.target.value)}
                        required
                        placeholder = "Nome"/>
                    <input 
                        value={login} 
                        onChange = {e =>setLogin(e.target.value)}
                        required 
                        title="Esse email será o seu login" 
                        placeholder = "e-mail para login"/>
                    <input 
                        value={password}  
                        onChange = {e=> setPassword(e.target.value)}
                        required             
                        type="password" 
                        placeholder = "Senha"/>

                    <button className="button" type="submit">Salvar</button>
                </form>
            </div>
        </div>
        
    );
}