import { useNavigate } from "react-router-dom";
import { useState } from 'react';

export default function SearchTopicsBar() {

    const [ inputTopic, setInputTopic ] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/topics/${inputTopic}`)
    }
    return (
        <div>
            <form id='topics-search'onSubmit={handleSubmit}>
            <input 
            type="text" 
            id="topic-input"
            aria-label='input-field'
            placeholder="Enter Topic here"
            onChange={(event) => {
                const value = event.target.value
                setInputTopic(value)
            }}
            />
            <button>Search</button>
            </form>
        </div>   
    )
}