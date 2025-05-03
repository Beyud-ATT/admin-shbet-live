import { useQuery } from "@tanstack/react-query";
import { getUserFeedback } from "../services/usersAPI";
import { useSearchParams } from "react-router";

export default function useUserGetFeedback() {
  const [searchParams] = useSearchParams();

  const page = searchParams.get("page") || 1;
  const pageSize = searchParams.get("pageSize") || 20;
  const textSearch = searchParams.get("textSearch");

  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["userFeedback", page, pageSize, textSearch],
    queryFn: () => getUserFeedback({ pageIndex: page, pageSize, textSearch }),
  });

  if (isError) {
    console.error(error?.response?.data?.message);
  }

  return { userFeedback: data, isLoading };
}
