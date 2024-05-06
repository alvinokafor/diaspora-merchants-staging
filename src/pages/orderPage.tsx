import {
  Box,
  Button,
  // Select,
  Flex,
  Table,
  TextField,
  Dialog,
  Text,
} from "@radix-ui/themes";
import { useState, useEffect } from "react";
import AppLayout from "@/layouts/AppLayout";
// import { GetApp } from "@mui/icons-material";
// import { AcceptOrder, CancelOrder, MarkAsPicked } from "@/components/orders";
import { toast, Bounce } from "react-toastify";
import { getOrders } from "@/config/apiCall";
import { IOrder } from "@/config/apiCall";

// const OverviewTab = () => {
//   const [showMap, setShowMap] = useState(false);
//   return (
//     <>
//       <Box className="p-6 bg-white max-w-[550px] mx-auto rounded-md shadow-md mb-10">
//         {/* <div className="card" style={{ backgroundColor: '#fff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '8px', maxWidth: '100%',marginBottom:"40px" }}> */}

//         <div
//           className="details"
//           style={{ display: "flex", flexDirection: "column" }}
//         >
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "row",
//               justifyContent: "space-between",
//             }}
//           >
//             <p
//               className="item"
//               style={{ marginBottom: "10px", color: "rgb(54, 118, 200)" }}
//             >
//               Men's Clothing
//             </p>
//             <p className="price" style={{ marginBottom: "10px" }}>
//               NGN 2,000.00
//             </p>
//           </div>
//           <hr style={{ margin: "20px" }} />
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "row",
//               justifyContent: "space-between",
//             }}
//           >
//             <p className="item" style={{ marginBottom: "10px" }}>
//               Total
//             </p>
//             <p className="price" style={{ marginBottom: "10px" }}>
//               NGN 2,000.00
//             </p>
//           </div>
//           <hr style={{ margin: "20px" }} />
//           <p style={{ marginBottom: "15px", fontWeight: "500" }}>
//             Patrick Francis
//           </p>
//           <p style={{ marginBottom: "15px", color: "#57584e" }}>
//             francisdaniel140@gmail.com
//           </p>
//           <p style={{ marginBottom: "15px", color: "#57584e" }}>
//             +23408092363468
//           </p>
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "row",
//               justifyContent: "space-between",
//             }}
//           >
//             <a
//               href="#"
//               className="view-btn"
//               style={{
//                 color: "#007bff",
//                 border: "none",
//                 marginTop: "10px",
//                 cursor: "pointer",
//               }}
//             >
//               View Customer
//             </a>
//             <a
//               href="#"
//               className="view-btn"
//               style={{
//                 color: "#007bff",
//                 border: "none",
//                 marginTop: "10px",
//                 cursor: "pointer",
//               }}
//             >
//               View Transaction
//             </a>
//             {/* <a href='#' className="view-btn" style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '8px 16px', marginTop: '10px', cursor: 'pointer', borderRadius: '4px' }}>View Customer</a>
//     <a href='#' className="view-btn" style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '8px 16px', marginTop: '10px', cursor: 'pointer', borderRadius: '4px' }}>View Transaction</a>
//     */}
//           </div>
//         </div>
//         {/* </div> */}
//       </Box>
//       <Box className="p-6 bg-white  max-w-[550px] mx-auto rounded-md shadow-md">
//         <div
//           className="details"
//           style={{ display: "flex", flexDirection: "column" }}
//         >
//           <p style={{ marginBottom: "10px", fontWeight: "500" }}>
//             Received On:
//           </p>
//           <p style={{ marginBottom: "15px", color: "gray" }}>
//             Feb 7, 2024, 1:49 PM
//           </p>
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "row",
//               justifyContent: "space-between",
//             }}
//           >
//             <CancelOrder />
//             <AcceptOrder setShowMap={setShowMap} />
//             <MarkAsPicked />
//           </div>
//           {showMap && (
//             <Box className="mt-4">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3191.708801974967!2d73.13016848451862!3d22.285120636635604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1705563079752!5m2!1sen!2sin"
//                 width="450"
//                 height="350"
//                 loading="lazy"
//                 style={{ border: "0" }}
//               ></iframe>
//             </Box>
//           )}
//         </div>
//         {/* </div> */}
//       </Box>
//     </>
//   );
// };

// const FilterSearchExport = () => (
//   <Table.Header>
//     <Table.Row>
//       <Table.RowHeaderCell>
//         {/* Filters */}
//         <Select.Root defaultValue="Filter:">
//           <Select.Trigger />
//           <Select.Content>
//             <Select.Group>
//               <Select.Label>Fruits</Select.Label>
//               <Select.Item value="Filter:">Filter:</Select.Item>
//               <Select.Item value="apple">Apple</Select.Item>
//               <Select.Item value="grape" disabled>
//                 Grape
//               </Select.Item>
//             </Select.Group>
//             <Select.Separator />
//             <Select.Group>
//               <Select.Label>Vegetables</Select.Label>
//               <Select.Item value="carrot">Carrot</Select.Item>
//               <Select.Item value="potato">Potato</Select.Item>
//             </Select.Group>
//           </Select.Content>
//         </Select.Root>
//       </Table.RowHeaderCell>
//       <Table.RowHeaderCell>
//         {/* Search input */}
//         <TextField.Root>
//           <TextField.Input placeholder="Search order id or customer...." />
//         </TextField.Root>
//       </Table.RowHeaderCell>
//       <Table.RowHeaderCell>
//         {/* Export to CSV button */}
//         <Button variant="solid">
//           <GetApp />
//           Export
//         </Button>
//       </Table.RowHeaderCell>
//       <Table.RowHeaderCell>
//         {/* Dropdown icon */}
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="gray"
//           stroke-width="2"
//           stroke-linecap="round"
//           stroke-linejoin="round"
//           role="img"
//           aria-label="more vertical"
//           className="sc-gLDzan iqLDnp"
//           style={{ width: "24px", height: "24px" }}
//         >
//           <circle cx="12" cy="12" r="2"></circle>
//           <circle cx="12" cy="4" r="2"></circle>
//           <circle cx="12" cy="20" r="2"></circle>
//         </svg>
//       </Table.RowHeaderCell>
//     </Table.Row>
//   </Table.Header>
// );

const TransactionTable = () => {
  const [allOrders, setAllOrders] = useState<IOrder[]>([]);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await getOrders(token);
      console.log("API response:", response.data.data.data); // Log the API response
      if (response && response.data && Array.isArray(response.data.data.data)) {
        setAllOrders(response.data.data.data);
        localStorage.setItem("datas", JSON.stringify(response.data)); // Save response data to local storage
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
        console.error("Invalid API response:", response);
        toast("Invalid API response", { type: "error" });
      }
    } catch (error: any) {
      console.error("Error fetching data:", error);
      toast(`${error.message}`, { type: "error" });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function getFormattedDate(date: string) {
    const formattedDate = Intl.DateTimeFormat("en-US", {
      day: "numeric",
      year: "numeric",
      month: "long",
    }).format(new Date(date));

    return formattedDate;
  }

  return (
    <div>
      <Table.Root style={{ width: "100%" }}>
        {/* <FilterSearchExport /> */}
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Customer Name</Table.ColumnHeaderCell>
            {/* <Table.ColumnHeaderCell>Customer Number</Table.ColumnHeaderCell> */}
            <Table.ColumnHeaderCell>Store</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Product</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Amount</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Date</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {/* Table rows */}
          {allOrders.map((order) => (
            <Table.Row key={order._id}>
              {/* <Table.Cell>
                <CheckBoxOutlineBlank />
              </Table.Cell> */}
              <Table.Cell style={{ fontWeight: "500" }}>
                {order.customerName}
              </Table.Cell>
              {/* <Table.Cell style={{ fontWeight: "500" }}>
                {order.customerPhone}
              </Table.Cell> */}
              <Table.Cell style={{ fontWeight: "500" }}>
                {order.store.name}
              </Table.Cell>
              <Table.Cell style={{ fontWeight: "500" }}>
                {order.productName}
              </Table.Cell>
              <Table.Cell style={{ fontWeight: "600" }}>
                NGN {order.price}
              </Table.Cell>
              <Table.Cell style={{ fontWeight: "600" }}>
                {getFormattedDate(order.createdAt)}
              </Table.Cell>
              <Table.Cell style={{ fontWeight: "600" }}>
                <Dialog.Root>
                  <Dialog.Trigger>
                    <Button>View Details</Button>
                  </Dialog.Trigger>

                  <Dialog.Content style={{ maxWidth: 450 }}>
                    <Dialog.Title>Order Details</Dialog.Title>

                    <Flex direction="column" gap="3">
                      <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                          Customer Name
                        </Text>
                        <TextField.Input
                          disabled
                          defaultValue={order.customerName}
                          placeholder="Enter your full name"
                        />
                      </label>
                      <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                          Customer Email
                        </Text>
                        <TextField.Input
                          disabled
                          defaultValue={order.customerEmail}
                        />
                      </label>
                      <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                          Customer Phone
                        </Text>
                        <TextField.Input
                          disabled
                          defaultValue={
                            order.customerPhone
                              ? order.customerPhone
                              : "No Phone Number"
                          }
                        />
                      </label>
                      <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                          Store
                        </Text>
                        <TextField.Input
                          disabled
                          defaultValue={order.store.name}
                        />
                      </label>
                      <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                          Product
                        </Text>
                        <TextField.Input
                          disabled
                          defaultValue={`${order.productName} x1`}
                        />
                      </label>
                      <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                          Delivery Address
                        </Text>
                        <TextField.Input
                          disabled
                          defaultValue={`${order.orderAddress}`}
                        />
                      </label>
                    </Flex>

                    <Flex gap="3" mt="4" justify="end">
                      <Dialog.Close>
                        <Button variant="soft" color="gray">
                          Cancel
                        </Button>
                      </Dialog.Close>

                      <Button>Accept</Button>
                      <Button>Decline</Button>
                    </Flex>
                  </Dialog.Content>
                </Dialog.Root>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};
export default function Orders() {
  return (
    <AppLayout>
      <Box
        style={{
          backgroundColor: "var(--gray-a2)",
          borderRadius: "var(--radius-3)",
        }}
      >
        <TransactionTable />
        {/* <Flex style={{ backgroundColor: "#000" }}>
          <Box
            style={{
              backgroundColor: "#fff",
              flex: "1",
              maxHeight: "450px",
              overflowY: "auto",
              width: "190%",
            }}
          >
            <TransactionTable />
          </Box>
          <Box
            style={{
              backgroundColor: "#fbfbfb",
              flex: "1",
              maxHeight: "450px",
              overflowY: "auto",
              width: "100%",
            }}
          >
            <h2 style={{ padding: 40, fontWeight: "600" }}>Order 1514843</h2>

            <OverviewTab />
            <Tabs.Root defaultValue="overview">
              <Tabs.List size="2">
                <Tabs.Trigger
                  className="flex items-center gap-4"
                  value="overview"
                >
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
        </Flex> */}
      </Box>
    </AppLayout>
  );
}
