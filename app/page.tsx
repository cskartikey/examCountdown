// /app/pages/index.tsx


import CountdownTimer from './components/CountDownTimer';

const Home: React.FC = () => {

  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <CountdownTimer />
    </div>
  );
};

export default Home;
