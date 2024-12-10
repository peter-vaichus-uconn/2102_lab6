import React from 'react';
import quizPageStyle from '../QuizPageStyle';
import my_questions from '../model/basic_questions.json';
import ScoreController from '../controller/ScoreController';  // Import the controller

class Quiz extends React.Component {
    state = {
        quizCompleted: false
    };

    handleAnswerClick = (isCorrect) => {
        if (isCorrect) {
            ScoreController.incrementScore();
        } else {
            ScoreController.dontIncrementScore();
        }
    };

    handleSubmit = () => {
        // Now using ScoreController to log score, no need for my_state
        console.log("Total score: " + ScoreController.getScore() + "/" + ScoreController.getCount());
        
        this.setState({ quizCompleted: true }); // Transition to results page
    };

    renderQuiz = () => (
        <div style={quizPageStyle}>
            <h1>My Questions</h1>
            {my_questions.map((quest) => (
                <div key={quest.id}>
                    <h2>{quest["question"]}</h2>
                    {quest["answers"].map((ans) => (
                        <div key={ans.answer}>
                            <label>
                                <input
                                    type="radio"
                                    name={quest["id"]}
                                    onClick={() => this.handleAnswerClick(ans["isCorrect"])}
                                    value={ans["isCorrect"]}
                                />
                                {ans["answer"]}
                            </label>
                            <br />
                        </div>
                    ))}
                </div>
            ))}
            <br />
            <button onClick={this.handleSubmit}>Done</button>
        </div>
    );

    renderResults = () => (
        <div>
            <h1>Quiz Results</h1>
            <p>Your score: {ScoreController.getScore()} / {ScoreController.getCount()}</p>
            <button onClick={() => this.setState({ quizCompleted: false })}>Take Another Quiz</button>
        </div>
    );

    render() {
        return this.state.quizCompleted ? this.renderResults() : this.renderQuiz();
    }
}

export default Quiz;
