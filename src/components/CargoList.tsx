import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { mock_data } from './data.ts';

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
  const [data, setData] = useState<CargoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const filterData = (filter: string) => {
    const filteredData = mock_data.filter(item => item.title.includes(filter));
    return filteredData;
  };

  const fetchData = (filter: string | null = null) => {
    try {
      const filteredData = filter ? filterData(filter) : mock_data;

      // @ts-ignore
      setData(filteredData);
      setLoading(false);
      setError(null);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("An error occurred while fetching data.");
      setLoading(false);
    }
  };
// @ts-ignore
  const handleFilter = (filter: string) => {
    fetchData(filter);
    navigate(`/cargo?filter=${filter}`);
  };

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(location.search);
    const filterParam = urlSearchParams.get('filter');
    
    fetchData(filterParam);
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
          <a href={`/Mars_orders_pages/#/cargo/${item.pk}`} className="beautiful-link">
            <h2>Подробнее...</h2>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default CargoList;
