//Покровская 3исип-621
function generateTable() { 
        const width = document.getElementById('widthInput').value; 
        const height = document.getElementById('heightInput').value; 
     
        if (width && height) { 
          const table = document.createElement('table'); 
     
          for (let i = 0; i < height; i++) { 
            const row = table.insertRow(); 
            for (let j = 0; j < width; j++) { 
              const cell = row.insertCell(); 
              cell.textContent = (i * width) + j + 1; 
            } 
          } 
     
          document.getElementById('tableContainer').innerHTML = ''; 
          document.getElementById('tableContainer').appendChild(table); 
        } else { 
          alert('Значения не допустимы'); 
        } 
      }
