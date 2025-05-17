document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('appointmentForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
        document.getElementById('formResult').textContent = '';
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const comment = document.getElementById('comment').value.trim();
        
        let isValid = true;
        
        if (!name) {
            document.getElementById('nameError').textContent = 'Пожалуйста, введите ваше имя';
            isValid = false;
        }
        
        if (!email) {
            document.getElementById('emailError').textContent = 'Пожалуйста, введите email';
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            document.getElementById('emailError').textContent = 'Пожалуйста, введите корректный email';
            isValid = false;
        }
        
        if (!comment) {
            document.getElementById('commentError').textContent = 'Пожалуйста, введите комментарий';
            isValid = false;
        }
        
        if (isValid) {
            const resultDiv = document.getElementById('formResult');
            resultDiv.innerHTML = `
                <h4>Благодарим вас, ${name}!</h4>
                <p>Ваша заявка на услугу принята. Мы свяжемся с вами по email <strong>${email}</strong> в течение часа.</p>
                <p class="mt-3"><em>Ваш комментарий:</em> "${comment}"</p>
            `;
            
            form.reset();
        }
    });
});


document.getElementById('scrollToFormBtn').addEventListener('click', function(e) {
    e.preventDefault();
    
    const form = document.getElementById('feedbackForm');
    const headerHeight = document.querySelector('header').offsetHeight || 0;
    
    window.scrollTo({
      top: form.offsetTop - headerHeight,
      behavior: 'smooth'
    });
    document.getElementById('name').focus();
  });