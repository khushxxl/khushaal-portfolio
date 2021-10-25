import { GitHub, Instagram, LinkedIn, Mail, Twitter } from '@material-ui/icons'
import Header from '../components/Header'

const Contact = () => {
  return (
    <div className="items-center flex flex-col">
      <Header />
      <div className="flex space-y-10 items-center flex-col justify-between mt-32 max-w-3xl ml-10 mr-5">
        <ContactItem
          IconTitle={Twitter}
          href="https://twitter.com/khushaal_04"
          title="Twitter"
        />
        <ContactItem
          IconTitle={GitHub}
          href="https://github.com/khushxxl/"
          title="Github"
        />
        <ContactItem
          IconTitle={LinkedIn}
          href="https://www.linkedin.com/in/khushaal-choithramani-250285208/"
          title="LinkedIn"
        />
        <ContactItem
          IconTitle={Instagram}
          href="https://www.instagram.com/khushxxl_04/"
          title="Instagram"
        />
        <ContactItem
          IconTitle={Mail}
          href="mailto:khushaal.choithramani@gmail.com"
          title="Mail"
        />
      </div>
    </div>
  )
}

export default Contact

export const ContactItem = ({ href, IconTitle, title }) => {
  return (
    <a href={href}>
      <div className="w-52 p-4 hover:bg-black flex justify-evenly border-2 border-yellow-200 rounded-md">
        <IconTitle />
        <p>{title}</p>
      </div>
    </a>
  )
}
