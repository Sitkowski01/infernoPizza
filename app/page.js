'use client'

import { useEffect, useRef, useState } from 'react'
import { Flame, MapPin, Phone, Clock, ArrowRight, Calendar, Pizza } from 'lucide-react'

const menuItems = [
  { name: 'MARGHERITA', price: '34', desc: 'San Marzano, bufala, bazylia.' },
  { name: 'DIAVOLA', price: '39', desc: 'Spianata, płatki chilli, gorący miód.' },
  { name: 'TARTUFO', price: '45', desc: 'Krem truflowy, portobello, pecorino.' },
  { name: 'BURRATA', price: '42', desc: 'Świeża burrata, pesto z pistacji, mortadela.' },
]

const menuBgImages = [
  'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2000&auto=format&fit=crop',
]

const galleryImages = [
  'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1579751626657-72bc17010498?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop',
]

export default function Home() {
  const heroBgRef = useRef(null)
  const heroTextRef = useRef(null)
  const galleryRef = useRef(null)
  const craftRef = useRef(null)
  const [activeMenuIndex, setActiveMenuIndex] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroBgRef.current && window.scrollY < window.innerHeight) {
        const x = (e.clientX / window.innerWidth - 0.5) * 20
        const y = (e.clientY / window.innerHeight - 0.5) * 20
        heroBgRef.current.style.transform = `translate(${-x}px, ${-y}px)`
      }
    }

    const handleScroll = () => {
      const scrollY = window.scrollY
      if (heroTextRef.current && scrollY < window.innerHeight) {
        heroTextRef.current.style.transform = `translateY(${scrollY * 0.4}px)`
        heroTextRef.current.style.opacity = Math.max(1 - scrollY / 500, 0)
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (!craftRef.current) return
    const items = craftRef.current.querySelectorAll('.craft-img')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
          } else {
            entry.target.classList.remove('in-view')
          }
        })
      },
      { rootMargin: '-20% 0px -20% 0px', threshold: 0 }
    )
    items.forEach(item => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!galleryRef.current) return
    const items = galleryRef.current.querySelectorAll('.gallery-item')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
          } else {
            entry.target.classList.remove('in-view')
          }
        })
      },
      { rootMargin: '0px -28% 0px -28%', threshold: 0 }
    )
    items.forEach(item => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Pływający Header */}
      <header className="fixed top-0 left-0 w-full px-6 py-4 z-50 flex justify-between items-center bg-[#050505]/90 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none lg:mix-blend-difference">
        <div className="flex items-center gap-2">
          <Flame className="w-5 h-5 text-red-500" />
          <span className="font-black tracking-tighter text-lg text-white">INFERNO</span>
        </div>
        <button className="text-xs font-bold uppercase tracking-widest text-white hover:text-red-500 transition-colors">
          Rezerwacja
        </button>
      </header>

      {/* SEKCJA HERO */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            ref={heroBgRef}
            src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=2500&auto=format&fit=crop"
            alt="Pizza neapolitana"
            className="w-[105%] h-[105%] -left-[2.5%] -top-[2.5%] absolute object-cover opacity-40 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)] opacity-80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/40 to-[#050505]"></div>
        </div>

        {/* Obracająca się pieczęć */}
        <div className="absolute top-24 right-8 md:right-24 z-20 w-24 h-24 md:w-32 md:h-32 animate-[spin_12s_linear_infinite] opacity-70 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-red-600">
            <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
            <text className="text-[10px] font-black uppercase">
              <textPath href="#circlePath" textLength="225" lengthAdjust="spacing">TRADYCJA • INFERNO • NEAPOL •</textPath>
            </text>
          </svg>
        </div>

        {/* Główny tekst */}
        <div
          ref={heroTextRef}
          className="relative z-10 w-full px-4 flex flex-col justify-center items-center pointer-events-none mt-8 transition-transform duration-100 ease-out"
        >
          <svg
            className="w-full overflow-visible block h-[10vw] md:h-[6.5vw]"
            aria-label="INFERNO"
            role="img"
          >
            <defs>
              <filter id="hero-outline" x="-2%" y="-15%" width="104%" height="130%">
                <feMorphology in="SourceAlpha" operator="dilate" radius="1.2" result="dilated"/>
                <feComposite in="dilated" in2="SourceAlpha" operator="out" result="ring"/>
                <feFlood floodColor="rgba(255,255,255,0.4)" result="color"/>
                <feComposite in="color" in2="ring" operator="in"/>
              </filter>
            </defs>
            <text
              x="50%"
              y="100%"
              textAnchor="middle"
              fill="white"
              filter="url(#hero-outline)"
              className="hero-title-svg"
            >
              INFERNO
            </text>
          </svg>
          <h1 className="text-[10vw] md:text-[8vw] font-black uppercase tracking-normal md:tracking-tighter leading-[0.8] text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-red-500 to-orange-500 relative z-20">
            NEAPOLITANA
          </h1>
          <div className="mt-8 flex flex-col items-center gap-4">
            <p className="text-white/70 max-w-md text-center text-base md:text-lg font-medium leading-relaxed border-l-2 md:border-l-0 md:border-t-2 border-red-600 pl-4 md:pl-0 md:pt-4">
              Bezwzględny kult ciasta i ognia. Wyrabiana ręcznie, wypiekana z rzemieślniczą precyzją, by oddać hołd włoskiej tradycji.
            </p>
          </div>
        </div>

        {/* Wskaźnik Scrollowania */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20">
          <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/40">Zanurz się</span>
          <div className="w-px h-12 bg-white/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-red-600 animate-scroll-line"></div>
          </div>
        </div>
      </section>

      {/* Pasek Marquee */}
      <div className="py-3 bg-red-600 overflow-hidden flex whitespace-nowrap border-y border-red-500/30">
        <div className="flex animate-marquee w-max">
          <div className="flex text-lg md:text-2xl font-black uppercase tracking-tighter">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="mx-6 flex items-center gap-4">
                CIASTO • PASJA • 450 STOPNI <Pizza className="inline w-5 h-5 text-black" />
              </span>
            ))}
          </div>
          <div className="flex text-lg md:text-2xl font-black uppercase tracking-tighter">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="mx-6 flex items-center gap-4">
                CIASTO • PASJA • 450 STOPNI <Pizza className="inline w-5 h-5 text-black" />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* INTERAKTYWNE MENU */}
      <section className="relative h-screen bg-[#050505] flex items-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          {menuBgImages.map((src, i) => (
            <img
              key={i}
              src={src}
              className={`menu-bg absolute inset-0 w-full h-full object-cover${activeMenuIndex === i ? ' active' : ''}`}
              alt=""
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent z-10"></div>
        </div>

        <div className="relative z-10 max-w-6xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center py-12">
            <div className="text-red-500 font-bold tracking-[0.15em] uppercase text-xs mb-8">Wybierz swój ogień</div>

            {menuItems.map((item, i) => (
              <div
                key={i}
                className="menu-item group relative border-b border-white/10 py-4 cursor-pointer"
                onMouseEnter={() => setActiveMenuIndex(i)}
              >
                <div className="flex items-baseline justify-between">
                  <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white/40 group-hover:text-white">
                    {item.name}
                  </h2>
                  <span className="text-lg md:text-2xl font-bold text-white/30 group-hover:text-red-500 transition-colors duration-500">
                    {item.price}
                  </span>
                </div>
                <div className="menu-desc">
                  <p className="text-white/70 max-w-xs text-base italic">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEKCJA D.O.P. */}
      <section className="py-20 px-6 bg-[#050505] border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-red-500 font-bold tracking-[0.15em] uppercase text-xs mb-8">Święta Trójca</div>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-12">
            Bez dobrych składników<br /><span className="text-white/30">nie ma pizzy.</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: '01', title: 'Mąka Caputo', desc: 'Typ 00, sprowadzana prosto z młynów w Neapolu. To ona daje ciastu elastyczność i słynną chrupkość na brzegach.' },
              { num: '02', title: 'San Marzano', desc: 'Pomidory rosnące wyłącznie na wulkanicznych glebach Wezuwiusza. Słodkie, intensywne, zbierane ręcznie.' },
              { num: '03', title: 'Fior Di Latte', desc: 'Świeża mozzarella z mleka krowiego prosto z Kampanii. Idealnie topi się i ciągnie w 450 stopniach Celsjusza.' },
            ].map((item) => (
              <div key={item.num} className="group border-t border-white/20 pt-6">
                <div className="text-red-600 font-mono text-xl font-bold mb-3">{item.num}</div>
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-3 group-hover:text-red-500 transition-colors">{item.title}</h3>
                <p className="text-white/60 text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sekcja Ręczna Robota */}
      <section className="py-20 px-6 bg-white text-black rounded-t-[2rem] -mt-6 relative z-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-6">
              Ręczna<br />Robota.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              Nie używamy maszyn. Każde ciasto jest wyrabiane ręcznie, dojrzewa przez 48 godzin, a następnie trafia do pieca na drewno bukowe na zaledwie 60 sekund. To sztuka, nie fast food.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4" ref={craftRef}>
            <img
              src="https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=800&auto=format&fit=crop"
              className="craft-img w-full aspect-[3/4] object-cover rounded-xl"
              alt="Robienie ciasta"
            />
            <img
              src="https://images.unsplash.com/photo-1579751626657-72bc17010498?q=80&w=800&auto=format&fit=crop"
              className="craft-img w-full aspect-[3/4] object-cover rounded-xl mt-8"
              alt="Piec"
            />
          </div>
        </div>
      </section>

      {/* SEKCJA: IL MAESTRO */}
      <section className="relative h-screen flex items-center justify-center bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 z-0 flex md:justify-end">
          <img
            src="https://images.unsplash.com/photo-1552539618-7eec9b4d1796?q=80&w=2000&auto=format&fit=crop"
            alt="Wkładanie pizzy do pieca"
            className="h-full w-full md:w-2/3 object-cover opacity-50 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-6xl w-full mx-auto px-6">
          <div className="max-w-lg">
            <div className="text-red-500 font-bold tracking-[0.15em] uppercase text-xs mb-4">Il Maestro</div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-6">
              Dwadzieścia<br />Lat<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">Praktyki.</span>
            </h2>
            <p className="text-lg text-white/70 font-medium italic border-l-2 border-red-600 pl-4 mb-6">
              "Pizzę może zrobić każdy. Ale żeby zrobić świetną pizzę, musisz zrozumieć duszę ciasta i szanować żywy ogień. To nie jest po prostu przepis z kartki. To jest uczucie."
            </p>
            <p className="text-xs font-bold uppercase tracking-widest text-white/50">
              — Marco Rossi, Główny Pizzaiolo
            </p>
          </div>
        </div>
      </section>

      {/* GALERIA MARQUEE */}
      <div className="py-12 bg-[#050505] overflow-hidden flex whitespace-nowrap" ref={galleryRef}>
        <div className="flex animate-marquee-slow w-max">
          {[...Array(2)].map((_, dupIdx) => (
            <div key={dupIdx} className="flex items-center gap-6 px-3">
              {galleryImages.map((src, i) => (
                <div
                  key={i}
                  className="gallery-item w-[200px] h-[300px] md:w-[300px] md:h-[400px] shrink-0 rounded-xl overflow-hidden"
                >
                  <img
                    src={src}
                    className="w-full h-full object-cover"
                    alt="Galeria"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* STOPKA */}
      <footer className="bg-[#050505] pt-24 pb-8 px-6 border-t border-white/10 relative z-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 mb-20">
          <div>
            <h3 className="text-3xl font-black uppercase tracking-tighter mb-8 text-white">Chodź na pizzę.</h3>
            <div className="space-y-6 text-white/60 text-sm font-medium">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-red-600 shrink-0" />
                <p>ul. Piekielna 14<br />00-666 Warszawa</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-red-600 shrink-0" />
                <p>+48 123 456 789</p>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-red-600 shrink-0" />
                <p>Wt - Czw: 13:00 - 22:00<br />Pt - Sob: 13:00 - 23:00<br />Ndz: 13:00 - 21:00</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4">
            <div className="text-red-500 font-bold tracking-[0.15em] uppercase text-xs mb-2">Głodny?</div>
            <button className="w-full md:w-auto px-8 py-4 bg-red-600 text-white font-black uppercase tracking-widest text-sm hover:bg-red-700 transition-colors flex items-center justify-between group">
              Zamów z dostawą
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="w-full md:w-auto px-8 py-4 bg-transparent border border-white/20 text-white font-black uppercase tracking-widest text-sm hover:bg-white/5 transition-colors flex items-center justify-between group">
              Zarezerwuj stolik
              <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10 text-white/40 text-xs font-medium uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-red-600" />
            <span>© 2026 INFERNO NEAPOLITANA</span>
          </div>
          <div className="flex gap-6">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">Instagram</a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">Facebook</a>
            <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">TikTok</a>
          </div>
        </div>
      </footer>
    </>
  )
}
