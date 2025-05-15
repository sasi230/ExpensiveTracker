let table = document.getElementById('table');

function deleteRow(row)
 {
  row.remove();
}

function addRow() {
  let date = document.getElementsByClassName('dateInput')[0].value;
  let amount = document.getElementsByClassName('amountInput')[0].value;
  let transactionType = document.getElementsByClassName('transactionType')[0].value;

  if (!date || !amount || !transactionType) {
    alert("Please fill in all fields.");
    return;
  }

  let row = document.createElement('tr');
  let amounts = document.createElement('td');
  amounts.innerText = amount;

  let transactioncell = document.createElement('td');
  transactioncell.innerText = transactionType;

  let datecell = document.createElement('td');
  datecell.innerText = date;

  let bincell = document.createElement('td');
  let deleteButton = document.createElement('button');
  let binimage = document.createElement('img');
  binimage.src = 'https://res.cloudinary.com/dipemfqb8/image/upload/v1746953312/fec8784c4c3c4df9bbd1c2e9ec9ed8a6_jdsnrt.jpg';
  binimage.style.height = '30px';

  deleteButton.appendChild(binimage);
  deleteButton.classList.add('del');
  deleteButton.onclick = () => deleteRow(row);
  bincell.appendChild(deleteButton);

  row.appendChild(amounts);
  row.appendChild(transactioncell);
  row.appendChild(datecell);
  row.appendChild(bincell);

  table.appendChild(row);

  let totalIncome = document.getElementById('totalIncome').innerText;
  let totalExpensive = document.getElementById('totalExpensive').innerText;
  let balance = document.getElementById('balance').innerText;

  if (transactionType == 'income') {
    if (totalIncome == '0') {
      document.getElementById('totalIncome').innerText = amount;
    } else {
      document.getElementById('totalIncome').innerText = parseInt(totalIncome) + parseInt(amount);
    }

    if (balance == '0') {
      document.getElementById('balance').innerText = amount;
    } else {
      document.getElementById('balance').innerText = parseInt(balance) + parseInt(amount);
    }
  } else if (transactionType == 'expense') {
    if (totalExpensive == '0') {
      document.getElementById('totalExpensive').innerText = amount;
    } else {
      document.getElementById('totalExpensive').innerText = parseInt(totalExpensive) + parseInt(amount);
    }

    if (balance == '0') {
      document.getElementById('balance').innerText = amount;
    } else {
      document.getElementById('balance').innerText = parseInt(balance) - parseInt(amount);
    }
  }

  
}