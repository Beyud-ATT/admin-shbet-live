import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePresentComment } from "../services/presentAPI";
import { toast } from "react-toastify";

export default function usePresentCommentUpdate() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updatePresentComment,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["presentComment"],
      });
      toast.success("Cập nhật thành công");
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });
}
