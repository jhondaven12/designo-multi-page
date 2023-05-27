import { Link } from 'react-router-dom';
import '../styles/index.scss';
import errorIcon from '../assets/contact/desktop/icon-error.svg';
import illustration  from '../assets/shared/allsvg';
import { useState } from 'react';

function Contact(){
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const handleInputChange = (event) => {
        const {name, value } = event.target;
        setFormValues({...formValues, [name]: value});
        setFormErrors({...formErrors, [name]: validateInput(name, value) });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(formValues.name !== '' && formValues.email !== '' && formValues.phone !== ''){
            console.log('Form values', formValues);
            setFormValues({ name: '', email: '', phone: ''});
        }
    };

    const validateInput = (name, value) => {
        switch(name){
            case "name":
               return value === "" ? "Input can't be empty"  : "";
            case 'email':
               return value === "" ? "Enter valid email" : "";
            case 'phone':
                return !Number(value) ? 'Input is not a number' : '';
            default:
                return '';
        }
    }

    return (
        <div className='contactContainer'>
           <div className='forms'>

                <div className='formIntro'>
                    <h1>Contact us</h1>
                    <p>Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <label htmlFor='name'>
                        <input 
                        type='text'
                        name='name' 
                        id='name'
                        value={formValues.name}
                        onChange={handleInputChange}
                        placeholder='Name...'
                        />

                       {formErrors.name &&  
                       <div className='error'>
                            <p className='error-message'>{formErrors.name}</p>
                            <img src={errorIcon} alt='error icon'/>
                        </div>
                        }
                    </label>

                    <label htmlFor='email'>
                        <input 
                        type='email' 
                        name='email'
                        id='email'
                        value={formValues.email}
                        onChange={handleInputChange}
                        placeholder='Email Address..'
                        />
                        
                        {formErrors.email &&  
                        <div className='error'>
                            <p className='error-message'>{formErrors.email}</p>
                            <img src={errorIcon} alt='error icon'/>
                        </div>
                        }
                    </label>

                    <label htmlFor='phone'>
                        <input 
                        type='tel' 
                        name='phone'
                        id='phone'
                        value={formValues.phone}
                        pattern='[0-9]{4}[0-9]{3}[0-9]{4}'
                        onChange={handleInputChange}
                        placeholder='Phone Number...'
                        />
                        
                        {formErrors.phone &&  
                        <div className='error'>
                            <p className='error-message'>{formErrors.phone}</p>
                            <img src={errorIcon} alt='error icon'/>
                        </div>
                        }
                    </label>

                    <textarea></textarea>

                    <br/>

                    <input type='submit'value='SUBMIT'/>
                </form>
           </div>

           <div className='illus-container'>
                <div className='illus-content'>
                    <div className='illus-image'>
                    <img src={illustration.illustration_canada} alt='Canada'/>
                    </div>
                    
                    <div className='illus-info'>
                    <h3>CANADA</h3>
                    <Link to='/Locations'><button>SEE LOCATION</button></Link>
                    </div>
                </div>

                <div className='illus-content'>
                    <div className='illus-image'>
                    <img src={illustration.illustration_australia} alt='Australia'/>
                    </div>
                    
                    <div className='illus-info'>
                    <h3>AUSTRALIA</h3>
                    <Link to='/Locations'><button>SEE LOCATION</button></Link>
                    </div>
                </div>

                <div className='illus-content'>
                    <div className='illus-image'>
                    <img src={illustration.illustration_united_kingdom} alt='United Kingdom'/>
                    </div>
                    
                    <div className='illus-info'>
                    <h3>UNITED KINGDOM</h3>
                    <Link to='/Locations'><button>SEE LOCATION</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Contact;

