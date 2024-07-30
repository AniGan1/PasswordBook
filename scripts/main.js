const middle__accounts = document.getElementById('app-middle__accounts');
const middle__form_select = document.getElementById('app-middle-form-select');
const NullPosts = document.getElementById('NullPosts')

middle__form_select.addEventListener('change', function(event) {
    filterAccounts(event.target.value);
});

document.getElementById('app-top-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const acc_json = {
        'id': Math.random(),
        'platform': document.getElementById('app-top-form-select').value,
        'login': document.getElementById('app-top-form-log').value,
        'password': document.getElementById('app-top-form-pass').value
    };

    addAccount(acc_json);
});

filterAccounts(middle__form_select.value);

// --------* Функции *--------

function addAccount(account) {
    const html_document = document.createElement('div');
    html_document.className = 'account';
    html_document.setAttribute('data-platform', account.platform);
    html_document.innerHTML = `
        <p>Платформа: ${account.platform}</p>
        <p>Логин: ${account.login}</p>
        <p>Пароль: ${account.password}</p>
        <div class="account_btns">
            <button class='deletepost'>Удалить</button>
        </div>`;
    middle__accounts.appendChild(html_document);
    filterAccounts(middle__form_select.value);

    html_document.querySelector('.deletepost').addEventListener('click', function() {
        html_document.remove();
        console.log('Удален');
    });
}

function filterAccounts(platform) {
    const accounts = middle__accounts.querySelectorAll('.account');
    accounts.forEach(account => {
        if (account.getAttribute('data-platform') === platform ) {
            account.style.display = 'flex';
        } else {
            account.style.display = 'none';
        }
    });

    NullPosts.style.display = accounts.length > 0 ? 'none': 'block'
}