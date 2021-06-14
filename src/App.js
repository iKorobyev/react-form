import React from 'react';

function App() {
  return <div className="wrapper">
      <div className="container">
        <header className="header">
          <h1 className="header__title">Персональные данные.</h1>
        </header>
        <form className="content">
            <div className="content__items">
                <div className="item__input">
                    <h2 className="content__title">О себе:</h2>
                    <div onSubmit={''}>
                        <input type="text" placeholder='Фамилия*' name='name' required/>
                        <input type="text" placeholder='Имя*' name='name' required/>
                        <input type="text" placeholder='Отчество' name='name' />
                        <input type="text" placeholder='Дата рождения*' name='name' required/>
                        <input type="text" placeholder='Номер телефона*' name='name' required/>
                        <select name="" id="">
                            <option disabled selected>Пол:.</option>
                            <option value="male">Муж.</option>
                            <option value="female">Жен.</option>
                        </select>
                        {/* Сделать мультиселектор через checkbox////////////////////

                        <input type="checkbox" placeholder='Группа клиентов*' name='name' value='VIP'/>
                        <input type="checkbox" placeholder='Группа клиентов*' name='name' value='Проблемные'/>
                        <input type="checkbox" placeholder='Группа клиентов*' name='name' value='ОМС'/>*/}

                        <div className='input__select'>
                            <p>Лечащий врач:</p>
                            <select name="" id="">
                                <option value="male" selected>Иванов</option>
                                <option value="male" >Захаров</option>
                                <option value="female">Чернышева</option>
                            </select>
                        </div>
                        <div className='input__select'>
                            <p>Не отправлять смс</p> <input className='input__checkbox' type="checkbox" placeholder='Группа клиентов*' name='name' value='Проблемные'/>
                        </div>
                    </div>
                </div>
                <div className="item__input">
                    <h2 className="content__title">Адрес:</h2>
                    <div onSubmit={''}>
                        <input type="text" placeholder='Индекс' name='name' />
                        <input type="text" placeholder='Страна' name='name' />
                        <input type="text" placeholder='Область' name='name' />
                        <input type="text" placeholder='Город*' name='name' required/>
                        <input type="text" placeholder='Улица' name='name' />
                        <input type="text" placeholder='Дом' name='name' />
                    </div>
                </div>
                <div className="item__input">
                    <h2 className="content__title">Документ:</h2>
                    <div onSubmit={''}>
                        <div className='input__select'>
                            <select name="" id="">
                                <option value="male" selected>Паспорт</option>
                                <option value="male" >Свидетельство о рождении</option>
                                <option value="female">Вод. удостоверение</option>
                            </select>
                        </div>
                        <input type="text" placeholder='Серия' name='name' />
                        <input type="text" placeholder='Номер' name='name' />
                        <input type="text" placeholder='Кем выдан' name='name' />
                        <input type="text" placeholder='Дата выдачи*' name='name' required/>
                    </div>
                </div>
            </div>
            <div className='content__button'>
                <button>Отправить</button>
            </div>
        </form>
      </div>
    </div>
}

export default App;
