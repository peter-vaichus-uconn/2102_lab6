import React from 'react';
import quizPageStyle from '../QuizPageStyle';
import my_state from './my_state';
import my_questions from '../model/basic_questions.json';

class Quiz extends React.Component {
    state = {
        score: 0,
        count: 0,
        quizCompleted: false // To track if quiz is completed
    };

    incrementScore = () => {
        this.setState((prevState) => ({
            score: prevState.score + 1,
            count: prevState.count + 1
        }));
        alert("You are correct!");
    };

    dontIncrementScore = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }));
        alert("Sorry - not correct");
    };

    handleSubmit = () => {
        my_state.my_score = this.state.score;
        my_state.my_count = this.state.count;
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
                                    onClick={ans["isCorrect"] ? this.incrementScore : this.dontIncrementScore}
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
            <p>Your score: {this.state.score} / {this.state.count}</p>
            <button onClick={() => this.setState({ quizCompleted: false })}>Take Another Quiz</button>
        </div>
    );

    render() {
        return this.state.quizCompleted ? this.renderResults() : this.renderQuiz();
    }
}

export default Quiz;
