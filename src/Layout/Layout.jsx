import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

function Layout() {
    const { pathname } = useLocation()
    return (
        <>
            <header>
                <nav className='flex items-center justify-between gap-[15px] lg:py-[20px] lg:px-[80px] shadow-xl sm:flex-wrap sm:p-[24px]'>
                    <div className='flex items-center gap-[13px]'>
                        <img src="src/assets/header/Frame 2377 (1).png" alt="" />
                        <div className='uppercase '>
                            <h1 className='text-[14px]'>Восход</h1>
                            <p className='text-[10px]'>Доступные автомобили</p>
                        </div>
                    </div>
                    <div className='flex items-center lg:gap-[50px] sm:flex-wrap sm:gap-[20px]'>
                        <Link to="/">
                            <p style={{ borderBottom: pathname == "/" ? "3px solid black " : "black" }}>Главная</p>
                        </Link>
                        <Link to="/rasrochka">
                            <p style={{ borderBottom: pathname == "/rasrochka" ? "3px solid black " : "black" }}>Рассрочка</p>
                        </Link>
                        <Link to="/programmer">
                            <p style={{ borderBottom: pathname == "/programmer" ? "3px solid black " : "black" }}>Программы</p>
                        </Link>
                        <Link to="/arenda">
                            <p style={{ borderBottom: pathname == "/arenda" ? "3px solid black " : "black" }}>Аренда</p>
                        </Link>
                        <Link to="/question">
                            <p style={{ borderBottom: pathname == "/question" ? "3px solid black " : "black" }}>Вопросы</p>
                        </Link>
                    </div>
                    <div className='flex items-center gap-[20px]'>
                        <img src="src/assets/header/Frame 6099.png" alt="" />
                        <button className='border-[2px] rounded-[10px] border-[#BF3535] py-[10px] px-[25px] flex items-center gap-[10px]'>Заказать звонок <img src="src/assets/header/Arrow Right.png" alt="" /></button>
                    </div>

                </nav>
            </header>


            <div>
                <Outlet />
            </div>

            <footer>
                <div className='flex items-start sm:flex-wrap lg:flex-nowrap'>
                    <aside className='aside1 lg:pt-[160px] text-[#fff] lg:pl-[160px] lg:pr-[60px] sm:p-[24px]'>
                        <div className='flex items-start flex-col'>
                            <h1 className='text-[60px]'>Контакты</h1>
                            <img src="src/assets/footer/Rectangle 2687.png" alt="" />
                        </div>
                        <div className='lg:pt-[80px] flex items-start gap-[60px] flex-col sm:pt-[40px]'>
                            <main className='flex flex-col gap-[40px]'>
                                <div className='flex items-start gap-[10px]'>
                                    <img src="src/assets/footer/Fill.png" alt="" />
                                    <div>
                                        <h1>Адрес</h1>
                                        <p>Санкт - Петербург</p>
                                        <p>Торфяная дорога 7Ф</p>
                                        <p>БЦ «Гулливер» 2 оф. 104</p>
                                    </div>
                                </div>

                                {/* d2 */}
                                <div className='flex items-start gap-[10px]'>
                                    <img src="src/assets/footer/Clock 2.png" alt="" />
                                    <h1>Время работы<p>пн-вс: с 10.00 - 19.00</p></h1>
                                </div>


                                {/* d3 */}
                                <div className='flex items-start gap-[10px]'>
                                    <img src="src/assets/footer/Phone 2.png" alt="" />
                                    <h1>Телефон <p>+7 (812) 317-68-15</p></h1>
                                </div>

                            </main>
                            <div className='flex items-center gap-[10px]'>
                                <img src="src/assets/footer/Whatsapp (1).png" alt="" />
                                <img src="src/assets/footer/Telegram (2).png" alt="" />
                                <img src="src/assets/footer/Frame 6445.png" alt="" />
                            </div>

                            <div className='flex items-center gap-[56px] text-[#BABCBF] text-[13px] pb-[21px]'>
                                <p>ООО Восход ⓒ‎ 2023 год</p>
                                <h1 className='flex items-center gap-[20px]'>Оферта <p>Политика конфиденциальности</p></h1>
                            </div>
                        </div>
                    </aside>

                    {/* klcjndhf */}
                    <aside className="aside2 lg:pt-[470px] lg:p-[84px] lg:pr-[260px] lg:pl-[60px] sm:px-[24px] sm:py-[24px]">
                        <form action="" className='bg-[#fff] lg:px-[40px] lg:py-[29px] flex flex-col sm:gap-[25px] lg:gap-[40px] sm:p-[25px]'>
                            <div className='flex flex-col gap-[25px] sm:flex-wrap lg:flex-nowrap'>
                                <div className='flex items-center gap-[20px] sm:flex-wrap sm:gap-[40px] lg:flex-nowrap'>
                                    <input type="text" className="border-b-[1px] px-[5px]" placeholder='Имя' />
                                    <input type="text" placeholder='Фамилия' className="border-b-[1px] px-[5px]" />
                                </div>

                                <div className='flex items-center gap-[20px] flex-wrap sm:gap-[40px]'>
                                    <input type="text" className="border-b-[1px] px-[5px]" placeholder='+ 7 000 000 00 00' />
                                    <input type="text" placeholder='E-mail' className="border-b-[1px] px-[5px]" />
                                </div>
                                <textarea className='border-b-[1px] p-[15px]' placeholder='Комментарий'></textarea>
                            </div>
                            <div>
                                <button className='border-[2px] rounded-[5px] border-[#BF3535] py-[10px] px-[25px]'>Отправить</button>
                            </div>
                        </form>
                    </aside>
                </div>
            </footer>
        </>
    )
}

export default Layout
