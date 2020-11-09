import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import api from '../../services/api';

import './style.css';
export default function NewBooks(){
    const [title, setTitle] = useState('');
    const [preface, setPreface] = useState('');
    const [publisher,setPublicher] = useState('');
    
    const history = useHistory();

    async function handleNewBooks(e){
        e.preventDefault();
        const data = {title,preface,publisher};
        try{
            const response = await api.post('books',data)        
            alert(`Sucesso. id gerado: ${response.data.id}`);
            history.push('/books');
        }catch (error){
            alert('Falha ao salvar');
        }
        
    }
    return(
        <div className="books-container">
           
            <div className="content">
                <section>
                    <h1>Cadastro de novos livros</h1>
                    <p>Faça aqui seu cadastro</p>
                    <Link className="back-link" to="/books">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar
                    </Link>
                </section> 
                <form onSubmit={handleNewBooks}>
                    <input 
                        placeholder = "Titulo" 
                        value={title} 
                        onChange = {e => setTitle(e.target.value)} />
                    <input 
                        placeholder = "Autor"  
                        value={publisher} 
                        onChange = {e => setPublicher(e.target.value)}/>
                    <textarea 
                        placeholder = "Prefácio"  
                        value={preface} 
                        onChange = {e => setPreface(e.target.value)}/>
                    <button className="button" type="submit">Salvar</button>
                </form>
            </div>
            
        </div>
        
    );
}