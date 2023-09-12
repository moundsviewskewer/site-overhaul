import Page from '@/components/Page'
import Script from 'next/script'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'


export default function Home() {
  return (
    <Page
      description="The official website of The Skewer - access our article archives, staff bios, and more!"
      title="Home"
      h1="The Skewer"
      h2="The official website of The Skewer!"
    >
      <h1 style={{"paddingBottom": "5px"}}>NEW! APPLY TO JOIN OUR TEAM:</h1>
      <Link href="https://forms.gle/gceeiTsDnJQ4hctu5" style={{"fontSize": "24px"}}>https://forms.gle/gceeiTsDnJQ4hctu5</Link>
      
      <br />
      <br />

      <p>Welcome to our website! Here are some links to get you started:</p>

      <br />

      <p><Link href="issues">issues</Link></p>
      <p><Link href="staff">about our staff</Link></p>
    </Page>
  )
}
