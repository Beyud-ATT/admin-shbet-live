import { Flex, Image, Table } from "antd";
import { useMemo } from "react";
import UpdateModal from "./UpdateModal";
import DeleteModal from "./DeleteModal";
import useNewsGet from "../../../hooks/useNewsGet";
import Pagination from "../../../components/Pagination";
import TextSearch from "../../../components/TextSearch";

export default function NewsTable() {
  const { data: news, isLoading } = useNewsGet();

  const columns = useMemo(() => {
    return [
      {
        title: "Nội Dung",
        dataIndex: "content",
        key: "content",
      },
      {
        title: "Hình Ảnh",
        dataIndex: "image",
        key: "image",
        render: (image) => {
          return <Image src={image} alt="image" width={300} height={150} />;
        },
      },
      {
        title: "Thứ Tự",
        dataIndex: "order",
        key: "order",
      },
      {
        title: "Hành động",
        dataIndex: "action",
        align: "center",
        key: "aciton",
        render: (_, record) => {
          return (
            <Flex gap={5} justify="center">
              <UpdateModal record={record} />
              <DeleteModal record={record} />
            </Flex>
          );
        },
      },
    ];
  }, []);

  return (
    <>
      <TextSearch />
      <Table
        columns={columns}
        dataSource={news?.data}
        loading={isLoading}
        pagination={false}
        scroll={{ y: 700 }}
      />
      <Pagination pagination={news?.pagination} />
    </>
  );
}
