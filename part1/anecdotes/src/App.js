import { useState } from 'react'

const RandomButton = ({setter, max}) => {
  const handler = () => {
    const rand_ind = Math.floor(Math.random() * max);
    setter(rand_ind);
  }

  return <button onClick={handler}>Next Anecdote</button>;
};

const VoteButton = ({setter, selected, votes}) => 
{
  const handler = () => {
    const newVotesData = [...(votes.data)];
    newVotesData[selected] += 1;

    const newHighest = (newVotesData[selected] > (votes.data)[votes.highest]) ? 
                        selected : votes.highest;

    setter({data: newVotesData, highest: newHighest});
  };

  return <button onClick={handler}>Vote</button>;
};


const AnecdoteDisplay = ({title, anecdotes, votes, index}) =>
  <div>
    <h1>{title}</h1>
    {anecdotes[index]}
    <p>has {votes.data[index]} votes</p>
  </div>;

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ];
  const num_anecdotes = anecdotes.length;

  const [votes, setVotes] = useState({
    data: Array(num_anecdotes).fill(0),
    highest: 0
  });

  const [selected, setSelected] = useState(0);

  return (
    <>
    <AnecdoteDisplay title="Anecdote of the day" anecdotes={anecdotes} votes={votes} index={selected}/>
    <div>
      <VoteButton setter={setVotes} selected={selected} votes={votes}/>
      <RandomButton setter={setSelected} max={num_anecdotes}/>
    </div>

    <AnecdoteDisplay title="Anecdote with most votes" anecdotes={anecdotes} votes={votes} index={votes.highest}/>
    </>
  )
}

export default App