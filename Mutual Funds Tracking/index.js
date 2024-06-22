    //TATA MUTUAL FUNDS

    document.getElementById('fetchButton').addEventListener('click', function(){
        
        fetch('https://api.mfapi.in/mf/147397/latest')
            .then(res => res.json())
            .then(data => {

                const dataDiv = document.getElementById('data');
                dataDiv.innerHTML = `<p>${data.data[0].nav}</p>`;
            })
            .catch(error => {
                console.error('Error fetching the data:', error);
            });
    });


    //ADITYA BIRLA MUTUAL FUNDS

    document.getElementById('fetchButton').addEventListener('click', function(){
    

        fetch('https://api.mfapi.in/mf/131902/latest')
            .then(response => response.json())
            .then(data1 => {

                const dataDiv1 = document.getElementById('data1')
                dataDiv1.innerHTML = `<p>${data1.data[0].nav}</p>`;
            })
            .catch(error => {
                const dataDiv1 = document.getElementById('data1');
                dataDiv1.innerHTML = `<p>Error Fetching data: ${error}</p>`
            });
    });


    //FORTIS MUTUAL FUNDS

    document.getElementById('fetchButton').addEventListener('click', function(){

        fetch('https://api.mfapi.in/mf/111283/latest')
            .then(response => response.json())
            .then(data2 => {
                
                const dataDiv2 = document.getElementById('data2')
                dataDiv2.innerHTML = `<p>${data2.data[0].nav}</p>`;
            })
            .catch(error => {
                const dataDiv2 = document.getElementById('data2');
                dataDiv2.innerHTML = `<p>Error Fetching data: ${error}</p>`
            });
    });


    //ICICI FIXED PLAN

    document.getElementById('fetchButton').addEventListener('click', function(){

        fetch('https://api.mfapi.in/mf/143954/latest')
            .then(response => response.json())
            .then(data3 => {

                const dataDiv3 = document.getElementById('data3');
                dataDiv3.innerHTML = `<p>${data3.data[0].nav}</p>`
            });
    });


    //STAR DIRECT FUNDS

        document.getElementById('fetchButton').addEventListener('click', function(){

            fetch('https://api.mfapi.in/mf/112105/latest')
                .then(response => response.json())
                .then(data4 => {

                    const dataDiv4 = document.getElementById('data4');
                    dataDiv4.innerHTML = `<p>${data4.data[0].nav}</p>`
                });
        });