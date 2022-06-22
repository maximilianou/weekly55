import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Simple Doers</title>
        <meta name="description" content="typescript nodejs ens ipfs simpledoers.eth nextjs tailwind" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
        <h1 className={styles.title}>Simple Doers</h1>       
        <h2 className={styles.title}>Software Engineers</h2>        


        <section className={styles.grid}>
      <article>
        <h3>Who simple doers are </h3> 
        <ul>
          <li>We are believers, We believe in continuous improvement, and we are persistent in this field, we love to apply this concept to every aspect of our lives.</li>
        </ul>
      </article>
      <article >
        <h3>What simple doers do </h3> 
        <ul>
          <li>We are Software Engineers for approximately 20 years, consistently working with the latest trends, focusing on simplifying complexity and working with teams to align on the Goal. We have worked for big companies and startups too, on big teams and small teams, so we can blend into any environment.</li>
        </ul>
      </article>
      <article >
        <h3>Why simple doers do this</h3> 
        <ul>
          <li >"We can Do It", We listen What have to be made to grow up, we know there are simple ways to do that. We love our jobs, our professions, the tools that make things possible, We do what we love.</li>
        </ul>
      </article>
    </section>      </main>

      <footer className={styles.footer}>
      <h3>Contact one of our Simple Doers Software Engineers</h3> 
      <ul>
        <li>Contact:<a href='mailto:maximilianou@gmail.com'>maximilianou@gmail.com</a></li>
        <li>GitHub:<a target='_blank' href='https://github.com/maximilianou/'>https://github.com/maximilianou</a></li>
        <li>CodersRank:<a target='_blank' href='https://profile.codersrank.io/user/maximilianou/'>https://profile.codersrank.io/user/maximilianou/</a></li>
        <Link href={'https://www.buymeacryptocoffee.xyz/0xdcbb510698bd5d975c907c9166e3ee3de0f8b21b?ref=button_widget'}>
          <button><Image width={300} height={50} src={'/buymecryptocoffe.svg'} ></Image></button>
        </Link>
        <Link href={'https://buymeacoffee.com/simpledoers/'}>
          <button className={`bg-[#fb7b04] rounded-xl p-2 font-sans`}><Image width={40} height={20} src={'/cup_of_coffee.svg'} ></Image>Buy me a coffee</button>
        </Link>
      </ul>

      </footer>
    </div>
  )
}

export default Home
