import PageTitle from '../components/PageTitle'
import discordLogo from '../assets/discord.png'
import mailLogo from '../assets/mail.png'
import bitcoinLogo from '../assets/bitcoin.png'
import dots31 from '../assets/dots31.png'

const Contacts = () => {
  return (
    <div>
      <PageTitle
        title="contacts"
        subtitle="Who am i?"
      />

      <div className="absolute -right-9 top-28 w-[80px] h-[80px] border border-grey"></div>
      <img
        className="w-[45px] absolute right-0 bottom-14"
        src={dots31}
        alt="dots31"
      />
      <div className="absolute -left-12 bottom-16 w-[80px] h-[80px] border border-grey"></div>

      <div className="mt-16 text-grey font-light">
        <p>
          I'm interested in freelance opportunities. However, if you have other request or question, don't hesitate to
          contact me
        </p>
        <div className="mt-16 space-y-8">
          <div className="border border-grey p-4 space-y-2">
            <h6 className="text-white font-normal">Support me here</h6>
            <div className="flex space-x-1">
              <img
                className="object-contain"
                src={bitcoinLogo}
                alt="bitcoin"
              />
              <p>18oPy6NeC7kqaPBVsrC6cwhmQHzb94UN3n</p>
            </div>
          </div>
          <div className="border border-grey p-4 space-y-2">
            <h6 className="text-white font-normal">Message me here</h6>
            <div className="flex space-x-2">
              <img
                className="object-contain"
                src={discordLogo}
                alt="discord"
              />
              <p>Serkan#2792</p>
            </div>
            <div className="flex space-x-2">
              <img
                className="object-contain"
                src={mailLogo}
                alt="mail"
              />
              <p>serkan.ursavas@icloud.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
