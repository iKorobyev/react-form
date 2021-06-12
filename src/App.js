import React from 'react';

function App() {
  return <div className="wrapper">
      <div className="container">
        <header className="header">
          <h1 className="header__title">Персональные данные.</h1>
        </header>
        <div className="content">
            <h2 className="content__title">О себе:</h2>
            <div className="content__items">
                <div className="item__input">
                    <form onSubmit={''}>
                        <input type="text" placeholder='Фамилия*' name='name' />
                        <input type="text" placeholder='Имя*' name='name' />
                        <input type="text" placeholder='Отчество' name='name' />
                        <input type="text" placeholder='Дата рождения*' name='name' />
                        <input type="text" placeholder='Номер телефона*' name='name' />
                    </form>
                </div>
                <div className="item__input">2</div>
                <div className="item__input">3</div>
            </div>
        </div>
      </div>
    </div>
}

export default App;
