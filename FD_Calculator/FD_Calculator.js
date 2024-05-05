function calculateMaturityAmount() {

    const principal = parseFloat(document.getElementById('principal').value);
    const interestRate = parseFloat(document.getElementById('interest').value);
    const tenure = parseFloat(document.getElementById('tenure').value);

    const maturityAmt = principal * (principal * interestRate * tenure) / 100;

    document.getElementById('result').innerText = `Maturity Amount : ${maturityAmt.toFixed(2)}`;
}

document.getElementById('calculate_btn').addEventListener('click', calculateMaturityAmount);