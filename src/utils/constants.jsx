import { Flex } from "antd";
import { Feedback1, Feedback2, Feedback3, Feedback4, Feedback5 } from "./svg";

const LOCK_REASON = {
  SPAM: {
    value: 1,
    label: "Spam nội dung không hợp lệ.",
  },
  BAD_CONTENT: { value: 2, label: "Lan truyền nội dung sai lệch." },
  OTHER: { value: 3, label: "Khác" },
};

const USER_TYPE = {
  IDOL: { value: 2, label: "Idol" },
  USER: { value: 1, label: "Người dùng" },
};

const WORD_TYPE = {
  BAD_WORD: { value: 1, label: "Từ ngữ bậy bạ" },
  SITE_NAME: { value: 2, label: "Tên trang khác" },
};

const FEEDBACK_TYPE = {
  1: (
    <Flex align="center" gap={5}>
      <Feedback1 />
      <span>Phản hồi về idol</span>
    </Flex>
  ),
  2: (
    <Flex align="center" gap={5}>
      <Feedback2 />
      <span>Phản hồi về sản phẩm quà tặng</span>
    </Flex>
  ),
  3: (
    <Flex align="center" gap={5}>
      <Feedback3 />
      <span> Phản hồi về chất lượng live</span>
    </Flex>
  ),
  4: (
    <Flex align="center" gap={5}>
      <Feedback4 />
      <span>Tâm sự cùng NEW88</span>
    </Flex>
  ),
  5: (
    <Flex align="center" gap={5}>
      <Feedback5 />
      <span>Đề xuất, góp ý</span>
    </Flex>
  ),
};

export { LOCK_REASON, USER_TYPE, WORD_TYPE, FEEDBACK_TYPE };
