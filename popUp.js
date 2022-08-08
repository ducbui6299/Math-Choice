const btn_info=document.getElementById('btn_info')
const blurBG=document.getElementById('blurBG')
const infoPopUp=document.getElementById('infoPopUp')
const close_popup_btn=document.getElementById('close_popup_btn')

function showPopUp(){
    blurBG.style.display='block'
    infoPopUp.style.display='block'
    console("dang bat popup")
}
function closePopUp(){
    blurBG.style.display='none'
    infoPopUp.style.display='none'
}
btn_info.addEventListener('click',showPopUp)
close_popup_btn.addEventListener('click',closePopUp)