import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import { useParams } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';



function List() {
  const { objectType } = useParams();
  
  const navigate = useNavigate();

    const handleRowClick = (id) => {
      navigate(`/detail/${objectType}/${id}`);
      console.log(objectType,id)
    };
  
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Make HTTP request to backend API to fetch data based on objectType
        const response = await axios.get(`http://127.0.0.1:8080/api/object_list/${objectType}`);
        setData(response.data);
        console.log(response.data)
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [objectType]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-2 bg-gray-100 min-h-screen w-screen flex justify-center">
    <section className="flex flex-col w-1/2">
      <header className="bg-gray-100 flex justify-between my-4">
        <h1 className="text-lg font-semibold">Backup Storage</h1>
        <h1 className="text-lg font-semibold">{objectType}</h1>
        <div className="bg-gray-300 py-1 px-3 rounded-md">Bulk restore</div>
      </header>
      <div className="bg-white p-4 rounded shadow-md col-span-1">
        <input type="text" placeholder="Search" className="w-full border border-gray-600 rounded px-2 py-1" />
        <div className="flex flex-col">
          {/* Map through data to generate list items */}
          {data.map(item => (
            <div  onClick={() => handleRowClick(item.id)}   key={item.id} className="bg-white p-2 flex flex-row border-b-2 justify-between">
              <div className="flex flex-row items-center">
                <div className="w-14 h-14 bg-gray-200 rounded-md"></div>
                <div>
                  <h3 className="text-base font-medium mb-0 ml-2">{item.title}</h3>
                  <h5 className="text-sm text-gray-600 mb-0 ml-2">Last edited: </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
  );
}

export default List;

