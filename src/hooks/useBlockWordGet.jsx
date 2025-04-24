import { useSearchParams } from "react-router";
import { getBlockWords } from "../services/chatsAPI";
import { useQuery } from "@tanstack/react-query";

export default function useBlockWordGet() {
  const [searchParams] = useSearchParams();

  const page = searchParams.get("page") || 1;
  const pageSize = searchParams.get("pageSize") || 20;
  const textSearch = searchParams.get("textSearch");

  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["block-words", page, pageSize, textSearch],
    queryFn: () => getBlockWords({ pageIndex: page, pageSize, textSearch }),
  });

  if (isError) {
    console.error(error.response.data.message);
  }

  return { blockWords: data, isLoading };
}
