// Form handling JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Contact form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', handleContactSubmit);
  }
  
  // Job application form
  const applyForm = document.getElementById('apply-form');
  if (applyForm) {
    applyForm.addEventListener('submit', handleApplySubmit);
  }
  
  // Newsletter form
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', handleNewsletterSubmit);
  }
  
  // Form validation
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      input.addEventListener('blur', validateField);
      input.addEventListener('input', clearFieldError);
    });
  });
});

function handleContactSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  
  // Validate form
  if (!validateForm(form)) {
    return;
  }
  
  // Show loading state
  const submitButton = form.querySelector('button[type="submit"]');
  const originalText = submitButton.textContent;
  submitButton.disabled = true;
  submitButton.textContent = 'Sending...';
  
  // Submit to API
  fetch('/api/contact', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      showFormSuccess(form, 'Thank you! Your message has been sent. We will get back to you soon.');
      form.reset();
    } else {
      showFormError(form, data.message || 'Something went wrong. Please try again.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    showFormError(form, 'Unable to send message. Please try again later.');
  })
  .finally(() => {
    submitButton.disabled = false;
    submitButton.textContent = originalText;
  });
}

function handleApplySubmit(e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  
  // Validate form
  if (!validateForm(form)) {
    return;
  }
  
  // Validate file upload
  const resumeInput = form.querySelector('input[type="file"]');
  if (resumeInput && resumeInput.files.length === 0) {
    showFieldError(resumeInput, 'Please upload your resume');
    return;
  }
  
  // Show loading state
  const submitButton = form.querySelector('button[type="submit"]');
  const originalText = submitButton.textContent;
  submitButton.disabled = true;
  submitButton.textContent = 'Submitting...';
  
  // Submit to API
  fetch('/api/apply', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      showFormSuccess(form, 'Thank you! Your application has been submitted. We will review it and get back to you soon.');
      form.reset();
    } else {
      showFormError(form, data.message || 'Something went wrong. Please try again.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    showFormError(form, 'Unable to submit application. Please try again later.');
  })
  .finally(() => {
    submitButton.disabled = false;
    submitButton.textContent = originalText;
  });
}

function handleNewsletterSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const emailInput = form.querySelector('input[type="email"]');
  
  if (!emailInput.value || !isValidEmail(emailInput.value)) {
    showFieldError(emailInput, 'Please enter a valid email address');
    return;
  }
  
  const formData = new FormData(form);
  const submitButton = form.querySelector('button[type="submit"]');
  const originalText = submitButton.textContent;
  submitButton.disabled = true;
  submitButton.textContent = 'Subscribing...';
  
  fetch('/api/newsletter', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      showFormSuccess(form, 'Thank you for subscribing!');
      form.reset();
    } else {
      showFormError(form, data.message || 'Unable to subscribe. Please try again.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    showFormError(form, 'Unable to subscribe. Please try again later.');
  })
  .finally(() => {
    submitButton.disabled = false;
    submitButton.textContent = originalText;
  });
}

function validateForm(form) {
  let isValid = true;
  const requiredFields = form.querySelectorAll('[required]');
  
  requiredFields.forEach(field => {
    if (!validateField({ target: field })) {
      isValid = false;
    }
  });
  
  return isValid;
}

function validateField(e) {
  const field = e.target;
  const value = field.value.trim();
  let isValid = true;
  let errorMessage = '';
  
  // Check required fields
  if (field.hasAttribute('required') && !value) {
    isValid = false;
    errorMessage = 'This field is required';
  }
  
  // Validate email
  if (field.type === 'email' && value && !isValidEmail(value)) {
    isValid = false;
    errorMessage = 'Please enter a valid email address';
  }
  
  // Validate phone
  if (field.type === 'tel' && value && !isValidPhone(value)) {
    isValid = false;
    errorMessage = 'Please enter a valid phone number';
  }
  
  // Validate file
  if (field.type === 'file' && field.hasAttribute('required') && field.files.length === 0) {
    isValid = false;
    errorMessage = 'Please upload a file';
  }
  
  if (isValid) {
    clearFieldError({ target: field });
  } else {
    showFieldError(field, errorMessage);
  }
  
  return isValid;
}

function showFieldError(field, message) {
  clearFieldError({ target: field });
  field.classList.add('error');
  const errorElement = document.createElement('span');
  errorElement.className = 'form__error';
  errorElement.textContent = message;
  field.parentElement.appendChild(errorElement);
  field.setAttribute('aria-invalid', 'true');
}

function clearFieldError(e) {
  const field = e.target;
  field.classList.remove('error');
  const errorElement = field.parentElement.querySelector('.form__error');
  if (errorElement) {
    errorElement.remove();
  }
  field.removeAttribute('aria-invalid');
}

function showFormSuccess(form, message) {
  const existingMessage = form.querySelector('.form__success');
  if (existingMessage) {
    existingMessage.remove();
  }
  
  const successElement = document.createElement('div');
  successElement.className = 'form__success';
  successElement.textContent = message;
  form.insertBefore(successElement, form.firstChild);
  
  // Scroll to success message
  successElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  // Remove after 5 seconds
  setTimeout(() => {
    successElement.remove();
  }, 5000);
}

function showFormError(form, message) {
  const existingMessage = form.querySelector('.form__error--global');
  if (existingMessage) {
    existingMessage.remove();
  }
  
  const errorElement = document.createElement('div');
  errorElement.className = 'form__error form__error--global';
  errorElement.textContent = message;
  form.insertBefore(errorElement, form.firstChild);
  
  // Scroll to error message
  errorElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhone(phone) {
  const phoneRegex = /^[\d\s\-\+\(\)]+$/;
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

