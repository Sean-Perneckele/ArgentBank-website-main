import '../../designs/css/main.css'
 import FeaturesItem from '../../compossant/Features item.jsx'
 import imgChat from '../../designs/img/icon-chat.png'
 import imgMoney from '../../designs/img/icon-money.png'
 import imgSecurity from '../../designs/img/icon-security.png'

function Index () {
    return (
        <main>
      <div className="hero">
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <section className="features">
        <h2 className="sr-only">Features</h2>

        <FeaturesItem 
        image={imgChat}
        titre="You are our #1 priority"
        contenu="  Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes."
          />

        <FeaturesItem 
        image={imgMoney}
        titre="More savings means higher rates"
        contenu="  The more you save with us, the higher your interest rate will be!"
          />
       
        <FeaturesItem 
        image={imgSecurity}
        titre="Security you can trust"
        contenu="  We use top of the line encryption to make sure your data and money
            is always safe."
          />
      </section>
    </main>
    )
}

export default Index