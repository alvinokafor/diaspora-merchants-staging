import AppLayout from '@/layouts/AppLayout';
import { ArrowDropDown, Add, Apps, FormatListBulleted } from '@mui/icons-material';
import { Button, MenuItem, Select, TextField } from '@mui/material';
import { Box, Table } from '@radix-ui/themes';

const ProductsPage = () => (
<AppLayout>
  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
    {/* First Card */}
    <Box as="section" style={{ padding: '20px', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',width:"-100%" }}>
      {/* Icons */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <Apps sx={{ marginRight: '10px', cursor: 'pointer' }} />
        <FormatListBulleted sx={{ marginRight: '10px', cursor: 'pointer' }} />
        <div style={{ borderRight: '1px solid #ccc', height: '24px', marginRight: '10px' }}></div>
        {/* Filter button */}
        <Select defaultValue="" endIcon={<ArrowDropDown />} style={{ marginRight: '10px' }}>
          <MenuItem value="" disabled>
            Filter
          </MenuItem>
          <MenuItem value="filter1">Filter 1</MenuItem>
          <MenuItem value="filter2">Filter 2</MenuItem>
        </Select>
        {/* Search bar */}
        <TextField placeholder="Search..." style={{ marginRight: '10px' }} />
        {/* Add product button */}
        <Button variant="contained" startIcon={<Add />}>
          Add Product
        </Button>
      </div>
    </Box>

    {/* Second Card */}
    <Box as="section" style={{ padding: '20px', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Product Image</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Price</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>In Stock</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Sold</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Revenue</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {/* Table rows here */}
        <Table.Row>
          <Table.RowHeaderCell>Product Image</Table.RowHeaderCell>
          <Table.Cell>Name</Table.Cell>
          <Table.Cell>Price</Table.Cell>
          <Table.Cell>In Stock</Table.Cell>
          <Table.Cell>Sold</Table.Cell>
          <Table.Cell>Revenue</Table.Cell>
        </Table.Row>
        {/* More table rows here */}
      </Table.Body>
    </Table.Root>
    </Box>
  </div>
  </AppLayout>
);

export default ProductsPage;
