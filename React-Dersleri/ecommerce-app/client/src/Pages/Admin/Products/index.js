import { useMemo } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { NavLink } from "react-router-dom";

import { fetchProductList, deleteProduct } from "../../../api";
import { Table, Popconfirm } from "antd";
import { Text, Button, Flex } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

function Products() {
  const queryClient = useQueryClient();
  const { isLoading, isError, data, error } = useQuery(
    "admin:products",
    fetchProductList
  );

  const deleteMutation = useMutation(deleteProduct, {
    //admin:products bu key'in ait oldugu query bastan calısacak , silinen ürün gelmedigi içicn görünmeyecek. Yani biz refresh yapmadan direk sayfadan ürünü kaldırması icin yazdık.

    //en dıştaki index.js de queryclient'a erişiyoruz burada. Bu sayede sayfayı refresh etmez.
    onSuccess: () => queryClient.invalidateQueries("admin:products"),
  });

  const columns = useMemo(() => {
    return [
      {
        title: "Title",
        dataIndex: "title",
        key: "title",
      },
      {
        title: "Price",
        dataIndex: "price",
        key: "price",
      },
      {
        title: "Created At",
        dataIndex: "createdAt",
        key: "createdAt",
      },
      {
        title: "Action",
        key: "action",
        render: (record) => (
          <>
            <NavLink to={`/admin/products/${record._id}`}>
              <EditIcon color="#54B435" />
            </NavLink>

            <Popconfirm
              title="Silmek istediğinize emin misiniz?"
              //useMutation altında mutate geliyor, record id ise hangi ürünü sileceksen onun id'si geliyor.
              onConfirm={() => {
                deleteMutation.mutate(record._id, {
                  onSuccess: () => {
                    console.log("silindi");
                  },
                });
              }}
              onCancel={() => alert("Silme iptal edildi")}
              okText="Evet"
              calcelText="Hayır"
              placement="left"
            >
              <button type="button" style={{ marginLeft: 10 }}>
                <DeleteIcon color="#E14D2A" />
              </button>
            </Popconfirm>
          </>
        ),
      },
    ];
  }, [deleteMutation]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error {error.message}</div>;

  return (
    <div>
      <Text fontSize="2xl" p={5}>
        Products
      </Text>
      <Table dataSource={data} columns={columns} rowKey="_id" />
    </div>
  );
}

export default Products;
