import './App.css';
import Button from '@material-ui/core/Button';
import Header from './My Components/Header'
import { Body } from './My Components/Body'
import { Footer } from './My Components/Footer'
import React, { useState } from 'react';


function App() {

  const refreshPage = () => {
    window.location.reload();
  }


  const [data, setData] = useState([
    {
      img: 'https://source.unsplash.com/random/320x224?sig=1',
      text: '1'
    },
    {
      img: 'https://source.unsplash.com/random/320x224?sig=2',
      text: '2'
    },
    {
      img: 'https://source.unsplash.com/random/320x224?sig=3',
      text: '3'
    },
    {
      img: 'https://source.unsplash.com/random/320x224?sig=4',
      text: '4'
    },
    {
      img: 'https://source.unsplash.com/random/320x224?sig=5',
      text: '5'
    },
    {
      img: 'https://source.unsplash.com/random/320x224?sig=6',
      text: '6'
    },
    {
      img: 'https://source.unsplash.com/random/320x224?sig=7',
      text: '7'
    },
    {
      img: 'https://source.unsplash.com/random/320x224?sig=8',
      text: '8'
    },
    {
      img: 'https://source.unsplash.com/random/320x224?sig=9',
      text: '9'
    },
    {
      img: 'https://source.unsplash.com/random/320x224?sig=10',
      text: '10'
    },
    {
      img: 'https://source.unsplash.com/random/320x224?sig=11',
      text: '11'
    },
    {
      img: 'https://source.unsplash.com/random/320x224?sig=12',
      text: '12'
    },
  ]);



  const onDelete = (img) => {

    console.log(`The card to be deleted is ${data.indexOf(img)}`);

    setData(data.filter((e) => {
      return e !== img;
    }))

  };


  return (
    <>

      <Header title="My Image Gallery" />

      <div className="my-4 d-flex align-items-center justify-content-center">
        <Button size="large" variant="contained" color="secondary" onClick={refreshPage}><h4>Reload</h4></Button>
      </div>

      <Body data={data} onDelete={onDelete} />

      <Footer />

    </>
  );
}

export default App;
