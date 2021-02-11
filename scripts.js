const Modal = {
    open() {
        //abir modal
        //adicionar classe active do modal
        document.querySelector(".modal-overlay").classList.add("active");
    },
    close() {
        //fechar modal
        //remover classe active do modal
        document.querySelector(".modal-overlay").classList.remove("active");
    },
};

const transactions = [{
        id: 1,
        description: "Luz",
        amount: -50000,
        date: "23/01/2021",
    },
    {
        id: 2,
        description: "WebSite",
        amount: 500000,
        date: "23/01/2021",
    },
    {
        id: 3,
        description: "Internet",
        amount: -30000,
        date: "23/01/2021",
    },
];

const Transaction = {
    income() {},
    expenses() {},
    total() {},
};
const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),
    addTransaction(transaction, index) {
        const tr = document.createElement("tr")
        tr.innerHTML = DOM.innerHTMLTransaction(transaction);
        DOM.transactionsContainer.appendChild(tr)
    },
    innerHTMLTransaction(transaction) {
        const CSSclass = transaction.amount > 0 ? "income" : "expense"
        const amount = Utils.formatCurrency(transaction.amount)

        const html = `        
        <td class="description">${transaction.description}</td>
        <td class="${CSSclass}">${amount}</td>
        <td class="date">${transaction.date}</td>
        <td><img src="./assets/minus.svg" alt="Remover transação"></td>
           
        `;
        return html;
    },
};
const Utils = {
    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : ""
            //estou transformando tudo em texto para ter acesso ao replace, logo em seguida uso regex
            //falando que tudo que não for numero graças a essa expressão \D e o g para global
            //vou substituir por nada
        value = String(value).replace(/\D/g, "")

        value = Number(value) / 100

        value = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })
        return signal + value
    }
}

transactions.forEach(function(transaction) {
    DOM.addTransaction(transaction)
})