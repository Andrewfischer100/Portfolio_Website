import { send } from '@emailjs/browser'
import './index.scss'

const Contact = () => {
    return (
        <>
        <div className='container contact-page'>
            <div className= 'text-zone'>
                <h1>
                    Reach Out
                </h1>
                <p>Lorem</p>
                <div className='contact-form'>
                    <form>
                        <ul>
                            <li className="half">
                                <input type='text' name='name' placeholder='Name' required/>
                            </li>
                            <li className='half'>
                                <input
                                type='email'
                                name='email'
                                placeholder='Email'
                                required
                                />
                            </li>
                            <li>
                                <textarea
                                placeholder='message'
                                name='message'
                                required>
                                </textarea>
                                <li>
                                    <input type='submit' className='flat-button' value={send}/>
                                </li>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact