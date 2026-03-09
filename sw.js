<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
  import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";
  import { getMessaging, getToken } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-messaging.js";

  const firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "SEU_PROJETO.firebaseapp.com",
    projectId: "SEU_PROJETO",
    messagingSenderId: "SEU_ID",
    appId: "SEU_APP_ID"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const messaging = getMessaging(app);

  window.salvarNoServidor = async () => {
    const nome = document.getElementById('servico').value;
    const data = document.getElementById('dataVenc').value;

    try {
      // 1. Pede permissão e pega o Token do celular
      const token = await getToken(messaging, { vapidKey: 'SUA_CHAVE_VAPID_AQUI' });
      
      // 2. Salva no Banco de Dados do Google
      await addDoc(collection(db, "assinaturas"), {
        nome: nome,
        dataVencimento: data,
        userToken: token,
        ativa: true
      });

      alert("Agendado com sucesso no servidor!");
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao agendar. Verifique as permissões.");
    }
  };
</script>
