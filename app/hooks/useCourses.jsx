import useSWR from 'swr';
import axios from 'axios';

const fetcher = url => axios.get(url).then(res => res.data);

function useCourses (id) {
  const { data, error } = useSWR('https://cusc.vn/app/api/edu/courses', fetcher);

  return {
    user: data,
    isLoading: !error && !data,
    isError: error
  }
}
