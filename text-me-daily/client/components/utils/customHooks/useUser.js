import Axios from "axios"
import { useRef, useState } from "react";
import useSWR from "swr";
import useLocalStorage from "./useLocalStorage"

export default function useUser() {
  const [locstor, setLocstor] = useLocalStorage('tmd_user');
  const ref = useRef(null);

  const fetcher = url => Axios.get(url, { headers: { 'authorization': locstor.token } }).then(res => res.data);
  const { data, error } = useSWR(`${document.location.protocol}//${document.location.hostname}:${locstor.apiPort}/api/user`, fetcher);

  if (error) {
    ref.current = null
    return ref.current
  }

  if (!data) {
    ref.current = 'loading'
    return ref.current
  }

  const user = data;
  ref.current = data;

  return ref.current
}