import React from 'react'
import {motion} from 'framer-motion'
import '../App.css'

const Description = () => {
  return (
    <div className='Description'>
      <div>
      {/*<div>Description</div>
        <motion.img 
        width={'15%'}
        src='/img/icon.png'
        alt=''
        // анимация
        animate={{rotate:360}}
        transition={{
          delay:2,
          duration:5,
          repeat:Infinity,
          repeatDelay:0.5,
          repeatType:'reverse',
          type: 'inertial',
        }}
        />
        <motion.p
        initial={{
          x: -1000,
          opacity:0,
        }}
        animate={{
          x: 500,
          opacity:1,
        }}
        transition={{
          delay:1,
          duration:2,
          type:'tween'
          
        }}
        >
          Текст, который появляется
        </motion.p>*/}
      </div>
      <motion.div id='div1' 
      initial={{x: 1000, opacity:0}}
      animate={{x: 0, opacity:1}}
      transition={{delay: 1, duration: 2}}
      >
        Поездки всегда расширяют кругозор и обогащают приятными впечатлениями, что напрямую влияет на эмоциональное здоровье и ощущение удовлетворенности жизнью. Путешествия помогают обрести положительный жизненный настрой и рисовать в уме радостные перспективы!
      </motion.div>
      <motion.div id='div2'
      initial={{opacity:0, scale: 0.5}}
      animate={{opacity:1, scale: 1}}
      transition={{duration: 2}}
      >
      <motion.img 
        src='img/bally.jpg'
        className='bally'
        width={100}
        initial={{opacity:3}}
        whileHover={{scale: 1.2, transition:{duration: 1.5}}}
        animate={{rotate:360}}
        transition={{
          delay:2,
          duration:5,
          repeat:Infinity,
          repeatDelay:0.5,
          repeatType:'reverse',
          type: 'inertial',
        }}
      />
      <motion.img 
        src='img/banner-new.jpeg'
        className='banner'
        width={450}
        initial={{opacity:3}}
        transition={{duration: 3}}
        whileHover={{scale: 1.2, transition:{duration: 1.5}}}
      /></motion.div>
      
      <motion.div id='div3'
      initial={{opacity:0, scale: 0.5}}
      animate={{opacity:1, scale: 1}}
      transition={{duration: 2}}
      >
      <motion.img 
        src='img/four.jpg'
        className='four'
        width={450}
        height={250}
        initial={{opacity:3}}
        transition={{duration: 3}}
        whileHover={{scale: 1.2, transition:{duration: 1.5}}}/>
        
        <motion.img 
        src='img/bally.jpg'
        className='bally'
        width={100}
        initial={{opacity:3}}
        whileHover={{scale: 1.2, transition:{duration: 1.5}}}
        animate={{rotate:360}}
        transition={{
          delay:2,
          duration:5,
          repeat:Infinity,
          repeatDelay:0.5,
          repeatType:'reverse',
          type: 'inertial',
        }}
        />
      </motion.div>
      <motion.div id='div4'>
      <motion.button id='button' className='btn btn-primary'
      whileHover={{scale: 1.5}} >
        Начинаем ПУТЕШЕСТВИЕ
      </motion.button>
      </motion.div>
    </div>
  )
}

export default Description