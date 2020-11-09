import React, { useState,useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2,FiMessageCircle } from 'react-icons/fi'
import api from '../../services/api'
import './style.css';
export default function Books(){
    const [Books, setBooks] = useState([]);
    const history = useHistory();

    useEffect(()=>{
    
        api.get(`books`
        ).then(response=> {
            setBooks(response.data);
        });
    
    },[Books]); 
    
    async function handleDeleteBook(id){
        try{
          await api.delete(`books/${id}`);
        }catch{
            alert('Falha ao deletar livro');
        }
    }

    async function handleLogout(){
        history.push('/');    
    }
    return(
        <div className="books-container">
            <header>
                <span>Nossa biblioteca</span>
                                              
                <Link className="button" to="/book/New">Cadastrar Livro</Link>
                <button type="button" onClick={handleLogout}>
                    <FiPower size={18} color="#E02041"/>
                </button>
                
            </header>

            <h1>Livros</h1>
            <ul>
                {Books.map(book => (
                    <li key={book.id}>
                        <strong>Titulo:</strong>
                        <p>{book.title}</p>
                        <strong>Autor:</strong>
                        <p>{book.publisher}</p>
                        <strong>Prefácil</strong>
                        <p>{book.preface}</p>
                        <button onClick={()=> handleDeleteBook(book.id)} type="button" style={{float:'right'}}>
                            <FiTrash2 size={20} color="#A8A8B3"/>
                        </button>
                        <div>
                            <button onClick={()=> handleDeleteBook(book.id)} type="button" style={{float:'right'}}>
                                <FiMessageCircle size={20} color="#A8A8B3"/>
                            </button>
                        </div>
                    </li>
                ))}
                
            </ul>
            
        </div>
    );
}