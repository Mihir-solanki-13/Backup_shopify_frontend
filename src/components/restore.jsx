const restoreFunction = async (uuid, objectType, id) => {
    try {
        // Construct the URL with query parameters
        const url = `http://127.0.0.1:8080/api/restore_by_id/${uuid}/${objectType}/${id}/`;

        // Make a GET request to your backend API
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // Convert the response to JSON format
        const data = await response.json();

        // Return the response data
        return data;
    } catch (error) {
        // Handle any errors that occur during the API call
        console.error("Error restoring data:", error);
        // Return null if there's an error
        return null;
    }
};

export default restoreFunction;
