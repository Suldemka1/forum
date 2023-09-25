const GET_OPTIONS: RequestInit = {
  method: "GET",
  mode: "cors",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
  },
};

export { GET_OPTIONS };
