import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form action="" method="post" id="contactForm" name="contactForm">
					<fieldset>

                  <div>
						   <a href = "mailto: texas01988@gmail.com">Let's get in touch! Click here to email me!</a> <span className="required">*</span>
                  </div>

                  


                
					</fieldset>
				   </form>
           </div>

            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   
				   </div>

               <div className="widget widget_tweets">

            
   
					   

		         </div>
            
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
