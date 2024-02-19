
import { Badge, Box, Button, Select, Flex,Tabs,Table, TextField } from "@radix-ui/themes";
import AppLayout from "@/layouts/AppLayout";
// import * as Select from '@radix-ui/react-select';
import { GetApp } from '@mui/icons-material';
import { ContactForm } from '@/components/compliance';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(ArcElement, Tooltip, Legend);

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Bar Chart - Stacked',
    },
  },
  responsive: true,
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      backgroundColor: 'rgb(255, 99, 132)',
      stack: 'Stack 0',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      backgroundColor: 'rgb(75, 192, 192)',
      stack: 'Stack 0',
    },
    {
      label: 'Dataset 3',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      backgroundColor: 'rgb(53, 162, 235)',
      stack: 'Stack 1',
    },
  ],
};
export const doughnut_data = {
  labels: ['Red', 'Blue'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        // 'rgba(255, 206, 86, 0.2)',
        // 'rgba(75, 192, 192, 0.2)',
        // 'rgba(153, 102, 255, 0.2)',
        // 'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        // 'rgba(255, 206, 86, 1)',
        // 'rgba(75, 192, 192, 1)',
        // 'rgba(153, 102, 255, 1)',
        // 'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
      height:4,
    },
  ],
};

const OverviewTab = () => (
    <><Box className="p-6 bg-white max-w-[700px] mx-auto rounded-md mb-10">
       <Box style={{width:"100%"}}>
        <h1 style={{textAlign:"center",fontSize:20,padding:"10%",color:"#57584e"}}>NGN</h1>
          <hr/>
          <div>
            <h1 style={{textAlign:"center",fontSize:20,paddingTop:"50%",color:"#57584e"}}>Total Payouts</h1>
            <h1 style={{textAlign:"center",fontSize:20,padding:"10%",fontWeight:"bold",color:"#57584e"}}>00.0</h1>
            <h1 style={{textAlign:"center",fontSize:17,color:"#57584e"}}>0% of Limit</h1>
          {/* <Bar options={options} data={data} /> */}
          </div>
        </Box>
    </Box></>
    
);

const FilterSearchExport = () => (
    <Table.Header>
      <Table.Row>
        <Table.RowHeaderCell>
          {/* Filters */}
          <Select.Root defaultValue="Last 30 Days:">
        <Select.Trigger />
        <Select.Content>
            <Select.Group>
            <Select.Label>Last 20 Days</Select.Label>
            <Select.Item value="Last 30 Days:">Last 30 Days:</Select.Item>
            <Select.Item value="Last 20 Days">Last 20 Days</Select.Item>
            {/* <Select.Item value="grape" disabled>
                Grape
            </Select.Item> */}
            </Select.Group>
            <Select.Separator />
            <Select.Group>
            <Select.Label>Last Months</Select.Label>
            <Select.Item value="Last 30 Months">Last 30 Months</Select.Item>
            <Select.Item value="Last 30 Months">Last 30 Months</Select.Item>
            </Select.Group>
        </Select.Content>
        </Select.Root>
        </Table.RowHeaderCell>

      </Table.Row>
    </Table.Header>
  );
  
  const TransactionTable = () => (
    <>
      
      <Table.Root style={{width:'100%'}}>
      <FilterSearchExport />
      <div style={{width:'100%', display:"flex",alignItems:"center",justifyContent:"center"}}>
        <Box style={{width:"100%"}}>
          <h1 style={{textAlign:"center",fontSize:30,padding:"14%",fontWeight:"bold",color:"#57584e"}}>200,000.00</h1>
          <div>
          <Bar options={options} data={data} />
          </div>
          <hr style={{padding:10}}/>
          <Flex style={{backgroundColor:"#000",marginTop:40}}>
            <Box style={{ backgroundColor: "#fff", flex: '1',width:"100%",padding:5,borderWidth:1,borderColor:"#edf1f2" }}>
              <p>Success Rate</p>
              <Doughnut data={doughnut_data} />;
            </Box>
            <Box style={{ backgroundColor: "#fff", flex: '1', width:"100%",padding:5,borderWidth:1,borderColor:"#edf1f2"  }}>
              <p>Payment Issues</p>
            </Box>
            </Flex>
        </Box>
        
      </div>
      
      </Table.Root>
    </>
  );
export default function Home() { 
  return (
    <AppLayout>
      <Box style={{ backgroundColor: 'var(--gray-a2)', borderRadius: 'var(--radius-3)' }}>
       
          <Flex style={{backgroundColor:"#000"}}>
            <Box style={{ backgroundColor: "#fff", flex: '3', maxHeight: '450px', overflowY: 'auto',width:"190%" }}>
              {/* Transaction table */}
              <TransactionTable />
            </Box>
            <Box style={{ backgroundColor: "#fbfbfb", flex: '1', maxHeight: '450px', overflowY: 'auto',width:"100%" }}>
            <OverviewTab />
            </Box>
          </Flex>
      </Box>
    </AppLayout>
  );
};
