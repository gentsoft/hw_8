let htmlLeng = document.querySelector('html');
    htmlLeng.setAttribute ('lang','ru');

let head = document.querySelector('head');
    head.innerHTML = `
    <meta charset="UTF-8">
    <meta name="author" content="Алексей Мацкевич"> 
	<meta name="description" content="работа с js"> 
    <title>work №8</title>

<style>
.conteiner,
.content_itemA,
.content_itemB {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.conteiner {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}


.conteiner_h1 {
    font-size: 48px;
}

.conteiner_spanTop,
.content_itemA_spanTop,
.content_itemA_spanText {
    color: #9fa3a7;
}

.content {
    display: flex;
    margin-top: 20px;
}

.content_itemA,
.content_itemB {
    padding: 40px;
}

.content_itemB {
    background-color: #8f75be;
}

.content_itemA_spanTop,
.content_itemB_spanTop {
    letter-spacing: 3px;
    font-weight: bold;
}

.content_itemB_spanTop {
    color: #ffc80a;
}

.content_itemA_h2,
.content_itemB_h2 {
    letter-spacing: 1px;
}


.content_itemB_h2,
.content_itemB_spanText,
.content_itemB_but {
    color: #e8e9ed;
}

.content_itemA_but,
.content_itemB_but {
    margin-top: 40px;
    border: 4px solid #ffc80a;
    padding: 15px 25px;
    border-radius: 30px;
    background-color: transparent;
    font-weight: bold;
    letter-spacing: 2px;
}


.content_itemA_but:hover,
.content_itemB_but:hover {
    cursor: pointer;

}
</style>

`;

let body = document.querySelector('body');
    body.innerHTML = `
    <div class="conteiner">

    <h1 class="conteiner_h1">Choose Your Option</h1>
    <span class="conteiner_spanTop">But I must explain to you how all this mistaken idea of denouncing</span>
    <div class="content">

        <div class="content_itemA">

            <span class="content_itemA_spanTop">FREELANCER</span>
            <h2 class="content_itemA_h2">Initially</br>designed to</h2>
            <span class="content_itemA_spanText">But I must explain to you how all this</br>mistaken idea of denouncing</span>
            <button class="content_itemA_but">START HERE</button>

        </div>

        <div class="content_itemB">

            <span class="content_itemB_spanTop">STUDIO</span>
            <h2 class="content_itemB_h2">Initially</br>designed to</h2>
            <span class="content_itemB_spanText">But I must explain to you how all this</br>mistaken idea of denouncing</span>
            <button class="content_itemB_but">START HERE</button>

        </div>

    </div>

</div>
`