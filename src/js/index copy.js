const myHobby = document.getElementById('myHobby');
const hobbyInput = document.getElementById('hobbyInput');
const from = document.getElementById('from');
const to = document.getElementById('to');

let hobbyList = [];

function getHobby() {
    const hobby = hobbyInput.value;
    hobbyList.push(hobby);
    console.log(hobbyList);
    myHobby.innerHTML = hobbyList;
}

function switcher() {
    const _from = from.value;
    const _to = to.value;

    const _temp = hobbyList[_from - 1]
    hobbyList[_from - 1] = hobbyList[_to - 1];
    hobbyList[_to - 1] = _temp;

    myHobby.innerHTML = hobbyList;
}


