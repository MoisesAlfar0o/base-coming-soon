import './Coming.css'

import Logo from '../../assets/images/logo.svg'
import heroMobile from '../../assets/images/hero-mobile.jpg'
import IconError from '../../assets/images/icon-error.svg'
import IconArrow from '../../assets/images/icon-arrow.svg'
import { useFormValidation } from '../../hooks/useFormValidation'

export function ComingPage () {
  const { 
    register, 
    handleSubmit, 
    errors, 
    reset, 
    success, 
    setSuccess 
  } = useFormValidation()
  
  const onSubmit = handleSubmit(() => {
    setSuccess('Email send!')
    reset()
  })

  return (
    <div className="info-container">
      <div className="logo-container">
        <img src={Logo} alt="Logo" />
      </div>
      <figure className="hero-mobile">
        <img src={heroMobile} alt="Hero image" />
      </figure>
      <article className="info-text">
        <h1><span>We're</span> <br/> coming <br/> soon</h1>
        <p>
          Hello fellow shoppers! We're currently building our new fashion store. 
          Add your email below to stay up-to-date with announcements and our launch deals.
        </p>
      </article>
      <section aria-label="Email Subscription Form">
        <form onSubmit={onSubmit} className={`email-input ${errors.email ? 'error-input' : 'form'}`}  noValidate>
          <input 
            type="email" 
            placeholder="Email Address" 
            aria-label="Email Address" 
            {...register('email', {
              required: {
                value: true,
                message: 'Email is required!'
              },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                message: 'Please provide a valid email!'
              }
            })}
          />
          {errors.email && <img src={IconError} alt="Error Icon" aria-hidden="true" />}
          <button type="submit" aria-label="Submit email">
            <img src={IconArrow} alt="Arrow icon" />
          </button>
        </form>
        {errors.email && <p className="error" role="alert">{errors.email.message}</p>}
        {success && <p className='success' role='success'>{success}</p>}
      </section>
    </div>
  )
}