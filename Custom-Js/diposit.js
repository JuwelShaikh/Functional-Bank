    document.getElementById('btn-dipo').addEventListener('click',function(){
        const dipositInput = document.getElementById('dipo-input');
        const newDipositString = dipositInput.value;
        const newDiposti = parseFloat(newDipositString);
        
        dipositInput.value = '';

        const dipoField = document.getElementById('dipo-field');
        const prevDipositString = dipoField.innerText;
        const prevDiposit = parseFloat(prevDipositString);

        const currentDipo = prevDiposit + newDiposti;

        dipoField.innerText = currentDipo;

        // Balance
        const balField = document.getElementById('balance-Field');
        const newBalString = balField.innerText;
        const newBal = parseFloat(newBalString);

        const totalBal = newBal + newDiposti;
        balField.innerText = totalBal;
    })