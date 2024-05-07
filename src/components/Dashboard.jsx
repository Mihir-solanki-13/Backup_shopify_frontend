
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleRowClick = (objectType) => {
      navigate(`/list/${objectType}`);
      // console.log(objectType)
    };
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState('');
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://127.0.0.1:8080/api/get_object_type_counts/');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const jsonData = await response.json();
          setData(jsonData);
          console.log(jsonData)
          
        } catch (error) {
          setError(error);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
    ///
    const handleBulkBackup = async () => {
      try {
          // Make a request to your backend
          const response = await fetch('http://127.0.0.1:8080/api/bulk_backup/');
          const responseData = await response.json(); // Extract JSON data from response
  
          if (responseData.message === 'Bulk backup success') {
              setMessage(responseData.message);
              setTimeout(() => {
                  setMessage('done backup');
      
              }, 5000); // Hide message after 5 seconds
          }
      } catch (error) {
          console.error('Error:', error);
      }
  };  
   
  

  return (
    
    <div className="container mx-auto px-4 py-2 bg-gray-100 min-h-screen w-screen flex justify-center">
     
      
      <section className="grid justify-center w-1/2 ">
      <header className="flex justify-between items-center">
        <h1 className="text-lg font-bold">Shopify Backup</h1>
        <button className="text-white px-2 py-1 bg-gray-800 rounded" onClick={handleBulkBackup}>Bulk Backup</button>
         
      </header>
      {message && (
                <div className="mt-4">
                    <p className="bg-green-200 text-green-800 px-4 py-2 rounded">{message}</p>
                </div>
            )}
        <div className="card bg-white p-4 rounded shadow-md col-span-1">
            <h3 className="text-base font-medium mb-2">Backup Storage</h3>
            <p className="text-gray-600 line-clamp-3">
                Your data is stored safely and securely in our storage, ready for
                when you need it. You can browse and search through all of your shop
                data and restore any item instantly.
            </p>
            <div className="flex flex-col">
                


               <div className="flex flex-col">
                {Object.entries(data).map(([objectType, count]) => (
                    <div  onClick={() => handleRowClick(objectType)}  key={objectType} className="bg-white p-2 flex flex-row border-b-2 justify-between">
                    <div className="flex flex-row items-center">
                        <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                        <h3 className="text-base font-medium mb-0 ml-2">{objectType}</h3>
                    </div>
                    <div className="flex flex-row items-center">
                        <div className="text-gray-600 mr-2">{count}</div>
                      
                    </div>
                    </div>
                ))}
               </div>




            </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;