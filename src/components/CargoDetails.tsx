// CargoDetails.tsx
import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { useParams } from 'react-router-dom';
import {mock_data} from './data.ts'
import './background_style.css'

interface CargoItem {
  pk: number;
  title: string;
  image_url: string;
  weight: number;
  description: string;
  is_deleted: boolean;
  image_binary: Buffer;
}

const CargoDetails: React.FC = () => {
  const [cargoItem, setCargoItem] = useState<CargoItem | null>(null);
  const { id_cargo } = useParams<{ id_cargo: string }>();

  useEffect(() => {
    console.log('Fetching cargo for id:', id_cargo);

    let data = {}
    mock_data.forEach(element => {
// @ts-ignore
      if (element.pk == id_cargo) {

        data = element
      }
    });
    // @ts-ignore
    console.log( data);
    // @ts-ignore
    setCargoItem(data);
     
  }, [id_cargo]);

  if (!cargoItem) {
    return <div className='font-ordinary'>Loading...</div>;
  }

  return (
    <>
    {/* <div className='background'> */}
      {cargoItem.title}
      <div className="current-image">
      <img src={`data:image/jpeg;base64,${cargoItem.image_binary.toString()}`} style={{ height: '300px', width: '400px' }} />

      </div>
      <div className='font'>
      <div>
      
      <br></br>
        Вес: {cargoItem.weight} г.
      </div>
      <br></br>
      
      <div>
        Описание: {cargoItem.description}
      </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default CargoDetails;
