import AppLayout from '@/layouts/AppLayout';
import { createProduct,liststoreDetail,listproductDetail } from '../config/apiCall';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Add, Apps, FormatListBulleted } from '@mui/icons-material';
import { Button, Flex,Tabs, Switch,Badge, TextField,Grid } from '@radix-ui/themes';
import { Box, Select } from '@radix-ui/themes';
import { Table } from '@radix-ui/themes';
import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import './style.css';
import { useParams } from 'react-router-dom';
import { FiSearch, FiEdit, FiTrash } from 'react-icons/fi';
interface StoreDetail {
    id: string;
    name: string;
    currency: string;
    status: string;
    location: string;
    category: string;
    subCategory: string;
    createdAt: string;
    updatedAt: string;
}
interface productDetail {
    id: string;
    name: string;
    currency: string;
    price: string;
    quantity: string;
    description: string;
    imgUrl: string;
    createdAt: string;
    updatedAt: string;
}
const ProductTab = ({ data }: { data: productDetail[] }) => (
    <>
       <Table.Root style={{ width: '100%' }}>
            <Table.Body>
                <Table.Row style={{backgroundColor:"lightgray"}}>
                    <Table.RowHeaderCell>Name</Table.RowHeaderCell>
                    <Table.RowHeaderCell>Currency</Table.RowHeaderCell>
                    <Table.RowHeaderCell>Price</Table.RowHeaderCell>
                    <Table.RowHeaderCell>Quantity</Table.RowHeaderCell>
                    <Table.RowHeaderCell>Description</Table.RowHeaderCell>
                    <Table.RowHeaderCell>Edith</Table.RowHeaderCell>
                    <Table.RowHeaderCell>Delete</Table.RowHeaderCell>
                </Table.Row>
                {data && data.map((store: productDetail) => (
                            <Table.Row key={store.id}>
                                <Table.Cell> {store.name}</Table.Cell>
                                <Table.Cell>{store.currency}</Table.Cell>
                                <Table.Cell>
                                <Badge className="ml-2" variant="soft" color="green">
                                    {store.price}
                                </Badge>
                                </Table.Cell>
                                <Table.Cell>{store.quantity}</Table.Cell>
                                <Table.Cell>{store.description}</Table.Cell>
                                <Table.Cell><FiEdit style={{ color: "#000" }} /></Table.Cell>
                                <Table.Cell><FiTrash style={{ color: "#000" }} /></Table.Cell>
                            </Table.Row>
                        ))}

            </Table.Body>
        </Table.Root>
    </>
    
);
const OrderTab = ({ data }: { data: StoreDetail[] }) => (
    <>
       {/* Second Card */}

       <Table.Root style={{ width: '100%' }}>
            <Table.Body>
                <Table.Row style={{backgroundColor:"lightgray"}}>
                    <Table.RowHeaderCell>Name</Table.RowHeaderCell>
                    <Table.RowHeaderCell>Currency</Table.RowHeaderCell>
                    <Table.RowHeaderCell>Status</Table.RowHeaderCell>
                    <Table.RowHeaderCell>Location</Table.RowHeaderCell>
                    <Table.RowHeaderCell>Category</Table.RowHeaderCell>
                    <Table.RowHeaderCell>Subcategory</Table.RowHeaderCell>
                    <Table.RowHeaderCell>....</Table.RowHeaderCell>
                    <Table.RowHeaderCell>....</Table.RowHeaderCell>
                </Table.Row>
                {data && data.map((store: StoreDetail) => (
                            <Table.Row key={store.id}>
                                <Table.Cell> {store.name}</Table.Cell>
                                <Table.Cell>{store.currency}</Table.Cell>
                                <Table.Cell>
                                <Badge className="ml-2" variant="soft" color="green">
                                    {store.status}
                                </Badge>
                                </Table.Cell>
                                <Table.Cell>{store.location}</Table.Cell>
                                <Table.Cell>{store.category}</Table.Cell>
                                <Table.Cell>{store.subCategory}</Table.Cell>
                                <Table.Cell><Button style={{backgroundColor:"#EAECF0",color:"#000"}}>Cancel Order</Button></Table.Cell>
                                <Table.Cell><Button style={{backgroundColor:"#000",color:"#fff"}}>Mark as Deliverd</Button></Table.Cell>
                            </Table.Row>
                        ))}

            </Table.Body>
        </Table.Root>

    </>
    
);
const StoreDetails = () => {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        store: id,
        name: "",
        description: "",
        country: "",
        price: "",
        quantity: "",
        imgUrl: "Image"
    });
    const [storeDetail, setStoreDetail] = useState<StoreDetail[]>([]);
    const [productDetail, setProductDetail] = useState<productDetail[]>([]);

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
      const { name, value } = e.target;
      setFormData((prevState: any) => ({
        ...prevState,
        [name]: value,
      }));
    };

    // create product
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      try {
        const token = localStorage.getItem('token');
        console.log('token:', formData);
        const response = await createProduct(formData, token); 
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
            console.log('API id:', id); 
            const response = await liststoreDetail(id, token);
            const responseData = response.data.data;
            if (responseData) {
                setStoreDetail([responseData]);
                toast(`${response.data.message}`, {
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
    const fetchProductData = async () => {
        try {
            const token = localStorage.getItem('token');
            const res = await listproductDetail(id, token);
            // const resData = res.data.data;
            console.log(res.data.data.data)
            if (res && res.data && Array.isArray(res.data.data.data)) {
                setProductDetail(res.data.data.data);
                toast(`${res.data.message}`,{
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
                console.error('Invalid API response:', res);
                toast('Invalid API response', { type: 'error' });
            }
        } catch (error: any) {
            console.error('Error fetching data:', error);
            toast(`${error.message}`, { type: 'error' });
        }
    };
    
    useEffect(()=> {   
        fetchData();
        fetchProductData();
    },[])

    const handleSelectChange = (newValue: string) => {
        setFormData((prevState: any) => ({
          ...prevState,
          country: newValue,
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
            <Button className="Button violet" variant="solid" style={{ marginLeft: 'auto',backgroundColor:"#000",color:"#fff" }}>
            <Add />Create New Product
            </Button>
            </Dialog.Trigger>
            <Dialog.Portal>
            <ToastContainer />
            <Dialog.Overlay className="DialogOverlay" />
            <Dialog.Content className="DialogContent" style={{overflowY: 'auto'}}>
            
            <form className="space-y-4" onSubmit={handleSubmit}>
                {/* <Dialog.Title className="DialogTitle">Create Store</Dialog.Title> */}
                <Dialog.Description className="DialogDescription">
                Create Product
                </Dialog.Description>
            <TextField.Input
                name="store"
                className="Input"
                value={formData.store}
                onChange={handleChange}
                type="hidden"
            />
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
            <Flex direction={"column"} gap={"2"}>
            <label className="font-medium text-sm">Description</label>
            <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter description"
                className="Input"
            />
            </Flex>

                <Flex direction={"column"} gap={"4"}>
                    <label className="font-medium text-sm">Country</label>
                    <Select.Root size={"3"} onValueChange={handleSelectChange} defaultValue="none">
                        <Select.Trigger />
                        <Select.Content>
                        <Select.Item value='none'>Select Country</Select.Item>
                        <Select.Item value="NG">Nigerian</Select.Item>
                        <Select.Item value="CA">Canada</Select.Item>
                        </Select.Content>
                    </Select.Root>
                </Flex>
                <Flex direction={"column"} gap={"2"}>
                    <label className="font-medium text-sm">Price</label>
                    <TextField.Input
                        name="price"
                        className="Input"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="Enter Amount"
                        type="number"
                    />
                </Flex>
            <Flex direction={"column"} gap={"2"}>
              <label className="font-medium text-sm">Quantity</label>
              <TextField.Input
                name="quantity"
                className="Input"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="Enter quantity"
                type="number"
              />
            </Flex>

            <Flex direction={"column"} gap={"2"}>
                <label className="font-medium text-sm">
                    Upload Image
                </label>
                <input
                    // value={formData.imgUrl}
                    // onChange={handleChange}
                    name="imgUrl"
                    type="file" />
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
        </div>
    {/* Search bar */}
    {/* </Box>


    <Box style={{ padding: '20px', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}> */}
<hr/>
<h2 style={{padding:15}}>KingStore</h2>
    <Tabs.Root defaultValue="orders">
                <Tabs.List size="2">
                <Tabs.Trigger className="flex items-center gap-4" value="orders">
                    <p>Orders</p>
                </Tabs.Trigger>
                <Tabs.Trigger value="product">Products</Tabs.Trigger>
              </Tabs.List>

        <Box px="4" pt="3" pb="2">
          <Tabs.Content value="orders">
            <OrderTab data={storeDetail}/>
          </Tabs.Content>

          <Tabs.Content value="product">
            <ProductTab data={productDetail} />
          </Tabs.Content>

        </Box>
      </Tabs.Root>
    </Box>



       
        </div>
    </AppLayout>
)};

export default StoreDetails;
