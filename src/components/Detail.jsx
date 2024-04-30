import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import { useParams } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';
import restoreFunction from './restore';

const Detail = () => {
  const { objectType,id} = useParams();
  const [selectedDate, setSelectedDate] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [curr_data, curr_setData] = useState(null);
  const [c_isLoading, c_setIsLoading] = useState(true);
  const [c_error, c_setError] = useState(null);
  const [uuid, setUuid] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Make HTTP request to backend API to fetch data based on objectType
        // http://127.0.0.1:8080/api/get_object/orders/5916780364058
        const response = await axios.get(`http://127.0.0.1:8080/api/get_object/${objectType}/${id}`);
        setData(response.data);
        // console.log(typeof(response.data))
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    const fetch_curr_data = async () => {
      c_setIsLoading(true);
      try {
        // Make HTTP request to backend API to fetch data based on objectType
        // http://127.0.0.1:8080/api/get_object/orders/5916780364058
        const response = await axios.get(`http://127.0.0.1:8080/api/get_curr_object/${objectType}/${id}`);
        curr_setData(response.data);
        // console.log(typeof(response.data))
      } catch (error) {
        c_setError(error);
      } finally {
        c_setIsLoading(false);
      }
    };
  

    fetchData();
    fetch_curr_data();
  }, [objectType,id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (c_isLoading) {
    return <div>Loading...</div>;
  }

  if (c_error) {
    return <div>Error: {error.message}</div>;
  }
  


  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    // Filter data based on the selected date
    const index = parseInt(event.target.value);
  
    // Check if data[index] is not null or undefined
    if (data[index] !== null && data[index] !== undefined) {
      setFilteredData(data[index]);
      // store uuid 
      setUuid(data[index].uuid);
    } else {
      // If data[index] is null or undefined, set filteredData to an empty object or any default value
      setFilteredData({});
    }
  };
  const { product } = curr_data;
  const { title, body_html, vendor, status, tags } = filteredData;

  const handleRestore = () => {
    // Check if the UUID is not null
    if (uuid !== null) {
      // Perform restore operation using the stored UUID
      console.log(uuid)
      
      restoreFunction(uuid, objectType, id)
      .then(data => {
          // Check if data is not null
          if (data !== null) {
              // Handle the response data here
              console.log("Restore operation successful:", data);
              
              // Set message to indicate that the restore operation is done
              
  
              // Reload the page after 1 second
              setTimeout(() => {
                  window.location.reload();
              }, 1000);
              setMessage("Restore operation done");
          } else {
              // Handle the case where data is null (indicating an error)
              console.error("Error restoring data: Received null response");
          }
      })
      .catch(error => {
          // Handle any errors that occur during the API call
          console.error("Error restoring data:", error);
      });
  




    } else {
      // Handle case where UUID is null (no UUID selected)
      console.log("No UUID selected to restore");
    }
  };


  return (
    <>
    {objectType} , {id}

    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-200 justify-center w-screen px-56 pt-16">
         
      <h1 className="col-span-2 font-bold text-lg">
        {product.title}
      </h1>
      
      <div className="bg-white rounded-lg m-2 p-4">
        <div className="font-semibold border-b-2 border-b-gray-300 pb-4">
          Current Item
        </div>
        <div className="my-6">
          <h3 className="font-semibold">Title</h3>
          <p className="text-gray-500 text-sm">{product.title}</p>
        </div>
        <div className="my-6">
          <h3 className="font-semibold">Description</h3>
          <p className="text-gray-500 text-sm">{product.body_html || 'No data to view'}</p>
        </div>
        <div className="my-6">
          <h3 className="font-semibold">Vendor</h3>
          <p className="text-gray-500 text-sm">{product.vendor || 'No data to view'}</p>
        </div>
        <div className="my-6">
          <h3 className="font-semibold">Status</h3>
          <p className="text-gray-500 text-sm">{product.status || 'No data to view'}</p>
        </div>
        <div className="my-6">
          <h3 className="font-semibold">Tags</h3>
          <div>
            {product.tags && product.tags.split(',').map((tag, index) => (
              <span key={index} className="text-xs m-1 rounded-full px-2 py-1 bg-blue-200 text-blue-600">
                {tag.trim()}
              </span>
            ))}
          </div>
        </div>
      </div>


        <div className="bg-white rounded-lg m-2 p-4">
          <div className="flex flex-row justify-between font-semibold border-b-2 border-b-gray-300 pb-4">
            <label>
              Backed up version:
              <select
                value={selectedDate} onChange={handleDateChange}
                name="selectversion"
                className="font-normal outline-none text-sm border-2 border-gray-300 rounded px-2 py-1 mx-2"
              >
                    <option value="">Select Date</option>
                     {data.map((dateData, index) => (
                    <option key={index} value={index}>
                       {dateData.backup_date}
                     </option>
                      ))}

              </select>

            </label>
            <button className="text-white px-2 py-1 bg-gray-800 rounded" onClick={handleRestore}>Restore to this version</button>
            
          </div>
          {message && (
                <div className="mt-4">
                    <p className="bg-green-200 text-green-800 px-4 py-2 rounded">{message}</p>
                </div>
            )}
           
          <div className="my-6">
        <h3 className="font-semibold">Title</h3>
        <p className="text-gray-500 text-sm">{title || "No data to view"}</p>
      </div>
      <div className="my-6">
        <h3 className="font-semibold">Description</h3>
        <p className="text-gray-500 text-sm">{body_html || 'No data to view'}</p>
      </div>
      <div className="my-6">
        <h3 className="font-semibold">Vendor</h3>
        <p className="text-gray-500 text-sm">{vendor || 'No data to view'}</p>
      </div>
      <div className="my-6">
        <h3 className="font-semibold">Status</h3>
        <p className="text-gray-500 text-sm">{status || 'No data to view'}</p>
      </div>
      <div className="my-6">
        <h3 className="font-semibold">Tags</h3>
        <div>
          {tags && tags.split(',').map((tag, index) => (
            <span key={index} className="text-xs m-1 rounded-full px-2 py-1 bg-blue-200 text-blue-600">
              {tag.trim()}
            </span>
          ))}
        </div>
      </div>
      
        </div>
      </div>


     


    </>
  );
};

export default Detail;