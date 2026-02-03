import React, { useState } from 'react';
import QuestionCard from './components/QuestionCard';
import SuccessView from './components/SuccessView';
import Envelope from './components/Envelope';

function App() {
  const [step, setStep] = useState('envelope'); // 'envelope', 'question', 'success'

  const handleEnvelopeOpen = () => {
    setStep('question');
  };

  const handleYes = () => {
    setStep('success');
  };

  return (
    <div className="w-full h-screen">
      {step === 'envelope' && <Envelope onOpen={handleEnvelopeOpen} />}
      {step === 'question' && <QuestionCard onYes={handleYes} />}
      {step === 'success' && <SuccessView />}
    </div>
  );
}

export default App;
