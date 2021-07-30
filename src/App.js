import React from 'react';
import Questions from './components/Question';
import QuestionForm from './components/QuestionForm';
import '/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
    <Questions />
    <QuestionForm/>
      </header>
    </div>
  );
}

export default App;
