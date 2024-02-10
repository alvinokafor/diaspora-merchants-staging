import AppLayout from '@/layouts/AppLayout';
import { createstore,liststore } from '../config/apiCall';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Add, Apps, FormatListBulleted } from '@mui/icons-material';
import { Button, Flex, Switch, TextField } from '@radix-ui/themes';
import { Box, Select } from '@radix-ui/themes';
import { Table } from '@radix-ui/themes';
import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import './style.css';
import { Link } from 'react-router-dom';


const StoreDetails = () => {
    const [formData, setFormData] = useState({
        name: "",
        country: "",
        location: "",
        category: "",
        subCategory: ""
    });
    const [allstore, setAllstore] = useState([]);
    const handleChange = (e: { target: { name: any; value: any; }; }) => {
      const { name, value } = e.target;
      setFormData((prevState: any) => ({
        ...prevState,
        [name]: value,
      }));
    };
  
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      try {
        const token = localStorage.getItem('token');
        console.log('token:', token);
        const response = await createstore(formData, token); 
        // console.log('this are all the datas:', response.data);
        // localStorage.setItem('datas', response.data);
        toast(`${response.data.message}`,{
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
      }catch (error: any) {
        if (error instanceof Error) {
          toast(`${error.message} Error in !`);
          console.error(' error:', error);
        } else {
          console.error('Unknown error:', error);
        }
      }
    }; 


    const fetchData = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await liststore(token); 
            console.log('API response:', response.data.data.data); // Log the API response
            if (response && response.data && Array.isArray(response.data.data.data)) {
                setAllstore(response.data.data.data);
                localStorage.setItem('datas', JSON.stringify(response.data)); // Save response data to local storage
                toast(`${response.data.message}`,{
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            } else {
                console.error('Invalid API response:', response);
                toast('Invalid API response', { type: 'error' });
            }
        } catch (error: any) {
            console.error('Error fetching data:', error);
            toast(`${error.message}`, { type: 'error' });
        }
    };
    
    useEffect(()=> {   
        fetchData();
    },[])
   return( 
    <AppLayout>
        <ToastContainer />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
        {/* First Card */}
        <Box style={{ padding: '20px', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', width: '-100%' }}>
        {/* Icons */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
    
        <TextField.Root style={{marginLeft:20}}>
            <TextField.Input placeholder="Search order id or cus...." />
        </TextField.Root>

  <Dialog.Root>
    <Dialog.Trigger asChild>
    <Button className="Button violet" variant="solid" style={{ marginLeft: 'auto' }}>
       <Add />Add Product
      </Button>
    </Dialog.Trigger>
    <Dialog.Portal>
    <ToastContainer />
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
      <form className="space-y-4" onSubmit={handleSubmit}>
      
        <Dialog.Title className="DialogTitle">Create Store</Dialog.Title>
        <Dialog.Description className="DialogDescription">
         Create Your Store
        </Dialog.Description>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="name">
            Name
          </label>
          <input className="Input" id="name"
                name="name"
              value={formData.name}
              onChange={handleChange} defaultValue="name" />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="country">
          Country
          </label>
          <input className="Input" id="country"
          name="country"
              value={formData.country}
              onChange={handleChange} defaultValue="country" />
        </fieldset>

        <fieldset className="Fieldset">
          <label className="Label" htmlFor="location">
          location
          </label>
          <input className="Input" id="location"
          name="location"
              value={formData.location}
              onChange={handleChange} defaultValue="location" />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="location">
          Category
          </label>
          <select className="Input" id="category"
          name="category"
              value={formData.category}
              onChange={handleChange}>
            <option value="">Select category</option>
            <option value="African">African</option>
            <option value="Financial">Financial</option>
            <option value="Clothing">Clothing</option>
            <option value="Educational">Educational</option>
            <option value="Health">Health</option>
            <option value="Legal">Legal</option>
        </select>
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="location">
          Subcategory
          </label>
          <select className="Input" id="subcategory"
          name="subCategory"
              value={formData.subCategory}
              onChange={handleChange}>
            <option value="">Select subcategory</option>
            <option value="Groceries">Groceries</option>
            <option value="Fashional">Fashional</option>
            <option value="Export">Export</option>
        </select>
        </fieldset>
      
        <div style={{ display: 'flex', marginTop: 25, justifyContent: "space-between" }}>

        <Dialog.Close asChild>
            <button className="Button green">Cancel</button>
          </Dialog.Close>
            <button type='submit' className="Button green">Save changes</button>
        </div>
        </form>

        <Dialog.Close asChild>
          <button className="IconButton" aria-label="Close">
           ...
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
        </div>
    {/* Search bar */}
    </Box>


        {/* Second Card */}
        <Box style={{ padding: '20px', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>


        <Table.Root style={{ width: '100%' }}>
            <Table.Body>
                <Table.Row style={{backgroundColor:"lightgray"}}>
                    <Table.RowHeaderCell>Name</Table.RowHeaderCell>
                    <Table.RowHeaderCell>Currency</Table.RowHeaderCell>
                    <Table.RowHeaderCell>Status</Table.RowHeaderCell>
                    <Table.RowHeaderCell>Location</Table.RowHeaderCell>
                    <Table.RowHeaderCell>Category</Table.RowHeaderCell>
                    <Table.RowHeaderCell>Subcategory</Table.RowHeaderCell>
                    <Table.RowHeaderCell>Created At</Table.RowHeaderCell>
                    <Table.RowHeaderCell>Updated At</Table.RowHeaderCell>
                </Table.Row>
                {allstore && allstore.map(store => (
                    <Table.Row key={store['id']}>
                        <Table.Cell style={{color:"blue"}}> <Link to={`/store/${store['id']}`}>{store['name']}</Link></Table.Cell>
                        <Table.Cell>{store['currency']}</Table.Cell>
                        <Table.Cell>{store['status']}</Table.Cell>
                        <Table.Cell>{store['location']}</Table.Cell>
                        <Table.Cell>{store['category']}</Table.Cell>
                        <Table.Cell>{store['subCategory']}</Table.Cell>
                        <Table.Cell>{new Date(store['createdAt']).toLocaleString()}</Table.Cell>
                        <Table.Cell>{new Date(store['updatedAt']).toLocaleString()}</Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table.Root>

        </Box>
        </div>
    </AppLayout>
)};

export default StoreDetails;
