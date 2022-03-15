var name = "A";
var sayac = 0;




document.getElementById(`ekle`).onclick = function keklik(){

    let uList = document.querySelector("ul#u-list");
    let newNote = document.createElement(`li`)

    // newNote silmek için id ekle
    sayac++;
    var id = name + sayac;
    newNote.setAttribute(`id`,`${id}`);

    //listenin üstüne eleman ekle
    uList.prepend(newNote);

    //div-container üretimi
    let con_div = document.createElement(`div`)
    con_div.classList.add("container")
    newNote.prepend(con_div)

    //div-row üretimi
    let row_div = document.createElement(`div`)
    row_div.classList.add("row")
    con_div.prepend(row_div)



         //div-col-1 üretimi
         let col1_div = document.createElement(`div`)
         col1_div.classList.add("li-btn","col-1","p-0")
         row_div.prepend(col1_div)
     
         //div-col-1'in içine button ve icon eklemek
         let col1_btn = document.createElement(`button`)
         col1_btn.classList.add("btn-n")
         col1_div.prepend(col1_btn)
         let col1_i = document.createElement(`i`)
         col1_i.classList.add("fa-solid","fa-x")
         col1_btn.prepend(col1_i)       

         //delete-btn
         col1_btn.onclick = function(){
             newNote.remove();
        }


    //div-col-11 üretimi
    let col11_div = document.createElement(`div`)
    col11_div.classList.add("li-text","col-11")
    row_div.prepend(col11_div)



    //inputun verisini çekip col-11'in için yazmak
    var inp_value = document.getElementById("veri").value;
    col11_div.innerHTML = inp_value

    document.getElementById("veri").value = "";
}

