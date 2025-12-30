import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

export async function adicionarMovimento(uid, tipo, valor, categoria) {
  await addDoc(collection(db, "movimentos"), {
    uid,
    tipo,
    valor,
    categoria,
    data: new Date()
  });
}

export async function listarMovimentos(uid) {
  const q = query(
    collection(db, "movimentos"),
    where("uid", "==", uid)
  );

  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => doc.data());
}
