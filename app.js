const xelebi = document.getElementById('xelebi');
const tavi = document.getElementById('tavi');
const filtvebi = document.getElementById('filtvebi');
const gulmkerdi = document.getElementById('gulmkerdi');
const muceli = document.getElementById('muceli');
const travma = document.getElementById('travma');
const menji = document.getElementById('menji');
const kidurebi = document.getElementById('kidurebi');
const ragac = document.getElementById('ragac');

const xelebi_btn = document.getElementById('btn1');
const tavi_btn = document.getElementById('btn2');
const filtvebi_btn = document.getElementById('btn3');
const gulmkerdi_btn = document.getElementById('btn4');
const muceli_btn = document.getElementById('btn5');
const travma_btn = document.getElementById('btn6');
const menji_btn = document.getElementById('btn7');
const kidurebi_btn = document.getElementById('btn8');
const ragac_btn = document.getElementById('btn9');

const xelebi_div = document.getElementById('xelebi-div');
const tavi_div = document.getElementById('tavi-results');
const filtvebi_div = document.getElementById('filtvebi-results');
const gulmkerdi_div = document.getElementById('gulmkerdi-results');
const muceli_div = document.getElementById('muceli-results');
const travma_div = document.getElementById('travma-results');
const menji_div = document.getElementById('menji-results');
const kidurebi_div = document.getElementById('kidurebi-results');
const ragac_div = document.getElementById('ragac-results');

xelebi_btn.addEventListener('click', () => {
    const newdiv = document.createElement('p');
    if(xelebi.value == ''){
        xelebi.value = '';
    }
    else {
        newdiv.innerText = (xelebi.value * 0.058)/1000000;  
        xelebi_div.appendChild(newdiv);
        xelebi.value = '';
    }

    
});

tavi_btn.addEventListener('click', () => {
    const newdiv = document.createElement('p');
    if(tavi.value == ''){
        tavi.value = '';
    }
    else
    {newdiv.innerText = (tavi.value * 0.064)/1000000;  
    tavi_div.appendChild(newdiv);
    tavi.value = '';}
});

filtvebi_btn.addEventListener('click', () => {
    const newdiv = document.createElement('p');
    if(filtvebi.value == ''){
        filtvebi.value = '';
    }
    else
    {newdiv.innerText = (filtvebi.value * 0.22)/1000000;  
    filtvebi_div.appendChild(newdiv);
    filtvebi.value = '';}
});

gulmkerdi_btn.addEventListener('click', () => {
    const newdiv = document.createElement('p');
    if(gulmkerdi.value == ''){
        gulmkerdi.value = '';
    }
    else
    {newdiv.innerText = (gulmkerdi.value * 0.18)/1000000;  
    gulmkerdi_div.appendChild(newdiv);
    gulmkerdi.value = '';}
});

muceli_btn.addEventListener('click', () => {
    const newdiv = document.createElement('p');
    if(muceli.value == ''){
        muceli.value = '';
    }
    else
    {newdiv.innerText = (muceli.value *0.16)/1000000;  
    muceli_div.appendChild(newdiv);
    muceli.value = '';}
});

travma_btn.addEventListener('click', () => {
    const newdiv = document.createElement('p');
    if(travma.value == ''){
        travma.value = '';
    }
    else
    {newdiv.innerText = (travma.value * 0.034)/1000000;  
    travma_div.appendChild(newdiv);
    travma.value = '';}
});

menji_btn.addEventListener('click', () => {
    const newdiv = document.createElement('p');
    if(menji.value == ''){
        menji.value = '';
    }
    else
    {newdiv.innerText = (menji.value * 0.0032)/1000000;  
    menji_div.appendChild(newdiv);
    menji.value = '';}
});

kidurebi_btn.addEventListener('click', () => {
    const newdiv = document.createElement('p');
    if(kidurebi.value == ''){
        kidurebi.value = '';
    }
    else
   { newdiv.innerText = (kidurebi.value * 0.13)/1000000;  
    kidurebi_div.appendChild(newdiv);
    kidurebi.value = '';}
});

ragac_btn.addEventListener('click', () => {
    const newdiv = document.createElement('p');
    if(ragac.value == ''){
        ragac.value = '';
    }
    else
    {newdiv.innerText = (ragac.value * 3)/1000000;  
    ragac_div.appendChild(newdiv);
    ragac.value = '';}
});