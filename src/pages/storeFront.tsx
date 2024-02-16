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
import { FiSearch } from 'react-icons/fi';

const StoreFront = () => {
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

    const handleSelectChange = (newValue: string) => {
        setFormData((prevState: any) => ({
          ...prevState,
          country: newValue,
        }));
    };
    const categorySelectChange = (newValue: string) => {
        setFormData((prevState: any) => ({
          ...prevState,
          category: newValue,
        }));
    };
    const subcategorySelectChange = (newValue: string) => {
        setFormData((prevState: any) => ({
          ...prevState,
          subCategory: newValue,
        }));
    };
   return( 
    <AppLayout>
        <ToastContainer />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
        {/* First Card */}
        <Box style={{ padding: '20px', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', width: '-100%' }}>
        {/* Icons */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
    
        <TextField.Root style={{ display: 'flex', alignItems: 'center', marginLeft: 20 }}>
        <FiSearch style={{ marginRight: 2,marginLeft: 5, color: '#000' }} />
        <TextField.Input placeholder="Search order id or cus...." />
        </TextField.Root>

  <Dialog.Root>
    <Dialog.Trigger asChild>
    <Button className="Button violet" variant="solid" style={{ marginLeft: 'auto',backgroundColor:"#000",color:"#fff"  }}>
       <Add />Create Store
      </Button>
    </Dialog.Trigger>
    <Dialog.Portal>
    <ToastContainer />
      <Dialog.Overlay className="DialogOverlay" />

      <Dialog.Content className="DialogContent" style={{overflowY: 'auto'}}> 
            <form className="space-y-4" onSubmit={handleSubmit}>
                {/* <Dialog.Title className="DialogTitle">Create Store</Dialog.Title> */}
                <Dialog.Description className="DialogDescription">
                Create Store
                </Dialog.Description>
           
            <Flex direction={"column"} gap={"2"}>
              <label className="font-medium text-sm">Name</label>
              <TextField.Input
                name="name"
                className="Input"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Name"
                type="text"
              />
            </Flex>
            <Flex direction={"column"} gap={"4"}>
                    <label className="font-medium text-sm">Country</label>
                    <Select.Root size={"3"} onValueChange={handleSelectChange} defaultValue="none">
                        <Select.Trigger />
                        <Select.Content>
                        <Select.Item value='none'>Select Country</Select.Item>
                        <Select.Item value="NG">Nigerian</Select.Item>
                        <Select.Item value="USA">USA</Select.Item>
                        </Select.Content>
                    </Select.Root>
            </Flex>
            <Flex direction={"column"} gap={"2"}>
              <label className="font-medium text-sm">Address</label>
              <TextField.Input
                name="location"
                className="Input"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter Address"
                type="text"
              />
            </Flex>

            <Flex direction={"column"} gap={"4"}>
                    <label className="font-medium text-sm">Category</label>
                    <Select.Root size={"3"} onValueChange={categorySelectChange} defaultValue="none">
                        <Select.Trigger />
                        <Select.Content>
                        <Select.Item value='none'>Select category</Select.Item>
                        <Select.Item value="African">African</Select.Item>
                        <Select.Item value="Financial">Financial</Select.Item>
                        <Select.Item value="Clothing">Clothing</Select.Item>
                        <Select.Item value="Educational">Educational</Select.Item>
                        <Select.Item value="Health">Health</Select.Item>
                        <Select.Item value="Legal">Legal</Select.Item>
                        </Select.Content>
                    </Select.Root>
            </Flex>

            <Flex direction={"column"} gap={"4"}>
                    <label className="font-medium text-sm">SubCategory</label>
                    <Select.Root size={"3"} onValueChange={subcategorySelectChange} defaultValue="none">
                        <Select.Trigger />
                        <Select.Content>
                        <Select.Item value="none">Select subcategory</Select.Item>
                        <Select.Item value="Groceries">Groceries</Select.Item>
                        <Select.Item value="Fashional">Fashional</Select.Item>
                        <Select.Item value="Export">Export</Select.Item>
                        </Select.Content>
                    </Select.Root>
            </Flex>
                
            
                <div style={{ display: 'flex', marginTop: 25, justifyContent: "space-between" }}>

                <Dialog.Close asChild>
                    <button style={{backgroundColor:"lightgray",color:"#000"}} className="Button green">Cancel</button>
                </Dialog.Close>
                    <button type='submit' style={{backgroundColor:"#000",color:"#fff"}} className="Button green">Save changes</button>
                </div>

                <Dialog.Close asChild>
                <button className="IconButton" aria-label="Close">
                ...
                </button>
                </Dialog.Close>
                </form>
        </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
  <hr/>
        </div>
    {/* Search bar */}
    < br/>

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
                        <Table.Cell style={{color:"blue"}}> <Link to={`/store-details/${store['id']}`}>{store['name']}</Link></Table.Cell>
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

export default StoreFront;
