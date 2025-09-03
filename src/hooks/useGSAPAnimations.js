import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export const useGSAPAnimations = (
  contactRef,
  setActiveSection,
  heroRef,
  aboutRef,
  skillsRef,
  experienceRef,
  projectsRef
) => {

  useEffect(() => {
    // Clear existing ScrollTriggers
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())

    const ctx = gsap.context(() => {
      // Hero animations - immediate
      gsap.fromTo('.hero-number',
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'power3.out' }
      )

      gsap.fromTo('.hero-name',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: 'power3.out' }
      )

      gsap.fromTo('.hero-role',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.4, ease: 'power3.out' }
      )

      gsap.fromTo('.hero-subtitle',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.6, ease: 'power3.out' }
      )

      gsap.fromTo('.animated-line',
        { scaleX: 0, transformOrigin: 'left' },
        { scaleX: 1, duration: 1, delay: 0.8, ease: 'power3.inOut' }
      )

      // Grid animation with proper trigger
      gsap.fromTo('.grid-container',
        { opacity: 0, scale: 0.9, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          delay: 0.3,
          ease: 'back.out(1.2)'
        }
      )

      // Scroll-triggered animations
      gsap.utils.toArray('.section-number').forEach((element) => {
        gsap.fromTo(element,
          { opacity: 0, scale: 0.8, y: 20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      })

      gsap.utils.toArray('.section-card').forEach((element) => {
        gsap.fromTo(element,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      })

      // Skills animations
      if (skillsRef?.current) {
        gsap.utils.toArray('.skill-bar').forEach((bar, index) => {
          const width = bar.style.width || '0%'
          gsap.fromTo(bar,
            { width: '0%' },
            {
              width: width,
              duration: 1.5,
              delay: index * 0.1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: skillsRef.current,
                start: 'top 75%',
                toggleActions: 'play none none reverse'
              }
            }
          )
        })
      }

      // Experience animations
      if (experienceRef?.current) {
        gsap.utils.toArray('.timeline-dot').forEach((dot, index) => {
          gsap.fromTo(dot,
            { scale: 0, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.6,
              delay: index * 0.15,
              ease: 'back.out(1.5)',
              scrollTrigger: {
                trigger: experienceRef.current,
                start: 'top 75%',
                toggleActions: 'play none none reverse'
              }
            }
          )
        })

        gsap.utils.toArray('.timeline-content').forEach((content, index) => {
          gsap.fromTo(content,
            { opacity: 0, x: 30 },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              delay: index * 0.15,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: experienceRef.current,
                start: 'top 75%',
                toggleActions: 'play none none reverse'
              }
            }
          )
        })

        const timelineLine = document.querySelector('.timeline-line')
        if (timelineLine) {
          gsap.fromTo(timelineLine,
            { height: '0%' },
            {
              height: '100%',
              duration: 1.5,
              ease: 'power3.inOut',
              scrollTrigger: {
                trigger: experienceRef.current,
                start: 'top 75%',
                toggleActions: 'play none none reverse'
              }
            }
          )
        }
      }

      // Contact animations
      if (contactRef?.current) {
        gsap.utils.toArray('.contact-card').forEach((card, index) => {
          gsap.fromTo(card,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: index * 0.1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: contactRef.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
              }
            }
          )
        })

        const contactButton = document.querySelector('.contact-button')
        if (contactButton) {
          gsap.fromTo(contactButton,
            { opacity: 0, scale: 0.9 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.8,
              delay: 0.3,
              ease: 'back.out(1.2)',
              scrollTrigger: {
                trigger: contactRef.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
              }
            }
          )
        }
      }

      // Hover effects
      document.querySelectorAll('.experience-card').forEach((card) => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.02,
            y: -5,
            duration: 0.3,
            ease: 'power2.out'
          })
         
          const yearBadge = card.querySelector('.year-badge')
          if (yearBadge) {
            gsap.to(yearBadge, { scale: 1.05, duration: 0.3 })
          }
        })

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: 'power2.out'
          })
          const cardGlow = card.querySelector('.card-glow')
          if (cardGlow) {
            gsap.to(cardGlow, { opacity: 0, duration: 0.3 })
          }
          const yearBadge = card.querySelector('.year-badge')
          if (yearBadge) {
            gsap.to(yearBadge, { scale: 1, duration: 0.3 })
          }
        })
      })

      document.querySelectorAll('.contact-info-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.02,
            y: -5,
            duration: 0.3,
            ease: 'power2.out'
          })
          const icon = card.querySelector('.contact-icon')
          if (icon) {
            gsap.to(icon, { scale: 1.1, duration: 0.3 })
          }
        })

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: 'power2.out'
          })
          const icon = card.querySelector('.contact-icon')
          if (icon) {
            gsap.to(icon, { scale: 1, duration: 0.3 })
          }
        })
      })

      // Section detection
      const sections = [
        { ref: heroRef, name: 'hero' },
        { ref: aboutRef, name: 'about' },
        { ref: skillsRef, name: 'skills' },
        { ref: experienceRef, name: 'experience' },
        { ref: contactRef, name: 'contact' }
      ]

      sections.forEach(({ ref, name }) => {
        if (ref?.current) {
          ScrollTrigger.create({
            trigger: ref.current,
            start: 'top 50%',
            end: 'bottom 50%',
            onEnter: () => setActiveSection(name),
            onEnterBack: () => setActiveSection(name)
          })
        }
      })

    })

    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [contactRef, setActiveSection, heroRef, aboutRef, skillsRef, experienceRef, projectsRef])

  const scrollToSection = (targetId) => {
    const target = document.querySelector(targetId)
    if (target) {
      gsap.to(window, {
        duration: 1.2,
        scrollTo: { y: target, offsetY: 80 },
        ease: 'power3.inOut'
      })
    }
  }

  return { scrollToSection }
}