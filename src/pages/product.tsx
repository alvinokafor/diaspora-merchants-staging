import AppLayout from '@/layouts/AppLayout';
import { Add, Apps, FormatListBulleted } from '@mui/icons-material';
import { Button, Flex, Switch, TextField } from '@radix-ui/themes';
import { Box, Select } from '@radix-ui/themes';
import { Table } from '@radix-ui/themes';

const ProductsPage = () => (
  <AppLayout>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
      {/* First Card */}
      <Box style={{ padding: '20px', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', width: '-100%' }}>
    {/* Icons */}
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Apps style={{ marginRight: '10px', cursor: 'pointer' }} />
        <FormatListBulleted style={{ marginRight: '10px', cursor: 'pointer' }} />
        <div style={{ borderRight: '1px solid #ccc', height: '24px', marginRight: '10px' }}></div>
        {/* Filter button */}
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
      </div>
      <TextField.Root style={{marginLeft:20}}>
    <TextField.Input placeholder="Search order id or cus...." />
  </TextField.Root>
  
      {/* Add product button */}
      <Button variant="solid" style={{ marginLeft: 'auto' }}>
       <Add />Add Product
      </Button>
    </div>
  {/* Search bar */}
</Box>


      {/* Second Card */}
      <Box style={{ padding: '20px', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <Table.Root style={{ width: '100%' }}>
      <Table.Body>
        <Table.Row>
          {/* <Table.RowHeaderCell>Product Image</Table.RowHeaderCell> */}
          <Table.RowHeaderCell>Name</Table.RowHeaderCell>
          <Table.RowHeaderCell>Price</Table.RowHeaderCell>
          <Table.RowHeaderCell>In Stock</Table.RowHeaderCell>
          <Table.RowHeaderCell>Sold</Table.RowHeaderCell>
          <Table.RowHeaderCell>Date</Table.RowHeaderCell>
          <Table.RowHeaderCell>Revenue</Table.RowHeaderCell>
        </Table.Row>
        {/* Table rows */}
        {Array.from({ length: 5 }).map((_, index) => (
          <Table.Row key={index}>
            <Table.Cell style={{ fontWeight: "600" }}>Customer Name {index + 1}</Table.Cell>
            <Table.Cell style={{ fontWeight: "600" }}>$200</Table.Cell>
            <Table.Cell style={{ fontWeight: "600" }}>4</Table.Cell>
            <Table.Cell style={{ fontWeight: "600" }}>
              <TextField.Root size="2">
                <Flex gap="2">
                  <Switch defaultChecked />
                </Flex>
              </TextField.Root>
            </Table.Cell>
            <Table.Cell style={{ fontWeight: "600" }}>Feb 7, 2024</Table.Cell>
            <Table.Cell style={{ fontWeight: "600" }}>$200.000</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>

      </Box>
    </div>
  </AppLayout>
);

export default ProductsPage;
