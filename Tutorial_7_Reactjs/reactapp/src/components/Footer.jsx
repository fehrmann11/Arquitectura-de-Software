import React,{ Component } from 'react'
import { Icon } from 'semantic-ui-react'

export default class Footer extends Component{
  render() {
    return (
            <footer className="dsc-footer">
              <div className="dsc-footer__icons">
                <a className="dsc-footer__a" target="_blank" href='https://www.instagram.com/cybervaldiviaemprende/'><Icon name='instagram' size='big' /></a>
                <a className="dsc-footer__a" target="_blank" href='https://www.facebook.com/CyberValdivia-Emprende-108712411094802'><Icon name='facebook square' size='big' /></a>
              </div>
              <span className="dsc-footer__title">#CyberValdivia</span>
            </footer>
      )
  }
}