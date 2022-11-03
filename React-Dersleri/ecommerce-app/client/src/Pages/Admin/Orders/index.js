import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Text,
} from "@chakra-ui/react";

import { useQuery } from "react-query";
import { fetchOrders } from "../../../api";

function Orders() {
  const { isLoading, isError, data } = useQuery("admin:orders", fetchOrders);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error {console.error.message}</div>;
  }
  console.log(data);
  return (
    <div>
      <Text fontSize="2xl" p={5}>
        Orders
      </Text>

      <Table variant="simple">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>User</Th>
            <Th>Address</Th>
            <Th>Items</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item) => (
            <Tr key={item._id}>
              <Td>{item.user.email}</Td>
              <Td>{item.adress}</Td>
              <Td isNumeric>{item.items.length}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
}

export default Orders;
