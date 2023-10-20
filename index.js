function Linkedlist(){
    let Node = function(element){
        this.element = element
        this.next = null;
    }
    let length = 0;
    let head = null;
    //adicionar elementos na function
    this.append = function(element){
        let node = new Node(element), current;
        if (head === null){
            head = node;
        } else{
            current = head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        length++
    };
    //pegar o tamanho da function
    this.size = function(){
        return length;
    };
    //insere um elemento no inicio da lista
     this.prepend = function(element) {
        let node = new Node(element);
        node.next = head;
        head = node;
        length++;
    };
    //remover o primeiro elemento da function
    this.removeFirst = function() {
        if (head) {
            head = head.next;
            length--;
        }
    };
    //colocar os elementos da lista dentro de um vetor
    this.size2 = function(){
        let vet = [];
        for(let c=0; c<length;c++){
            vet = lista
        }
    }
    //function para mostrar os elementos do linkedlist
    this.toString = function (){
        let current = head, string = ''
        while(current){
            string += current.element + (current.next ? '->' : '')
            current = current.next
        }
        return string
    }
    //function para retornar a posição do elemento na lista, se não existir, retorna -1
    this.indexOf = function(element) {
        let current = head;
        let index = 0;

        while (current) {
            if (current.element === element) {
                return index;
            }
            current = current.next;
            index++;
        }

        return -1; // Elemento não foi encontrado
    };
    //function para remover elemento de uma posição específica da lista
    this.removeAt = function(position) {
        if (position < 0 || position >= length) {
            return;
        }

        if (position === 0) {
            this.removeFirst();
            return;
        }

        let current = head;
        let previous = null;
        let index = 0;

        while (index < position) {
            previous = current;
            current = current.next;
            index++;
        }

        previous.next = current.next;
        length--;
    };
}
lista = new Linkedlist();
lista.append(10);
lista.append(12);
lista.append(5);
console.log(lista.size());
console.log(lista.toString())

lista.removeFirst();

console.log("\nAqui está o tamanho da lista após a exclusão do primeiro elemento:");
console.log(lista.size()); //tamanho da lista após exclusão do primeiro elemento
console.log(lista.toString()); //mostrar a lista após a exclusão do primeiro elemento

lista.prepend(5);//Aqui adicionamos o número 5 no inicio da lista
console.log(lista.toString()); //mostrar a lista com o número 5 adicionado no inicio 
console.log("\nPosição do elemento 12 na lista: " + lista.indexOf(12)); //deve retornar 1
console.log("\nPosição do elemento 7 na lista: " + lista.indexOf(7)); //deve retornar -1 porque não existe
lista.removeAt(1); // Remover o elemento na posição 1, ou seja, o elemento 12
console.log("\nTamanho da lista após a remoção do elemento na posição 1: " + lista.size());
console.log("Lista após a remoção do elemento na posição 1: " + lista.toString());