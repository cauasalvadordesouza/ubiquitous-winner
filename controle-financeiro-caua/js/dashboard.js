import { auth } from "./firebase.js";
import { sair } from "./auth.js";
import { adicionarMovimento, listarMovimentos } from "./app.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const lista = document.getElementById("lista");

onAuthStateChanged(auth, async (user) => {
  if (!user) {
    window.location.href = "login.html";
    return;
  }

  carregar(user.uid);

  document.getElementById("salvar").onclick = async () => {
    const tipo = document.getElementById("tipo").value;
    const valor = Number(document.getElementById("valor").value);
    const categoria = document.getElementById("categoria").value;

    await adicionarMovimento(user.uid, tipo, valor, categoria);
    carregar(user.uid);
  };

  document.getElementById("logout").onclick = sair;
});

async function carregar(uid) {
  lista.innerHTML = "";
  const dados = await listarMovimentos(uid);

  dados.forEach(d => {
    const li = document.createElement("li");
    li.textContent = `${d.tipo} - R$ ${d.valor} (${d.categoria})`;
    lista.appendChild(li);
  });
}
