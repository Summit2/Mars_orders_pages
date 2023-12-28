import { useEffect, useState } from 'react';
// import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import {mock_data } from './data.ts'

interface CargoItem {
  pk: number;
  title: string;
  image_url: string;
  weight: number;
  description: string;
  is_deleted: boolean;
  image_binary: Buffer;
}

const CargoList = () => {
  // @ts-ignore
  const [data, setData] = useState<CargoItem[]>([]);
  // @ts-ignore
  const [loading, setLoading] = useState(true);
  // @ts-ignore
  const [error, setError] = useState<string | null>(null);
  // @ts-ignore
  const location = useLocation();
  // @ts-ignore
  const navigate = useNavigate();

// @ts-ignore
  const fetchData = async (filter: string | null = null) => {
    // try {
    //   let url = "http://localhost:8000/cargo/";

    //   // Append filter to the URL if it's provided
    //   // if (filter) {
    //   //   url += `?filter=${filter}`;
    //   // }

    //   const response = await axios.get(url);
    //   setData(response.data.data);
    // } catch (error) {
    //   console.error("Error fetching data:", error);
    //   setError("An error occurred while fetching data.");

    // @ts-ignore
      setData(mock_data);
      console.log(mock_data)
      setLoading(false);
      setError(null);
      
      
    
  };
// @ts-ignore
  const handleFilter = (filter: string) => {
    // Perform a PUT request to update the filter on the server
    
    
    // @ts-ignore
      
        // After the PUT request is successful, trigger the GET request
        fetchData(mock_data);
        // Update the URL with the selected filter
        navigate(`/cargo?filter=${filter}`);
      
      
  };
  

  useEffect(() => {
    fetchData();
  }, [location.search]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }



  return (
    <ul className='card-list'>
      {Array.isArray(data) && data.map((item) => (
        <li key={item.pk} className="card">
          
          <div className="delete-button">
            <form method="post" action="deleteCargo/">
              <input type="hidden" name="id_del" value={item.pk} />
              <button type="submit" name="del_btn">
                &#10060;
              </button>
            </form>
          </div>

          <div className="font-ordinary">{item.title}</div>
          
            <img src={`data:image/jpeg;base64,${item.image_binary.toString('base64')}`} className="images" alt={item.title} />
          
          <br />

          <a href={`cargo/${item.pk}/`} className="beautiful-link">
            <h2>Подробнее...</h2>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default CargoList;
