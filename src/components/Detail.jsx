import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import { useParams } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';
import restoreFunction from './restore';
import ProductDetail from './objects/ProductDetail'; 
import OrderDetail from './objects/OrderDetail';// Import the new component
import ThemeDetail from './objects/ThemesDetail'
import PageDetail from './objects/PageDetail';
import CustomCollectionDetail from './objects/CustomCollectionDetail';
import SmartCollectionDetail from './objects/SmartCollectionDetail';
import LocationDetail from './objects/LocationDetail';
import PolicyDetail from './objects/PolicyDetail';
import ShippingZoneDetail from './objects/ShippingZoneDetail';
import CustomerDetail from './objects/CustomerDetail';
import BlogDetail from './objects/BlogDetail';
import InventoryLevelDetail from './objects/InventoryLevelDetail';
import SavedSearchDetail from './objects/SavedSearchDetail';
import FileDetail from './objects/FileDetail';
// import ThemeDetail from './objects/ThemeDetail'; 


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

  const { product,order,theme,page,customer,custom_collection,smart_collection ,shippingZoneData,policyData,locationData ,blog
  ,inventoryLevel,file,savedSearch} = curr_data;
  const {object} = curr_data;
  // const { title, body_html, vendor, status, tags } = filteredData;

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
        {/* {product.title} */}
      </h1>
      
    <div className="bg-white rounded-lg m-2 p-4">
    <div className="font-semibold border-b-2 border-b-gray-300 pb-11">
        Current Item
        
      </div>
       
      <div>
          {objectType === 'products' && <ProductDetail product={product} />}
          {objectType === 'orders' && <OrderDetail order={order} />}
          {objectType === 'themes' && <ThemeDetail theme={theme} />}
          {objectType === 'pages' && <PageDetail page={page} />}
          {objectType === 'custom_collections' && <CustomCollectionDetail collection={custom_collection} />}
          {objectType === 'smart_collections' && <SmartCollectionDetail collection={smart_collection} />}
          {objectType === 'locations' && <LocationDetail location={locationData} />}
          {objectType === 'policies' && <PolicyDetail policy={policyData} />}
          {objectType === 'shipping_zones' && <ShippingZoneDetail shippingZone={shippingZoneData} />}
          {objectType === 'customers' && <CustomerDetail customer={customer} />}
          {objectType === 'blogs' && <BlogDetail blog={blog} />}
          {objectType === 'inventory_levels' && <InventoryLevelDetail inventoryLevel={inventoryLevel} />}
          {objectType === 'saved_searches' && <SavedSearchDetail savedSearch={savedSearch} />} 
          {objectType === 'files' && <FileDetail file={file} />} 

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
           
           {/* <ProductDetail product={filteredData} /> Use the ProductDetail component here */}
           {/* <OrderDetail order={filteredData} />  */}
            
          {objectType === 'products' && <ProductDetail product={filteredData} />}
          {objectType === 'orders' && <OrderDetail order={filteredData} />}
          {objectType === 'themes' && <ThemeDetail theme={filteredData} />}
          {objectType === 'pages' && <PageDetail page={page} />}
          {objectType === 'custom_collections' && <CustomCollectionDetail collection={custom_collection} />}
          {objectType === 'smart_collections' && <SmartCollectionDetail collection={smart_collection} />}
          {objectType === 'locations' && <LocationDetail location={locationData} />}
          {objectType === 'policies' && <PolicyDetail policy={policyData} />}
          {objectType === 'shipping_zones' && <ShippingZoneDetail shippingZone={shippingZoneData} />}
          {objectType === 'customers' && <CustomerDetail customer={customer} />}
          {objectType === 'blogs' && <BlogDetail blog={blog} />}
          {objectType === 'inventory_levels' && <InventoryLevelDetail inventoryLevel={inventoryLevel} />}
          {objectType === 'saved_searches' && <SavedSearchDetail savedSearch={savedSearch} />} 
          {objectType === 'files' && <FileDetail file={file} />} 

    
        </div>
      </div>


     


    </>
  );
};

export default Detail;