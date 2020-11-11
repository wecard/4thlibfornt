import React, { useState,useEffect } from 'react';
import { Link,useHistory } from 'react-router-dom';
import { FiPower, FiTrash2,FiMessageCircle } from 'react-icons/fi'
import api from '../../services/api'
import './style.css';
export default function Comments(){
    const [comments, setComments] = useState([]);
    const [commentsBook, setCommentsBook] = useState('');
    const books_id = "0300837e";
    const history = useHistory();
    useEffect(()=>{
    
        api.get(`books`
        ).then(response=> { 
            setComments(response.data);
        });
    
    },[books_id]); 
    async function handleComent(id,nameBookID){
        localStorage.setItem('commentBookID',id);
        localStorage.setItem('nameBookID',nameBookID);
        
        history.push('/comment/new');
    }
    async function handleLogout(){
        history.push('/');    
    }
    return(
        <div className="comments-container">
            <header>
                <span>Comentários dos leitores</span>
            
                <Link className="button" to="/comment/new">Novo comentário</Link>
                <button type="button" onClick={handleLogout}>
                    <FiPower size={18} color="#E02041"/>
                </button>
                
                
            </header>

            <h1>Comentários</h1>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>
                        <section>
                        <strong>Titulo:</strong>
                        <p>{comment.title}</p>
                        <strong>Autor:</strong>
                        <p>{comment.publisher}</p>
                        <strong>Prefácil</strong>
                        <p>{comment.preface}</p>
                        
                        </section>
                        
                        <button onClick={()=> handleComent(comment.id,comment.title)} ><FiMessageCircle size={20} color="#A8A8B3"/></button>
                    </li>
                ))}
                
            </ul>
            
        </div>
    );
}