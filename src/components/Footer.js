import React from 'react'

const Footer = () => {
    return (
        <section className='footer'>
            <div className='contact-footer'>
                <div>
                        <a href='https://github.com/ryanktt' target="_blank"><i className="fab fa-github-square"></i></a>
                        
                    </div>
                    <div>
                        <a href='https://www.linkedin.com/in/ryan-kayro-6338ab209/' target="_blank"><i className="fab fa-linkedin"></i></a>
                    
                </div>
            </div>
            <p>© 2021 {window.location.origin}</p>
        </section>
    )
}

export default Footer
