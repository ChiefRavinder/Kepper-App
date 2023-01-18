import './index.css';
import Header from './components/header';
import Note from './components/note';
import Footer from './components/footer';
import notes from './noteslist';



function App() {
  return (
    <div>
      <Header />
      {notes.map(ele => <Note key={ele.key} title={ele.title} content={ele.content} />
      )}
      <Footer />
    </div>
  );
}

export default App;


