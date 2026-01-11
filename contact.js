document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-bars');
        this.querySelector('i').classList.toggle('fa-times');
    });
    
    const messageTextarea = document.querySelector('.form-textarea');
    const charCurrent = document.querySelector('.char-current');
    const charMax = document.querySelector('.char-max');
    
    messageTextarea.addEventListener('input', function() {
        const currentLength = this.value.length;
        charCurrent.textContent = currentLength;
        
        const sentimentNebula = document.querySelector('.nebula-color');
        const readingText = document.querySelector('.reading-text');
        const readingValue = document.querySelector('.reading-value');
        
        let sentiment = 72;
        let color = '#6C4BF0';
        let text = 'Neutral';
        
        if (currentLength < 50) {
            sentiment = 40;
            color = '#FF6B6B';
            text = 'Brief';
        } else if (currentLength > 200) {
            sentiment = 85;
            color = '#2EC4B6';
            text = 'Detailed';
        }
        
        if (this.value.toLowerCase().includes('urgent') || this.value.toLowerCase().includes('emergency')) {
            sentiment = 95;
            color = '#FF8E53';
            text = 'Urgent';
        }
        
        if (this.value.toLowerCase().includes('thank') || this.value.toLowerCase().includes('appreciate')) {
            sentiment = 90;
            color = '#FFD166';
            text = 'Grateful';
        }
        
        sentimentNebula.style.background = `linear-gradient(45deg, ${color}, #00D4FF)`;
        readingText.textContent = text;
        readingValue.textContent = `${sentiment}% Positive`;
    });
    
    const sendButton = document.getElementById('sendMessageBtn');
    const confirmationCard = document.querySelector('.confirmation-card');
    
    sendButton.addEventListener('click', function() {
        const nameInput = document.querySelector('input[type="text"]');
        const emailInput = document.querySelector('input[type="email"]');
        const phoneInput = document.querySelector('input[type="tel"]');
        
        let isValid = true;
        
        if (!nameInput.value.trim()) {
            nameInput.style.borderColor = '#FF6B6B';
            isValid = false;
        } else {
            nameInput.style.borderColor = '#00D4FF';
        }
        
        if (!emailInput.value.trim() || !emailInput.value.includes('@')) {
            emailInput.style.borderColor = '#FF6B6B';
            isValid = false;
        } else {
            emailInput.style.borderColor = '#00D4FF';
        }
        
        if (!messageTextarea.value.trim()) {
            messageTextarea.style.borderColor = '#FF6B6B';
            isValid = false;
        } else {
            messageTextarea.style.borderColor = '#00D4FF';
        }
        
        if (!isValid) {
            this.innerHTML = '<i class="fas fa-exclamation-circle"></i> Please fill all fields';
            this.style.background = 'linear-gradient(45deg, #FF6B6B, #FF8E53)';
            
            setTimeout(() => {
                this.innerHTML = '<span class="send-text">Send Message</span><i class="fas fa-paper-plane"></i>';
                this.style.background = 'linear-gradient(45deg, #6C4BF0, #00D4FF)';
            }, 2000);
            return;
        }
        
        this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        this.disabled = true;
        
        const wormholeStart = document.querySelector('.wormhole-start');
        const wormholeEnd = document.querySelector('.wormhole-end');
        
        wormholeStart.style.animation = 'wormhole-spin 0.5s linear infinite';
        wormholeEnd.style.animation = 'wormhole-spin 0.5s linear infinite reverse';
        
        const chefHead = document.querySelector('.hologram-head');
        const chefArms = document.querySelectorAll('.arm');
        
        chefHead.style.animation = 'float-head 0.3s ease-in-out infinite';
        chefArms.forEach(arm => {
            arm.style.animation = 'wave-arm 0.5s ease-in-out infinite';
        });
        
        setTimeout(() => {
            this.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            this.style.background = 'linear-gradient(45deg, #2EC4B6, #00D4FF)';
            
            wormholeStart.style.animation = '';
            wormholeEnd.style.animation = '';
            chefHead.style.animation = '';
            chefArms.forEach(arm => {
                arm.style.animation = '';
            });
            
            confirmationCard.style.display = 'block';
            confirmationCard.scrollIntoView({ behavior: 'smooth' });
            
            const bigBang = document.querySelector('.big-bang');
            bigBang.style.animation = 'big-bang-expand 1s ease-out';
            
            setTimeout(() => {
                bigBang.style.animation = 'big-bang-expand 3s ease-out infinite';
                
                setTimeout(() => {
                    this.innerHTML = '<span class="send-text">Send Another</span><i class="fas fa-paper-plane"></i>';
                    this.style.background = 'linear-gradient(45deg, #6C4BF0, #00D4FF)';
                    this.disabled = false;
                }, 3000);
            }, 1000);
        }, 2000);
    });
    
    const methodCards = document.querySelectorAll('.method-card');
    const methodButtons = document.querySelectorAll('.method-action');
    
    methodCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    methodButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            
            const originalHTML = this.innerHTML;
            const originalBackground = this.style.background;
            
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
            this.disabled = true;
            
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-check"></i> Connected!';
                
                setTimeout(() => {
                    this.innerHTML = originalHTML;
                    this.disabled = false;
                }, 1500);
            }, 1000);
        });
    });
    
    const urgentBtn = document.querySelector('.urgent-btn');
    urgentBtn.addEventListener('click', function() {
        this.innerHTML = '<i class="fas fa-satellite-dish"></i> Beacon Activated!';
        this.style.background = 'linear-gradient(45deg, #FF0000, #FF8E53)';
        
        document.querySelector('.emergency-btn').style.animation = 'pulsar-beat 0.5s ease-in-out infinite';
        
        setTimeout(() => {
            this.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Urgent Matter';
            this.style.background = 'linear-gradient(45deg, #FF6B6B, #FF8E53)';
            document.querySelector('.emergency-btn').style.animation = '';
        }, 3000);
    });
    
    const voiceBtn = document.querySelector('.voice-btn');
    let isRecording = false;
    
    voiceBtn.addEventListener('click', function() {
        if (!isRecording) {
            isRecording = true;
            this.innerHTML = '<i class="fas fa-stop-circle"></i> Recording...';
            this.style.background = 'linear-gradient(45deg, #FF0000, #FF6B6B)';
            
            const nebulaCloud = document.querySelector('.nebula-cloud');
            nebulaCloud.style.animation = 'nebula-pulse 0.5s ease-in-out infinite';
            
            setTimeout(() => {
                isRecording = false;
                this.innerHTML = '<i class="fas fa-check-circle"></i> Voice Saved!';
                this.style.background = 'linear-gradient(45deg, #2EC4B6, #00D4FF)';
                nebulaCloud.style.animation = 'nebula-pulse 4s ease-in-out infinite';
                
                setTimeout(() => {
                    this.innerHTML = '<i class="fas fa-microphone"></i> Voice Message';
                    this.style.background = 'linear-gradient(45deg, #6C4BF0, #00D4FF)';
                }, 2000);
            }, 3000);
        }
    });
    
    const attachBtn = document.querySelector('.attach-btn');
    attachBtn.addEventListener('click', function() {
        this.innerHTML = '<i class="fas fa-folder-open"></i> Select Files';
        
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.multiple = true;
        fileInput.style.display = 'none';
        document.body.appendChild(fileInput);
        
        fileInput.click();
        
        fileInput.addEventListener('change', function() {
            const fileCount = this.files.length;
            if (fileCount > 0) {
                attachBtn.innerHTML = `<i class="fas fa-paperclip"></i> ${fileCount} File(s)`;
                attachBtn.style.background = 'linear-gradient(45deg, #2EC4B6, #00D4FF)';
                
                setTimeout(() => {
                    attachBtn.innerHTML = '<i class="fas fa-paperclip"></i> Attach Files';
                    attachBtn.style.background = 'linear-gradient(45deg, #2EC4B6, #00D4FF)';
                }, 3000);
            }
            
            document.body.removeChild(this);
        });
    });
    
    const emergencyBtn = document.querySelector('.emergency-btn');
    emergencyBtn.addEventListener('click', function() {
        this.innerHTML = '<i class="fas fa-satellite"></i> Signal Sent!';
        this.style.background = 'linear-gradient(45deg, #FF0000, #FF6B6B)';
        
        const satellites = document.querySelectorAll('.satellite');
        satellites.forEach(sat => {
            const signal = sat.querySelector('.sat-signal');
            signal.style.animation = 'send-signal 0.5s ease-in-out infinite';
        });
        
        setTimeout(() => {
            this.innerHTML = '<i class="fas fa-satellite-dish"></i> Activate Emergency Signal';
            this.style.background = 'linear-gradient(45deg, #FF6B6B, #FF8E53)';
            
            satellites.forEach(sat => {
                const signal = sat.querySelector('.sat-signal');
                signal.style.animation = 'send-signal 2s ease-in-out infinite';
            });
        }, 3000);
    });
    
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const icon = this.querySelector('i');
            const originalClass = icon.className;
            
            icon.className = 'fas fa-check';
            this.style.transform = 'scale(1.2)';
            
            setTimeout(() => {
                icon.className = originalClass;
                this.style.transform = '';
            }, 1000);
        });
    });
    
    const reserveBtn = document.querySelector('.reserve-btn');
    reserveBtn.addEventListener('click', function() {
        this.innerHTML = '<i class="fas fa-calendar-check"></i> Booking...';
        
        setTimeout(() => {
            this.innerHTML = '<i class="fas fa-check"></i> Booked!';
            this.style.background = 'linear-gradient(45deg, #2EC4B6, #00D4FF)';
            
            setTimeout(() => {
                this.innerHTML = 'Book Now';
                this.style.background = 'linear-gradient(45deg, #00D4FF, #2EC4B6)';
            }, 2000);
        }, 1500);
    });
    
    document.addEventListener('mousemove', function(e) {
        const satellites = document.querySelectorAll('.satellite');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        satellites.forEach((sat, index) => {
            const speed = (index + 1) * 0.3;
            const xMove = (x - 0.5) * 15 * speed;
            const yMove = (y - 0.5) * 15 * speed;
            
            sat.style.transform = `translate(${xMove}px, ${yMove}px)`;
        });
    });
    
    window.addEventListener('scroll', function() {
        const elements = document.querySelectorAll('.method-card, .form-container, .confirmation-card');
        elements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight * 0.8) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    });
    
    const navLinksAll = document.querySelectorAll('.nav-link');
    navLinksAll.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
                
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                this.classList.add('active');
                
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('active');
                    menuToggle.querySelector('i').classList.remove('fa-times');
                    menuToggle.querySelector('i').classList.add('fa-bars');
                }
            }
        });
    });
    
    const inputs = document.querySelectorAll('.form-input, .form-textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    });
});