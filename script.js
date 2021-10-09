




const fun = () => {
    let ch = document.querySelector('#ch').value;
    let m = document.querySelector('#m').value;
    let g = document.querySelector('#g').value;

    let arrNumberDate = (ch + m + g).split('');
    let oneCount = 0;
    for(let i = 0; i < arrNumberDate.length; i++){
        oneCount += Number(arrNumberDate[i]);
    }

    let arrOneCount = String(oneCount).split('');
    let twoCount = 0;
    for(let i = 0; i < arrOneCount.length; i++){
        twoCount += Number(arrOneCount[i]);
    }

    let n = 0;
    if (ch.length > 1 &&  Number(ch[0]) != 0){
        n = Number(ch[0])
    } else if (ch.length > 1 && Number(ch[0]) == 0){ 
        n = Number(ch[1])
    } else {
        n = Number(ch)
    }
    let threeCount = oneCount - (n * 2);

    let nn = String(threeCount)
    let fourCount = Number(nn[0]) +  Number(nn[1]);
    console.log(fourCount)
    
    const matrixTable = {
        n1: 0,
        n2: 0,
        n3: 0,
        n4: 0,
        n5: 0,
        n6: 0,
        n7: 0,
        n8: 0,
        n9: 0,
    } 

    let strResult = String(ch) + String(m) + String(g) + String(oneCount) + String(twoCount) + String(threeCount) + String(fourCount);
    let arrResult = strResult.split('');
    for(let i = 0; i < arrResult.length; i++) {
        switch(arrResult[i]){
            case "1" :
                matrixTable.n1++;
                break
            case "2" :
                matrixTable.n2++;
                break
            case "3" :
                matrixTable.n3++;
                break
            case "4" :
                matrixTable.n4++;
                break
            case "5" :
                matrixTable.n5++;
                break  
            case "6" :
                matrixTable.n6++;
                break 
            case "7" :
                matrixTable.n7++;
                break  
            case "8" :
                matrixTable.n8++;
                break  
            case "9" :
                matrixTable.n9++;
                break  
        }
    }
    
    
    let textResult = '';
    document.querySelector('.tabl').classList.remove('hide');
    document.querySelector('.result').classList.remove('hide');
    for(let key in matrixTable){
        let datan = document.querySelector(`#${key}`).dataset.nn;
        let out = '';
        for(let i = 1; i <= matrixTable[key]; i++){
            out += datan;
        }
        if(out === ''){
            document.querySelector(`#${key} span`).textContent = '-';
        } else {
            document.querySelector(`#${key} span`).textContent = out;
        }
        console.log(datan)
        let newArr = [];
        switch(key){
            case "n1" :
                newArr = result.filter(el => el.num === 1);
                if(newArr.some(t => t.count === matrixTable[key])){
                    textResult += newArr.find(t => t.count === matrixTable[key]).text;
                }
                break
            case "n2" :
                newArr = result.filter(el => el.num === 2);
                if(newArr.some(t => t.count === matrixTable[key])){
                    textResult += newArr.find(t => t.count === matrixTable[key]).text;
                }
                break
            case "n3" :
                newArr = result.filter(el => el.num === 3);
                if(newArr.some(t => t.count === matrixTable[key])){
                    textResult += newArr.find(t => t.count === matrixTable[key]).text;
                }
                break
            case "n4" :
                newArr = result.filter(el => el.num === 4);
                if(newArr.some(t => t.count === matrixTable[key])){
                    textResult += newArr.find(t => t.count === matrixTable[key]).text;
                }
                break
            case "n5" :
                newArr = result.filter(el => el.num === 5);
                if(newArr.some(t => t.count === matrixTable[key])){
                    textResult += newArr.find(t => t.count === matrixTable[key]).text;
                }
                break
            case "n6" :
                newArr = result.filter(el => el.num === 6);
                if(newArr.some(t => t.count === matrixTable[key])){
                    textResult += newArr.find(t => t.count === matrixTable[key]).text;
                }
                break
            case "n7" :
                newArr = result.filter(el => el.num === 7);
                if(newArr.some(t => t.count === matrixTable[key])){
                    textResult += newArr.find(t => t.count === matrixTable[key]).text;
                }
                break
            case "n8" :
                newArr = result.filter(el => el.num === 8);
                if(newArr.some(t => t.count === matrixTable[key])){
                    textResult += newArr.find(t => t.count === matrixTable[key]).text;
                }
                break
            case "n9" :
                newArr = result.filter(el => el.num === 9);
                if(newArr.some(t => t.count === matrixTable[key])){
                    textResult += newArr.find(t => t.count === matrixTable[key]).text;
                }
                break
        }
    }
    document.querySelector('.res-text').textContent = textResult;
}

document.querySelector('#but').addEventListener('click', fun);