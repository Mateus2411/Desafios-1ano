    let ativas = document.getElementById("ativas");
    let tarefa = document.getElementById("tarefa");
    let finalizadas = document.getElementById("finalizadas");
    let butao = document.getElementById("butao");
    let tarefasAtivas = [];
    let tarefasFinalizadas = [];
    let i = 0;
    tarefa.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            butao.click();
        }
    });
    butao.onclick = function () {
        let novaTarefa = tarefa.value;
        if (novaTarefa === "") {
            alert("Insira um nome para a tarefa.");
            return;
        } else if (tarefasAtivas.some((t) => t.descricao === novaTarefa)) {
            alert("Essa tarefa já está na lista.");
            return tarefa.value = "";
        }
        tarefa.value = "";
        tarefasAtivas.push({
            id: tarefasAtivas.length + 1,
            descricao: novaTarefa,
            saida: function () {
                return `${this.id} - ${this.descricao}`;
            },
        });

        atualizarLista();
    };

    function atualizarLista() {
        ativas.innerHTML = "";
        atualizarIds();
        tarefasAtivas.forEach((tarefa) => {
            let item = document.createElement("ul");
            item.innerHTML = `
            <li>${tarefa.saida()}</li>
            <a href="#" id="finalizar-${tarefa.id}">Finalizar</a>
        `;
            ativas.appendChild(item);

            document.getElementById(`finalizar-${tarefa.id}`).onclick =
                function () {
                    tarefasAtivas = tarefasAtivas.filter(
                        (t) => t.id !== tarefa.id
                    );
                    atualizarLista();
                };
        });
    }

    function atualizarIds() {
        tarefasAtivas.forEach((tarefa, index) => {
            tarefa.id = index + 1;
        });
    }