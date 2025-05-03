import { Rate, Switch, Table } from "antd";
import { useMemo } from "react";
import usePresentCommentGet from "../../../hooks/usePresentCommentGet";
import Pagination from "../../../components/Pagination";
import usePresentCommentUpdate from "../../../hooks/usePresentCommentUpdate";

export default function PresentCommentTable() {
  const { data: presentComment, isLoading } = usePresentCommentGet();
  const { mutate: updatePresentComment } = usePresentCommentUpdate();

  const columns = useMemo(() => {
    return [
      {
        title: "Tên",
        dataIndex: "displayName",
        key: "displayName",
      },
      {
        title: "Đánh giá",
        dataIndex: "rate",
        key: "rate",
        align: "center",
        render: (rate) => {
          return <Rate value={rate} disabled />;
        },
      },
      {
        title: "Nội dung",
        dataIndex: "comment",
        key: "comment",
      },
      {
        title: "Hiển thị",
        dataIndex: "isShow",
        key: "isShow",
        align: "center",
        render: (isShow, record) => {
          return (
            <Switch
              checked={isShow}
              onChange={() => {
                updatePresentComment({ id: record.id });
              }}
            />
          );
        },
      },
    ];
  }, [updatePresentComment]);

  return (
    <>
      <Table
        columns={columns}
        dataSource={presentComment?.data}
        loading={isLoading}
        pagination={false}
        scroll={{ y: 600 }}
      />
      <Pagination pagination={presentComment?.pagination} />
    </>
  );
}
