import { GitHub, Instagram, LinkedIn, Mail, Twitter } from '@material-ui/icons'
import Header from '../components/Header'

const Contact = () => {
  return (
    <div
      id="contact"
      className="items-center  m-20 flex flex-col text-center mt-10"
    >
      {/* <Header /> */}
      <h1 className="text-center">Get in touch quickly ⚡️</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center  justify-center  max-w-3xl ml-10 mr-5  mt-5 ">
        <ContactItem
          IconTitle={Mail}
          href="mailto:khushaal.choithramani@gmail.com"
          title="Mail"
        />
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
        {/* <ContactItem
          IconTitle={Instagram}
          href="https://www.instagram.com/khushxxl_04/"
          title="Instagram"
        /> */}
      </div>
      <div className="h-[10vh]"></div>
    </div>
  )
}

export default Contact

export const ContactItem = ({ href, IconTitle, title }) => {
  return (
    <a href={href} className="">
      <div className="w-52 p-4 hover:bg-black flex justify-evenly  rounded-md">
        <IconTitle />
        <p>{title}</p>
      </div>
    </a>
  )
}
