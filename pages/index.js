import React from 'react'
import Head from 'next/head'
import css from 'next/css'

const style = css({
  color: 'red',
  ':hover': {
    color: 'blue'
  },
  '@media (max-width: 500px)': {
    color: 'rebeccapurple'
  }
})

export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <h1 className={style}>Hi. I'm mobile-ready!</h1>
  </div>
)
