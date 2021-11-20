const calcular = document.getElementById('calcular');


function imc () {
    const nome = document.getElementById('nome').value;
    const valor = document.getElementById('valor').value;
    const juros = document.getElementById('juros').value;
    const parcelas = document.getElementById('parcelas').value;
    const resultado = document.getElementById('resultado');

    if (valor !== '' && juros !== '' && parcelas !== '') {
 
        const futuro = ( valor * ( ( ( 1 + (juros/100) ) ** parcelas - 1 ) / (juros/100) )).toFixed(2);
        
    
        resultado.textContent = `Olá, ${nome}! Se você aplicar R$ ${valor} à taxa de juros de ${juros}%, durante ${parcelas} meses, acumulará uma poupança de R$ ${futuro}`;

    }else {
        resultado.textContent = 'Por favor, preencha todos os campos corretamente antes de continuar.';
    }

}
calcular.addEventListener('click', imc);
