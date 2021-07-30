import React from 'react';
import Question from './Question';

const questions = [{content: 'asdfasdf'}, {content: 'bbbbbb'}];

class Questions extends React.Component {
    componentDidMount() {
        // fetch questions
    }

    generateQuestionsList() {
        return questions.map((question, i) => {
            return (
            <Question key={`question-${i}`} question={question}/>
            )
        })
    }

    render() {
        return (
            <>
                {questions ? this.generateQuestionsList() : 'No Questions'}
            </>
        )
    }
}

export default Questions;