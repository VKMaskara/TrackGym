// src\storage\localStorage.

// Função que salva no localStorage
export function save(key, value){

    //localStorage só aceita string
    const data = JSON.stringify(value)

    localStorage.setItem(key, data)
}

// Função para carregar dados do localStorage
export function load(key){
    const data = localStorage.getItem(key);

    //condição de retorno
    if (!key) return null

    // Converte em OBJ e retorna 
    return JSON.parse(data)
}