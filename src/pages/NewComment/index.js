import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import api from '../../services/api'
import './style.css';
export default function NewComment(){
    console.log(localStorage.getItem('commentBookID'));
    const [comment,setComment] = useState();
    
    async function handleComment(e){
        e.preventDefault();
        try{
            const data = {"comment":comment,"books_id":localStorage.getItem('commentBookID'),"comment_date":"2020-11-04 01:19:00"};
            console.log(data);
            const response = await api.post('comments',data);
        }catch{
            alert('Falha ao salvar');
        }
    }
    return(
        <div className="new-comment-container">
           
            <div className="content">
                <section>
                    <h1>{localStorage.getItem('nameBookID')}</h1>
                    <p>Faça um breve comentário sobre o livro</p>
                    <Link className="back-link" to="/comments">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar
                    </Link>
                </section> 
                <form onSubmit={handleComment}>
                    <textarea value={comment} onChange={e=>setComment(e.target.value)} placeholder = "Comentario"/>
                    <button className="button" type="submit">Salvar</button>
                </form>
            </div>
        </div>
        
    );
}