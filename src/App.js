import './App.css';
import SiteHeader from './SiteHeader.js';
import SiteBody from './SiteBody.js';
import DiceRollSection from './DiceRollSection.js';

function App() {
  return (
    <div className="App">
      <SiteHeader />
      <DiceRollSection />
      <SiteBody />
      <footer class="footer"></footer>
    </div>
  );
}

export default App;
