import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       <header>
        <h1>Davlatlar Haqida Ma'lumotlar</h1>
    </header>

    <section class="country-card">
        <div class="card">
            <div class="flag">
                <img width="100" height="100" src="img/Uzbekiston.jpg" alt="Davlat Bayroqi">
            </div>
            <div class="info">
                <h2>O'zbekiston</h2>
                <p>O'zbekiston haqida ma'lumotlar...</p>
            </div>
        </div>



        <div class="card">
            <div class="flag">
                <img width="100" height="100" src="img/Rassiya.jpg" alt="Davlat Bayroqi">
            </div>
            <div class="info">
                <h2>Rassiya</h2>
                <p>Rassiya haqida ma'lumotlar...</p>
            </div>
        </div>


        <div class="card">
            <div class="flag">
                <img src="img/Ispaniya.jpg" alt="Davlat Bayroqi">
            </div>
            <div class="info">
                <h2>Ispaniya</h2>
                <p>Ispaniya haqida ma'lumotlar...</p>
            </div>
        </div>
        <div class="card">
            <div class="flag">
                <img src="img/America.jpg" alt="Davlat Bayroqi">
            </div>
            <div class="info">
                <h2>America</h2>
                <p>America haqida ma'lumotlar...</p>
            </div>
        </div>

    </section>


    <section class="country">
        <div class="card">
            <div class="flag">
                <img src="img/Hindiston.png" alt="Davlat Bayroqi">
            </div>
            <div class="info">
                <h2>Hindiston</h2>
                <p>Hindiston haqida ma'lumotlar...</p>
            </div>
        </div>



        <div class="card">
            <div class="flag">
                <img src="img/Xitoy.png" alt="Davlat Bayroqi">
            </div>
            <div class="info">
                <h2>Xitoy</h2>
                <p>Xitoy haqida ma'lumotlar...</p>
            </div>
        </div>


        <div class="card">
            <div class="flag">
                <img src="img/Koreya.webp" alt="Davlat Bayroqi">
            </div>
            <div class="info">
                <h2>Koreya</h2>
                <p>Koreya haqida ma'lumotlar...</p>
            </div>
        </div>
        <div class="card">a
            <div class="flag">
                <img src="img/Qatar.jpg" alt="Davlat Bayroqi">
            </div>
            <div class="info">
                <h2>Qatar</h2>
                <p>Qatar haqida ma'lumotlar...</p>
            </div>
        </div>

    </section>

    <footer>
        <p>&copy; 2024 Davlatlar Ma'lumotlar</p>
    </footer>
    </div>
  );
}

export default App;
