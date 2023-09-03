import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";
import { api } from "../../api";

export default function AdminRoute() {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const authCheck = async () => {
      try {
        setLoading(true);
        const res = await api.get("/api/v1/auth/admin-auth", {
          headers: { authorization: localStorage.getItem("auth")?.token },
        });
        if (res.data.ok) {
          setOk(true);
        } else {
          setOk(false);
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);
  if (loading) return <p>loading...</p>;
  return ok ? <Outlet /> : <Spinner path="" />;
}
