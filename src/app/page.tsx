"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [texto, setTexto] = useState({ id: 0, texto: "test" });
  useEffect(() => {
    fetch("http://localhost:3000/api/texto?id=1")
      .then((resposta) => resposta.json())
      .then((data) => setTexto(data));
  }, []);
  return <></>;
}
