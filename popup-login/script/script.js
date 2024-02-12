document.querySelector('.main-button').addEventListener('click', () => {

    document.querySelector('.container-login').style.animationName = "sum";

    document.querySelector('.container-login').classList.toggle('show');


    document.querySelector('.close-button').addEventListener('click', () => {
        
        setTimeout(() => {
            document.querySelector('.container-login').classList.remove('show');
        },100)
        document.querySelector('.container-login').style.animationName = "ble";
    })


})