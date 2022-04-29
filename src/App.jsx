import AdviceCard from './components/AdviceCard';
import AttributionFooter from './components/AttributionFooter';

function App() {
  return (
    <main className="h-screen bg-darkBlue grid place-content-center px-4 mobile:p-0 desktop:p-0">
      <AdviceCard />
      <AttributionFooter />
    </main>
  );
}

export default App;
