import { useState } from 'react'
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import SideCart from './components/SideCart/SideCart'
import Question from './components/Question/Question';

function App() {
  const [spentTime, setSpentTime] = useState(0);
  const [bookTitle, setBookTitle] = useState([]);
  const handleBookTitle = (title) => { 
    const storedBook = bookTitle.find(book=>book === title);
    console.log(bookTitle);
    if(storedBook){
      return toast('Already added this bookName!');
    }
    
      setBookTitle([...bookTitle, title]);
    }
  return (
    <div className="App w-11/12 mx-auto mt-4">
      <Header></Header>
      <div className="grid lg:grid-cols-4 gap-3 mt-4">
        <div className="col-span-3">
          <Home setSpentTime={setSpentTime} handleBookTitle={handleBookTitle}/>
        </div>
        <div className="mt-10 col-span-3 lg:col-span-1 text-center ">
          <SideCart spentTime={spentTime} bookTitle={bookTitle} ></SideCart>
          <ToastContainer/>
        </div>
      </div>
      <Question className="w-full"/>
    </div>
  )
}

export default App
