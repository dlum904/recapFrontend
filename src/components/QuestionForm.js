import React, {useState} from 'react';

const QuestionForm = () => {
    const [name, setName] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, content)
    }

    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <input
                    type='text'
                    placeholder='Name'
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <textarea
                    rows='3'
                    placeholder='Ask away...'
                    value={content}
                    onChange={e => setContent(e.targetvalue)}
                />
                <button>
                    Sumbit Question
                </button>
            </form>
        </div>
    )
};

export default QuestionForm;