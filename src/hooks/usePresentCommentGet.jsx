import { useQuery } from "@tanstack/react-query";
import { getPresentComment } from "../services/presentAPI";
import { toast } from "react-toastify";
import { useSearchParams } from "react-router";

export default function usePresentCommentGet() {
  const [searchParams] = useSearchParams();

  const page = searchParams.get("page") || 1;
  const pageSize = searchParams.get("pageSize") || 20;
  const textSearch = searchParams.get("textSearch");

  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["presentComment", page, pageSize, textSearch],
    queryFn: () => getPresentComment({ pageIndex: page, pageSize, textSearch }),
  });

  if (isError) {
    toast.error(error.response.data.message);
  }

  return { data, isLoading };
}
