function showdancingdoll(){
   const change=document.getElementById('happy');
   change.style.display='none';
    document.getElementById('ok').classList.remove('hidden');
}

function hoverNobtn(){
    const noBtn=document.getElementById('nobtn');
    noBtn.style.position='absolute';
    noBtn.style.left = `${Math.random()*80+10}%`;
    noBtn.style.top= `${Math.random()*80+10}%`
}