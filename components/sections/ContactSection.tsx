'use client'

import { useState, FormEvent } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('https://formspree.io/f/mwvvekey', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Your message has been received, we will contact you soon.',
        })
        setFormData({ name: '', email: '', phone: '', message: '' })
        // Remove active class from inputs
        document.querySelectorAll('.input_wrapper').forEach(el => el.classList.remove('active'))
      } else {
        setSubmitStatus({
          type: 'error',
          message: 'There was an error sending your message. Please try again.',
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'There was an error sending your message. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Handle moving placeholder
    const wrapper = e.target.closest('.input_wrapper')
    if (value) {
      wrapper?.classList.add('active')
    } else {
      wrapper?.classList.remove('active')
    }
  }

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.closest('.input_wrapper')?.classList.add('active')
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!e.target.value) {
      e.target.closest('.input_wrapper')?.classList.remove('active')
    }
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="roww resumo_fn_contact">
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">Contact</h3>
            <h3 className="title">Get In Touch</h3>
            <p className="desc">
              If you have any suggestion, project or even you want to say &quot;hello&quot;, please fill out the form below and I will reply you shortly.
            </p>
          </div>

          <form className="contact_form" onSubmit={handleSubmit}>
            <div className="success" data-success="Your message has been received, we will contact you soon.">
              {submitStatus.type && (
                <span className={submitStatus.type === 'success' ? 'contact_success' : 'contact_error'}>
                  {submitStatus.message}
                </span>
              )}
            </div>
            <div className="empty_notice">
              <span>Please Fill Required Fields!</span>
            </div>

            <div className="items_wrap">
              <div className="items">
                <div className="item half">
                  <div className="input_wrapper">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                    <span className="moving_placeholder">Name *</span>
                  </div>
                </div>
                <div className="item half">
                  <div className="input_wrapper">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                    <span className="moving_placeholder">Email *</span>
                  </div>
                </div>
                <div className="item">
                  <div className="input_wrapper">
                    <input
                      id="phone"
                      name="phone"
                      type="text"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                    <span className="moving_placeholder">Phone</span>
                  </div>
                </div>
                <div className="item">
                  <div className="input_wrapper">
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    ></textarea>
                    <span className="moving_placeholder">Message</span>
                  </div>
                </div>
                <div className="item">
                  <button id="send_message" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

