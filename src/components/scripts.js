/*DROPDOWN*/
let dropDownButton1 = document.getElementById('dropDownButton1');
let dropDownButton2 = document.getElementById('dropDownButton2');
let dropDownButton3 = document.getElementById('dropDownButton3');
let dropDownButton4 = document.getElementById('dropDownButton4');
let dropDownButton5 = document.getElementById('dropDownButton5');
let dropDownButton6 = document.getElementById('dropDownButton5');

let dropDown1 = document.getElementById('dropDown1');
let dropDown2 = document.getElementById('dropDown2');
let dropDown3 = document.getElementById('dropDown3');
let dropDown4 = document.getElementById('dropDown4');
let dropDown5 = document.getElementById('dropDown5');
let dropDown6 = document.getElementById('dropDown6');

if (dropDownButton1) {
    dropDownButton1.addEventListener('click', () => {
        dropDown1.classList.toggle('active')
    })
    document.addEventListener('mouseup', function(e) {
        if (!dropDownButton1.contains(e.target)) {
            dropDown1.classList.remove('active')
        }
    });
}

if (dropDownButton2) {
    dropDownButton2.addEventListener('click', () => {
        dropDown2.classList.toggle('active')
    })
    document.addEventListener('mouseup', function(e) {
        if (!dropDownButton2.contains(e.target)) {
            dropDown2.classList.remove('active')
        }
    });
}

if (dropDownButton3) {
    dropDownButton3.addEventListener('click', () => {
        dropDown3.classList.toggle('active')
    })
    document.addEventListener('mouseup', function(e) {
        if (!dropDownButton3.contains(e.target)) {
            dropDown3.classList.remove('active')
        }
    });
}


if (dropDownButton4) {
    dropDownButton4.addEventListener('click', () => {
        dropDown4.classList.toggle('active')
    })
    document.addEventListener('mouseup', function(e) {
        if (!dropDownButton4.contains(e.target)) {
            dropDown4.classList.remove('active')
        }
    });
}

if (dropDownButton5) {
    dropDownButton5.addEventListener('click', () => {
        dropDown5.classList.toggle('active')
    })
    document.addEventListener('mouseup', function(e) {
        if (!dropDownButton5.contains(e.target)) {
            dropDown5.classList.remove('active')
        }
    });
}

if (dropDownButton6) {
    dropDownButton6.addEventListener('click', () => {
        dropDown6.classList.toggle('active')
    })
    document.addEventListener('mouseup', function(e) {
        if (!dropDownButton6.contains(e.target)) {
            dropDown6.classList.remove('active')
        }
    });
}
/*Modal*/
if (btnSave) {
    btnSave.addEventListener('click', () => {
        deafult.classList.remove('none');
        save.classList.add('none')
    })
}

if (btnCancel) {
    btnCancel.addEventListener('click', () => {
        var x;
        var r = confirm("Ao cancelar a ação sem salvar toda edição será perdida.")
        if (r == true) {
            deafult.classList.remove('none');
            save.classList.add('none')
        } else {

        }
    })
}

if (btnExcluir) {
    btnExcluir.addEventListener('click', () => {
        console.log('CLick excluir')
        var x;
        var r = confirm("Ao excluir esse Lead ele será perdido e não será possível recuperar, tem certeza?")
        if (r == true) {
            console.log('Lead Excluido')
        } else {

        }
    })

}
/*Habilita o modo Edição*/
document.querySelectorAll('.item-edicao').forEach(item => {
    item.addEventListener('click', event => {
        deafult.classList.add('none');
        save.classList.remove('none')
    })
})