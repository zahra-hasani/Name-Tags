

const button = document.getElementById('button');
const containerTag = document.getElementById('containerTag');
const input = document.getElementById('input');
const deleteTag = document.getElementById('deleteTag')

button.addEventListener('click', function() {
    // بررسی اینکه ورودی خالی نباشد
    if (input.value === "") {
        alert("Please enter a Name");
        return; // اگر ورودی خالی بود، متوقف می‌شود
    }



    // ایجاد یک عنصر جدید برای هر بار کلیک
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
        <div id="divTag">
            <h3 id="titleTag">HELLO</h3>
            <p id="subtitleTag">my name is</p>
            <h2 id="name">${input.value}</h2>
            <span class="deleteTag">x</span>    
        </div>
    `;
    
    // اضافه کردن عنصر جدید به containerTag
    containerTag.appendChild(newDiv);

    input.value = "";

    const deleteTag = newDiv.querySelector('.deleteTag');
    deleteTag.addEventListener('click', function() {
        newDiv.remove(); // حذف کردن newDiv از DOM
    });

});
