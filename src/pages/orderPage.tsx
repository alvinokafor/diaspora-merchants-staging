
import { Badge, Box, Button, Select, Flex,Tabs,Table, TextField } from "@radix-ui/themes";
import AppLayout from "@/layouts/AppLayout";
// import * as Select from '@radix-ui/react-select';
import { GetApp } from '@mui/icons-material';
import { ContactForm } from '@/components/compliance';

const OverviewTab = () => (
    <><Box className="p-6 bg-white max-w-[550px] mx-auto rounded-md shadow-md mb-10">
        {/* <div className="card" style={{ backgroundColor: '#fff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '8px', maxWidth: '100%',marginBottom:"40px" }}> */}
        
        <div className="details" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <p className="item" style={{ marginBottom: '10px', color: "rgb(54, 118, 200)" }}>Men's Clothing</p>
                <p className="price" style={{ marginBottom: '10px' }}>NGN 2,000.00</p>
            </div>
            <hr style={{ margin: '20px' }} />
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <p className="item" style={{ marginBottom: '10px' }}>Total</p>
                <p className="price" style={{ marginBottom: '10px' }}>NGN 2,000.00</p>
            </div>
            <hr style={{ margin: '20px' }} />
            <p style={{ marginBottom: '15px',fontWeight:"500" }}>Patrick Francis</p>
            <p style={{ marginBottom: '15px',color:"#57584e" }}>francisdaniel140@gmail.com</p>
            <p style={{ marginBottom: '15px',color:"#57584e" }}>+23408092363468</p>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <a href='#' className="view-btn" style={{ color: '#007bff', border: 'none', marginTop: '10px', cursor: 'pointer' }}>View Customer</a>
                <a href='#' className="view-btn" style={{ color: '#007bff', border: 'none', marginTop: '10px', cursor: 'pointer' }}>View Transaction</a>
                {/* <a href='#' className="view-btn" style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '8px 16px', marginTop: '10px', cursor: 'pointer', borderRadius: '4px' }}>View Customer</a>
    <a href='#' className="view-btn" style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '8px 16px', marginTop: '10px', cursor: 'pointer', borderRadius: '4px' }}>View Transaction</a>
    */}
            </div>
        </div>
        {/* </div> */}
    </Box><Box className="p-6 bg-white max-w-[550px] mx-auto rounded-md shadow-md">
            <div className="details" style={{ display: 'flex', flexDirection: 'column' }}>

                <p style={{ marginBottom: '10px',fontWeight:"500" }}>Received</p>
                <p style={{ marginBottom: '15px',color:"gray" }}>Feb 7, 2024, 1:49 PM</p>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <a href='#' className="view-btn" style={{ backgroundColor: '#fafafa', color: '#000', border: 'none', padding: '8px 16px', marginTop: '10px', cursor: 'pointer', borderRadius: '4px' }}>Cancel order</a>
                    <a href='#' className="view-btn" style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '8px 16px', marginTop: '10px', cursor: 'pointer', borderRadius: '4px' }}>Mark order as delivered</a>

                </div>
            </div>
            {/* </div> */}
        </Box></>
    
);

const FilterSearchExport = () => (
    <Table.Header>
      <Table.Row>
        <Table.RowHeaderCell>
          {/* Filters */}
          <Select.Root defaultValue="Filter:">
        <Select.Trigger />
        <Select.Content>
            <Select.Group>
            <Select.Label>Fruits</Select.Label>
            <Select.Item value="Filter:">Filter:</Select.Item>
            <Select.Item value="apple">Apple</Select.Item>
            <Select.Item value="grape" disabled>
                Grape
            </Select.Item>
            </Select.Group>
            <Select.Separator />
            <Select.Group>
            <Select.Label>Vegetables</Select.Label>
            <Select.Item value="carrot">Carrot</Select.Item>
            <Select.Item value="potato">Potato</Select.Item>
            </Select.Group>
        </Select.Content>
        </Select.Root>
        </Table.RowHeaderCell>
        <Table.RowHeaderCell>
          {/* Search input */}
          <TextField.Root>
            <TextField.Input placeholder="Search order id or customer...." />
          </TextField.Root>
        </Table.RowHeaderCell>
        <Table.RowHeaderCell>
          {/* Export to CSV button */}
          <Button variant="solid">
            <GetApp />Export
          </Button>
        </Table.RowHeaderCell>
        <Table.RowHeaderCell>
          {/* Dropdown icon */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" role="img" aria-label="more vertical" className="sc-gLDzan iqLDnp" style={{ width: '24px', height: '24px' }}>
            <circle cx="12" cy="12" r="2"></circle>
            <circle cx="12" cy="4" r="2"></circle>
            <circle cx="12" cy="20" r="2"></circle>
         </svg>
        </Table.RowHeaderCell>
      </Table.Row>
    </Table.Header>
  );
  
  const TransactionTable = () => (
    <div>
      
      <Table.Root style={{width:'100%'}}>
      <FilterSearchExport />
        <Table.Body>
          {/* Table rows */}
          {Array.from({ length: 9 }).map((_, index) => (
            <Table.Row key={index}>
              {/* <Table.Cell>
                <CheckBoxOutlineBlank />
              </Table.Cell> */}
              <Table.Cell style={{fontWeight:"600"}}>Customer Name {index + 1}</Table.Cell>
              <Table.Cell style={{fontWeight:"600"}}>$200</Table.Cell>
              <Table.Cell style={{fontWeight:"600"}} >Feb 7, 2024</Table.Cell>
              <Table.Cell style={{fontWeight:"600"}}>2:30</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
export default function Orders() { 
  return (
    <AppLayout>
      <Box style={{ backgroundColor: 'var(--gray-a2)', borderRadius: 'var(--radius-3)' }}>
       
          <Flex style={{backgroundColor:"#000"}}>
            <Box style={{ backgroundColor: "#fff", flex: '1', maxHeight: '450px', overflowY: 'auto',width:"190%" }}>
              {/* Transaction table */}
              <TransactionTable />
            </Box>
            <Box style={{ backgroundColor: "#fbfbfb", flex: '1', maxHeight: '450px', overflowY: 'auto',width:"100%" }}>
             
            <h2 style={{padding:40}}>Order 1514843</h2>
              <Tabs.Root defaultValue="overview">
                <Tabs.List size="2">
                <Tabs.Trigger className="flex items-center gap-4" value="overview">
                    <p>overview</p>
                    <Badge className="ml-2" variant="soft" color="green">
                    Completed
                    </Badge>
                </Tabs.Trigger>
                <Tabs.Trigger value="contact">Contact</Tabs.Trigger>
              </Tabs.List>

        <Box px="4" pt="3" pb="2">
          <Tabs.Content value="overview">
            <OverviewTab />
          </Tabs.Content>

          <Tabs.Content value="contact">
            <ContactForm />
          </Tabs.Content>

        </Box>
      </Tabs.Root>


            </Box>
          </Flex>
      </Box>
    </AppLayout>
  );
};
