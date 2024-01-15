import React from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Card1 from '../../components/Card1';



const steps = ['Выбрать автомобиль', 'Обратиться к нам', 'заключить договор'];


function Home() {

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };


  return (
    <>

      {/* section 1 */}
      <section className='sec1'>
        <main className='sec11 lg:py-[120px] text-white lg:px-[120px] sm:p-[24px]'>
          <div className='flex flex-col gap-[60px]'>
            <h1 className='lg:text-[64px] sm:text-[42px]'>Как кредит <p className='lg:text-[56px] text-[#D9D9D9]'>только проще</p></h1>
            <div className='flex gap-[25px] flex-col'>
              <Box sx={{ width: 300 }}>
                <div>
                  <h1 className='flex items-center justify-between'>Стоимость автомобиля <p>1 500 000 ₽</p></h1>
                  <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" color='error' />
                </div>
              </Box>
              <Box sx={{ width: 300 }}>
                <div>
                  <h1 className='flex items-center justify-between'>Стоимость автомобиля <p>1 500 000 ₽</p></h1>
                  <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" color='error' />
                </div>
              </Box>
              <Box sx={{ width: 300 }}>
                <div>
                  <h1 className='flex items-center justify-between'>Стоимость автомобиля <p>1 500 000 ₽</p></h1>
                  <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" color='error' />
                </div>
              </Box>
            </div>
            <p className='lg:w-[480px]'>Стоимость предмета лизинга и приведенные расчеты
              через калькулятор являются предварительными.
              Для точного определения процентной ставки по договору, пожалуйста, обратитесь к менеджеру.</p>
          </div>
        </main>
      </section>



      {/* section 2*/}
      <section>
        <div className='lg:px-[80px] lg:py-[120px] sm:p-[24px]'>
          <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                if (isStepOptional(index)) {
                  labelProps.optional = (
                    <Typography variant="caption">Optional</Typography>
                  );
                }
                if (isStepSkipped(index)) {
                  stepProps.completed = false;
                }
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  All steps completed - you&apos;re finished
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                  <Box sx={{ flex: '1 1 auto' }} />
                  <Button onClick={handleReset}>Reset</Button>
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Back
                  </Button>
                  <Box sx={{ flex: '1 1 auto' }} />
                  {isStepOptional(activeStep) && (
                    <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                      Skip
                    </Button>
                  )}

                  <Button onClick={handleNext}>
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </Box>
        </div>
      </section>

      {/* section 3*/}
      <section className='nav lg:p-[180px] text-white sm:p-[24px]'>
        <main className='flex items-center justify-between sm:flex-wrap sm:gap-[40px]'>
          <aside className='flex flex-col gap-[62px]'>
            <h1 className='text-[64px]'>О компании</h1>
            <div className='lg:w-[620px] flex gap-[35px] flex-col'>
              <p>Наша компания создана в 2012 году. </p>
              <p>Основным видом деятельности является предоставление услуг по аренде и лизингу автомобилей для компанийи физический лиц. </p>
              <p>Мы ценим комфорт и время наших клиентов,поэтому стремимся оформить автомобиль для вас в максимально короткие сроки. Индивидуальный подход позволяет выбрать условия необходимые именно вам.А</p>
            </div>

            <div className='flex lg:items-center sm:gap-[60px] lg:gap-[80px]'>
              <h1 className='flex flex-col text-[50px]'> 10<p className='text-[16px]'>Лет работы</p></h1>
              <h1 className='flex flex-col text-[50px]'> 500<p className='text-[16px]'>Автомобилей</p></h1>
              <h1 className='flex flex-col text-[50px]'> 500<p className='text-[16px]'>Довольных клиентов</p></h1>
            </div>
          </aside>
          <aside>
            <div className='flex items-center gap-[15px]'>
              <img src="src/assets/home/icons/Frame 6503.png" alt="" />
              <div className='flex flex-col gap-[15px] items-start'>
                <h1 className='text-[32px] uppercase'>просто</h1>
                <img src="src/assets/home/icons/Rectangle 2687 (1).png" alt="" />
                <p className='lg:w-[323px]'>Не требуется одобрение на автокредит
                  или потребительский кредит в банке</p>
              </div>
            </div>

            {/* d2 */}
            <div className='flex items-center gap-[15px]'>
              <img src="src/assets/home/icons/Frame 6504 (1).png" alt="" />
              <div className='flex flex-col gap-[15px] items-start'>
                <h1 className='text-[32px] uppercase'>выгодно</h1>
                <img src="src/assets/home/icons/Rectangle 2687 (1).png" alt="" />
                <p className='lg:w-[323px]'>Не требуется одобрение на автокредит
                  или потребительский кредит в банке</p>
              </div>
            </div>

            {/* d3 */}
            <div className='flex items-center gap-[15px]'>
              <img src="src/assets/home/icons/Frame 6504 (2).png" alt="" />
              <div className='flex flex-col gap-[15px] items-start'>
                <h1 className='text-[32px] uppercase'>Доступно</h1>
                <img src="src/assets/home/icons/Rectangle 2687 (1).png" alt="" />
                <p className='lg:w-[323px]'>Не требуется одобрение на автокредит
                  или потребительский кредит в банке</p>
              </div>
            </div>

            {/* d4 */}
            <div className='flex items-center gap-[15px]'>
              <img src="src/assets/home/icons/Frame 6504.png" alt="" />
              <div className='flex flex-col gap-[15px] items-start'>
                <h1 className='text-[32px] uppercase'>быстро  </h1>
                <img src="src/assets/home/icons/Rectangle 2687 (1).png" alt="" />
                <p className='lg:w-[323px]'>Не требуется одобрение на автокредит
                  или потребительский кредит в банке</p>
              </div>
            </div>
          </aside>
        </main>
      </section>


      {/* section 4 */}
      <section className='lg:py-[100px] lg:px-[60px] sm:p-[24px]'>

        <div className='flex items-end lg:justify-between sm:flex-wrap sm:justify-center'>
          <h1 className='uppercase font-[700] lg:text-[62px] sm:text-[30px] lg:text-start sm:text-center'>выгодные предложения</h1>
          <p className='uppercase text-[14px] lg:text-start sm:text-center'>Другие автомобили <img src="src/assets/home/Vector (23).png" alt="" /></p>
        </div>

        <div className='flex items-center sm:justify-center lg:py-[80px] sm:gap-[20px] sm:py-[24px] lg:justify-start lg:flex-nowrap sm:flex-wrap'>
          <Card1
            b1={"Лизинг до 7 лет"}
            b2={"Аванс 0%"}
            b3={"Гарантия 150 тыс. км"}
            img={"src/assets/home/1 6.png"}
            h1={"Toyota"}
            span={"Camry"}
            p={"Минимальный платёж"}
            sp={"6 950 ₽"}
            p1={"Цена от 618 950 ₽"}
            p2={"Посмотреть похожие модели >"}
            bend={"Забронировать"}
          />

          <Card1
            b1={"Лизинг до 7 лет"}
            b2={"Аванс 0%"}
            b3={"Гарантия 150 тыс. км"}
            img={"src/assets/home/1 6.png"}
            h1={"Toyota"}
            span={"Camry"}
            p={"Минимальный платёж"}
            sp={"6 950 ₽"}
            p1={"Цена от 618 950 ₽"}
            p2={"Посмотреть похожие модели >"}
            bend={"Забронировать"}
          />

          <Card1
            b1={"Лизинг до 7 лет"}
            b2={"Аванс 0%"}
            b3={"Гарантия 150 тыс. км"}
            img={"src/assets/home/1 6.png"}
            h1={"Toyota"}
            span={"Camry"}
            p={"Минимальный платёж"}
            sp={"6 950 ₽"}
            p1={"Цена от 618 950 ₽"}
            p2={"Посмотреть похожие модели >"}
            bend={"Забронировать"}
          />

          <Card1
            b1={"Лизинг до 7 лет"}
            b2={"Аванс 0%"}
            b3={"Гарантия 150 тыс. км"}
            img={"src/assets/home/1 6.png"}
            h1={"Toyota"}
            span={"Camry"}
            p={"Минимальный платёж"}
            sp={"6 950 ₽"}
            p1={"Цена от 618 950 ₽"}
            p2={"Посмотреть похожие модели >"}
            bend={"Забронировать"}
          />


        </div>

        <div className='flex items-center lg:gap-[120px] sm:flex-wrap lg:flex-nowrap sm:pt-[40px] sm:gap-[20px]'>
          <img src="src/assets/home/log/Frame 6514.png" alt="" />
          <img src="src/assets/home/log/hyundai-automobiles-1 1.png" alt="" />
          <img src="src/assets/home/log/image 55.png" alt="" />
          <img src="src/assets/home/log/image 56.png" alt="" />
          <img src="src/assets/home/log/image 57.png" alt="" />
          <img src="src/assets/home/log/kia-4 1.png" alt="" />
        </div>
      </section>
    </>
  )
}

export default Home
