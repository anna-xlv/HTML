
function salvar(){
    const senha = document.getElementById('senha').value;
    const log = document.getElementById('log').value;

    if (cpf && email) {
        localStorage.setItem('senha', cpf);
        localStorage.setItem('log', email);
        alert('Dados salvos localmente!');
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}  
  
  
  document.getElementById("login").addEventListener('submit', async function(e) {
         e.preventDefault();

            const login = document.getElementById('log').value;
            const senha = document.getElementById('senha').value;

            document.getElementById('erro').textContent = '';
            document.getElementById('resultado').textContent = '';

            try {
            const response = await fetch('http://localhost:8080/locar', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams ({
                    login,
                    senha
                })
            });

            if(!response.ok){
                throw new Error ('Erro na requisição');
            }

            const data = await response.json ();

            if (data.erro) {
                document.getElementById('erro').textContent = data.erro;
            } else {
                document.getElementById('resultado').textContent = data.resultado;
                window.location.assign("http://127.0.0.1:5500/cadastroClientes.html");;
            }
        } catch (err) {
            document.getElementById('erro').textContent = 'Erro' + err.message;
        }  
        
})

