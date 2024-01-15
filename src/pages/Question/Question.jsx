import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

function Question() {
  return (
    <>
      <section className='lg:p-[120px] sm:p-[24px]'>
        <div>
          <h1 className='uppercase font-[700] lg:text-[50px] sm:text-[24px]'>Вопросы</h1>
        </div>
        <div className='flex flex-col gap-[20px] '>

          {/* a1 */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Кто платит транспортный налог?
            </AccordionSummary>
            <AccordionDetails>
              Список ответов на часто задаваемые вопросы от наших клиентов постоянно пополняется. Напишите нам, чтобы мы могли дополнить список.
            </AccordionDetails>
          </Accordion>

          {/* a2 */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              Кто платит штрафы за нарушение ПДД?
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
          </Accordion>

          {/* a3 */}
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              Как отслеживать штрафы за нарушение ПДД?
            </AccordionSummary>

            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
          </Accordion>


          {/* a4 */}
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              Что делать если потерял СТС/ ПТС?
            </AccordionSummary>

            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
          </Accordion>

          {/* a5 */}
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              Как досрочно выкупить автомобиль?
            </AccordionSummary>

            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
          </Accordion>


          {/* a6 */}
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              Может ли третье лицо вносить за меня платежи?
            </AccordionSummary>

            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
          </Accordion>


          {/* a7 */}
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              Должен ли я оформлять/ продлевать КАСКО?
            </AccordionSummary>

            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
          </Accordion>


          {/* a8 */}
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              Окончание договора лизинга, мои шаги?
            </AccordionSummary>

            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
          </Accordion>

          {/* a9 */}
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              Заканчивается договор лизинга, как происходит выкуп?
            </AccordionSummary>

            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
          </Accordion>


          {/* a10 */}
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              У меня нет возможности дальше оплачивать платежи,
              что будет?
            </AccordionSummary>

            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
          </Accordion>
        </div>

        <div className='mt-[60px] border-l-[3px] border-[rgba(191,53,53,1)] '>
          <div className='flex flex-col gap-[20px] pl-[20px]'>
            <h1 className='text-[24px]'>Не нашли ответ на свой вопрос?</h1>
            <div className='flex flex-col gap-[5px]'>
              <p>Позвоните нам по телефону: 8 800 123 45 67</p>
              <p>Время работы: с 9.00 до 21.00 (выходной – пн.)</p>
              <p className='text-[rgba(191,53,53,1)]'>Звонок бесплатный</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Question

