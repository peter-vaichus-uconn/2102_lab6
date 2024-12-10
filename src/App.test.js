import { render, screen, fireEvent, act } from '@testing-library/react';
import App from './App';
import my_questions from './model/basic_questions.json';

// Test if the app renders the quiz questions and answers correctly
test('renders questions and answers correctly', () => {
  render(<App />);
  
  // Check if the first question is rendered
  expect(screen.getByText(my_questions[0].question)).toBeInTheDocument();
  
  // Check if the first answer is rendered
  expect(screen.getByText(my_questions[0].answers[0].answer)).toBeInTheDocument();
});

// Test if the score increments when the correct answer is selected
test('increments score when correct answer is selected', () => {
  render(<App />);
  
  // Simulate selecting the first correct answer
  const firstAnswer = screen.getByText(my_questions[0].answers[2].answer); // Assuming the correct answer is the 3rd one
  fireEvent.click(firstAnswer);

  // Simulate selecting another correct answer
  const secondAnswer = screen.getByText(my_questions[1].answers[0].answer); // Correct answer for 2nd question
  fireEvent.click(secondAnswer);

  // Simulate clicking the 'Done' button
  const doneButton = screen.getByText(/Done/);
  fireEvent.click(doneButton);
  
  // Check if the results page is displayed with the correct score
  expect(screen.getByText(/Your score: 2/)).toBeInTheDocument(); // Adjust the expected score
});

// Test if the results page is displayed after submitting the quiz
test('displays results after quiz is completed', () => {
  render(<App />);
  
  // Simulate answering the questions
  const firstAnswer = screen.getByText(my_questions[0].answers[2].answer); // Correct answer
  fireEvent.click(firstAnswer);

  const secondAnswer = screen.getByText(my_questions[1].answers[0].answer); // Correct answer
  fireEvent.click(secondAnswer);
  
  // Click the 'Done' button to submit the quiz
  const doneButton = screen.getByText(/Done/);
  fireEvent.click(doneButton);
  
  // Check if the results are displayed with score and count
  expect(screen.getByText(/Quiz Results/)).toBeInTheDocument();
  expect(screen.getByText(/Your score:/)).toBeInTheDocument();
});
