import { Image, Table } from "antd";
import { useMemo } from "react";
import Pagination from "../../components/Pagination";
import TextSearch from "../../components/TextSearch";
import useUserGetFeedback from "../../hooks/useUserGetFeedback";
import { FEEDBACK_TYPE } from "../../utils/constants";

export default function UserFeedback() {
  const { userFeedback, isLoading } = useUserGetFeedback();

  console.log(userFeedback);

  const columns = useMemo(() => {
    return [
      {
        title: "Tên",
        dataIndex: "displayName",
        key: "displayName",
      },
      {
        title: "Đánh giá",
        dataIndex: "commentType",
        key: "commentType",
        align: "center",
        render: (commentType) => FEEDBACK_TYPE[commentType],
      },
      {
        title: "Nội dung",
        dataIndex: "comment",
        key: "comment",
      },
      {
        title: "URL",
        dataIndex: "url",
        key: "url",
        render: (url) => <Image src={url} />,
      },
    ];
  }, []);

  return (
    <>
      <TextSearch />
      <Table
        columns={columns}
        dataSource={userFeedback?.data}
        loading={isLoading}
        pagination={false}
        scroll={{ y: 600 }}
        bordered
      />
      <Pagination pagination={userFeedback?.pagination} />
    </>
  );
}
