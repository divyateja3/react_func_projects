import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
import Question from './Question';
function App() {
  // const [questions, SetQuestions] = useState(data)
  return (
  <main>
    <div className='container'>
      <h2>General Q&A About Login</h2>
      <section className='info'>
        {data.map((question) => {
          return <SingleQuestion key={question.id}{...
            question} />;
          } )
        }
      </section>
    </div>
    </main>
  );
}

export default App;
