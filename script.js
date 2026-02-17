
        // Tailwind script already loaded via CDN

        function toggleMobileMenu() {
            const menu = document.getElementById('mobileMenu')
            menu.classList.toggle('hidden')
        }

        function scrollToSection(section) {
            let el;
            if (section === 'services') el = document.getElementById('services')
            else if (section === 'projects') el = document.getElementById('projects')
            else if (section === 'Pages') el = document.getElementById('Pages')
            else if (section === 'Blog') el = document.getElementById('Blog')
            else if (section === 'Blocks') el = document.getElementById('Blocks')
            else if (section === 'Documentation') el = document.getElementById('Documentation')

            if (el) {
                el.scrollIntoView({ behavior: 'smooth' })
            }
        }

        function playVideo() {
            document.getElementById('videoModal').classList.remove('hidden')
            document.getElementById('youtubeFrame').src = "https://www.youtube.com/embed/3JZ_D3ELwOQ?autoplay=1"
        }

        function closeModal() {
            const modal = document.getElementById('videoModal')
            modal.classList.add('hidden')
            document.getElementById('youtubeFrame').src = ""
        }

        function subscribeNewsletter() {
            const email = document.getElementById('emailInput').value.trim()
            if (email) {
                alert(`Thank you! ${email} has been subscribed to our newsletter.`)
                document.getElementById('emailInput').value = ''
            } else {
                alert('Please enter your email address')
            }
        }

        // Stats counter animation
        function animateCounter(id, target, duration = 2000) {
            let start = 0
            const increment = Math.ceil(target / (duration / 16))
            const element = document.getElementById(id)

            const timer = setInterval(() => {
                start += increment
                if (start >= target) {
                    start = target
                    clearInterval(timer)
                }
                element.textContent = start.toLocaleString() + (id === 'stat1' ? '+' : '')
            }, 16)
        }

        // Trigger counters when scrolled into view
        function triggerCounters() {
            const statsSection = document.querySelector('.bg-gradient-to-br')
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateCounter('stat1', 7518)
                        animateCounter('stat2', 3472)
                        animateCounter('stat3', 2184)
                        observer.disconnect()
                    }
                })
            }, { threshold: 0.6 })

            if (statsSection) observer.observe(statsSection)
        }

        // Keyboard escape for modal
        document.addEventListener('keydown', function (e) {
            if (e.key === "Escape") {
                const modal = document.getElementById('videoModal')
                if (!modal.classList.contains('hidden')) closeModal()
            }
        })

        // Initialize everything
        window.onload = function () {
            // Make sure Tailwind is ready
            triggerCounters()

            // Demo: click anywhere on hero to see smooth scroll hint
            console.log('%c✅ Sandbox website recreated successfully!', 'color:#6366f1; font-size:16px; font-weight:700')
        }
