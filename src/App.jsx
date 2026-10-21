import React, { useState } from 'react';
import { translations } from './translations';
import { 
  IconPlane, 
  IconCompass, 
  IconCalendar, 
  IconUsers, 
  IconSearch, 
  IconMapPin, 
  IconCheckCircle, 
  IconShieldCheck, 
  IconPhone, 
  IconMessage, 
  IconMail, 
  IconGlobe, 
  IconArrowRight, 
  IconX, 
  IconSparkles, 
  IconClock, 
  IconHandshake, 
  IconBuilding, 
  IconUtensils, 
  IconDollar, 
  IconSend 
} from './Icons';

export default function App() {
  const [lang, setLang] = useState('hy'); // Switchable: 'hy' (Armenian), 'de' (German), 'en' (English)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalFormSubmitted, setModalFormSubmitted] = useState(false);
  const [selectedContactMethod, setSelectedContactMethod] = useState('phone');

  // Interactive Search Form state
  const [searchDest, setSearchDest] = useState('');
  const [searchDepart, setSearchDepart] = useState('');
  const [searchReturn, setSearchReturn] = useState('');
  const [searchPax, setSearchPax] = useState('2');

  const t = translations[lang];

  const handleOpenModal = (prefillDest = '') => {
    if (prefillDest) {
      setSearchDest(prefillDest);
    }
    setIsModalOpen(true);
    setModalFormSubmitted(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setModalFormSubmitted(true);
  };

  return (
    <div className="travel-app">
      {/* 1. Header / Navigation */}
      <header className="site-header">
        <div className="container header-inner">
          <div className="brand-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="logo-icon-wrap">
              <IconPlane size={24} color="#fff" />
            </div>
            <div className="brand-text">
              <h1>{t.brandName}</h1>
              <span>{t.brandSubtitle}</span>
            </div>
          </div>

          <nav className="nav-links">
            <a href="#services" className="nav-item">{t.nav.customTours}</a>
            <a href="#services" className="nav-item">{t.nav.groupTours}</a>
            <a href="#destinations" className="nav-item">{t.nav.destinations}</a>
            <a href="#why-us" className="nav-item">{t.nav.whyUs}</a>
            <a href="#how-it-works" className="nav-item">{t.nav.howItWorks}</a>
            <a href="#contact" className="nav-item">{t.nav.contact}</a>
          </nav>

          <div className="header-actions">
            {/* 3-Language Switcher */}
            <div className="lang-selector">
              <button 
                id="btn-lang-hy"
                className={`lang-btn ${lang === 'hy' ? 'active' : ''}`} 
                onClick={() => setLang('hy')}
                title="Հայերեն"
              >
                Հայ
              </button>
              <button 
                id="btn-lang-de"
                className={`lang-btn ${lang === 'de' ? 'active' : ''}`} 
                onClick={() => setLang('de')}
                title="Deutsch"
              >
                DE
              </button>
              <button 
                id="btn-lang-en"
                className={`lang-btn ${lang === 'en' ? 'active' : ''}`} 
                onClick={() => setLang('en')}
                title="English"
              >
                EN
              </button>
            </div>

            <button id="header-request-btn" className="btn-primary" onClick={() => handleOpenModal()}>
              <IconSend size={15} color="#fff" />
              <span>{t.nav.requestTour}</span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. Hero Section with Travel Banner & Floating Search Bar */}
      <section 
        className="hero-section" 
        style={{ backgroundImage: `url('/images/attractions/ararat.jpg')` }}
      >
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <div className="hero-badge">
            <IconSparkles size={16} color="#38bdf8" />
            <span>{t.hero.badge}</span>
          </div>

          <h2 className="hero-title">{t.hero.title}</h2>
          <p className="hero-subtitle">{t.hero.subtitle}</p>

          {/* Interactive Floating Search Box */}
          <div className="hero-search-card">
            <div className="search-field">
              <label>
                <IconMapPin size={13} color="#64748b" />
                <span>{t.hero.searchDestination}</span>
              </label>
              <input 
                id="search-dest-input"
                type="text" 
                placeholder={t.hero.destinationPlaceholder}
                value={searchDest}
                onChange={(e) => setSearchDest(e.target.value)}
              />
            </div>

            <div className="search-field">
              <label>
                <IconCalendar size={13} color="#64748b" />
                <span>{t.hero.departureDate}</span>
              </label>
              <input 
                type="date" 
                value={searchDepart}
                onChange={(e) => setSearchDepart(e.target.value)}
              />
            </div>

            <div className="search-field">
              <label>
                <IconCalendar size={13} color="#64748b" />
                <span>{t.hero.returnDate}</span>
              </label>
              <input 
                type="date" 
                value={searchReturn}
                onChange={(e) => setSearchReturn(e.target.value)}
              />
            </div>

            <div className="search-field">
              <label>
                <IconUsers size={13} color="#64748b" />
                <span>{t.hero.travelers}</span>
              </label>
              <select value={searchPax} onChange={(e) => setSearchPax(e.target.value)}>
                <option value="1">1 Person</option>
                <option value="2">2 Adults</option>
                <option value="3">3 Persons</option>
                <option value="4">4+ Family</option>
              </select>
            </div>

            <button id="hero-search-btn" className="search-btn" onClick={() => handleOpenModal(searchDest)}>
              <IconSearch size={16} color="#fff" />
              <span>{t.hero.searchBtn}</span>
            </button>
          </div>

          {/* Quick Stats Pills */}
          <div className="hero-stats">
            <div className="hero-stat-pill">
              <IconGlobe size={16} color="#38bdf8" />
              <span>{t.hero.stat1}</span>
            </div>
            <div className="hero-stat-pill">
              <IconCheckCircle size={16} color="#4ade80" />
              <span>{t.hero.stat2}</span>
            </div>
            <div className="hero-stat-pill">
              <IconClock size={16} color="#fbbf24" />
              <span>{t.hero.stat3}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3 & 4. Services / Custom Tours vs Group Tours */}
      <section id="services" className="section-pad">
        <div className="container">
          <div className="section-head">
            <span className="section-badge">{t.services.tag}</span>
            <h3 className="section-title">{t.services.title}</h3>
          </div>

          <div className="tour-types-grid">
            {/* Custom Tour Card */}
            <div className="tour-type-card">
              <div className="tour-card-header">
                <div className="tour-card-title-group">
                  <div className="tour-icon-box custom">
                    <IconUsers size={22} color="#0284c7" />
                  </div>
                  <h3>{t.services.customCard.title}</h3>
                </div>
                <span className="card-pill blue">{t.services.customCard.badge}</span>
              </div>

              <div className="tour-card-img-wrap">
                <img src="/images/attractions/rome.jpg" alt="Custom Tours" />
              </div>

              <div className="tour-card-body">
                <p>{t.services.customCard.desc}</p>
                <button className="btn-primary" onClick={() => handleOpenModal()}>
                  <span>{t.services.customCard.btn}</span>
                  <IconArrowRight size={16} color="#fff" />
                </button>
              </div>
            </div>

            {/* Group Tour Card */}
            <div className="tour-type-card">
              <div className="tour-card-header">
                <div className="tour-card-title-group">
                  <div className="tour-icon-box group">
                    <IconCompass size={22} color="#9333ea" />
                  </div>
                  <h3>{t.services.groupCard.title}</h3>
                </div>
                <span className="card-pill purple">{t.services.groupCard.badge}</span>
              </div>

              <div className="tour-card-img-wrap">
                <img src="/images/attractions/paris.jpg" alt="Group Tours" />
              </div>

              <div className="tour-card-body">
                <p>{t.services.groupCard.desc}</p>
                <button className="btn-secondary" onClick={() => handleOpenModal()}>
                  <span>{t.services.groupCard.btn}</span>
                  <IconArrowRight size={16} color="#0f172a" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Popular Destinations (International: Italy, France, Spain, USA, Armenia, Germany) */}
      <section id="destinations" className="section-pad destinations-section">
        <div className="container">
          <div className="section-head">
            <span className="section-badge">{t.destinations.tag}</span>
            <h3 className="section-title">{t.destinations.title}</h3>
            <p className="section-subtitle">{t.destinations.subtitle}</p>
          </div>

          <div className="destinations-grid">
            {t.destinations.items.map((item) => (
              <div 
                key={item.id} 
                className="destination-card" 
                onClick={() => handleOpenModal(item.country)}
              >
                <div className="dest-img-wrap">
                  <img src={item.image} alt={item.country} />
                  <span className="dest-tag-badge">{item.tag}</span>
                </div>
                <div className="dest-info">
                  <div className="dest-header-line">
                    <h4 className="dest-country">{item.country}</h4>
                  </div>
                  <div className="dest-city">
                    <IconMapPin size={13} color="#64748b" />
                    <span>{item.city}</span>
                  </div>
                  <div className="dest-highlights">
                    ★ {item.highlights}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us */}
      <section id="why-us" className="section-pad">
        <div className="container">
          <div className="section-head">
            <span className="section-badge">{t.whyUs.tag}</span>
            <h3 className="section-title">{t.whyUs.title}</h3>
          </div>

          <div className="why-grid">
            {t.whyUs.cards.map((card, idx) => (
              <div key={idx} className="why-card">
                <div className="why-icon-box">
                  {idx === 0 && <IconUsers size={28} color="#0284c7" />}
                  {idx === 1 && <IconCompass size={28} color="#0284c7" />}
                  {idx === 2 && <IconHandshake size={28} color="#0284c7" />}
                </div>
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. How We Work (5-Step Process) */}
      <section id="how-it-works" className="section-pad how-section">
        <div className="container">
          <div className="section-head">
            <span className="section-badge">{t.howItWorks.tag}</span>
            <h3 className="section-title">{t.howItWorks.title}</h3>
          </div>

          <div className="steps-grid">
            {t.howItWorks.steps.map((st) => (
              <div key={st.num} className="step-card">
                <div className="step-number">{st.num}</div>
                <h4>{st.title}</h4>
                <p>{st.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA Banner inside process */}
          <div className="cta-banner">
            <div className="cta-text">
              <h3>{t.hero.title}</h3>
              <p>{t.hero.subtitle}</p>
            </div>
            <button className="btn-primary" style={{ padding: '14px 32px', fontSize: '16px' }} onClick={() => handleOpenModal()}>
              <span>{t.nav.requestTour}</span>
              <IconArrowRight size={18} color="#fff" />
            </button>
          </div>
        </div>
      </section>

      {/* 8. Footer */}
      <footer id="contact" className="site-footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-col">
              <div className="brand-logo" style={{ marginBottom: '16px' }}>
                <div className="logo-icon-wrap">
                  <IconPlane size={24} color="#fff" />
                </div>
                <div className="brand-text">
                  <h1 style={{ color: '#fff' }}>{t.brandName}</h1>
                  <span style={{ color: '#94a3b8' }}>{t.brandSubtitle}</span>
                </div>
              </div>
              <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#94a3b8' }}>{t.footer.desc}</p>
            </div>

            <div className="footer-col">
              <h5>{t.footer.linksTitle}</h5>
              <ul className="footer-links">
                <li><a href="#services" onClick={(e) => { e.preventDefault(); handleOpenModal(); }}>{t.nav.customTours}</a></li>
                <li><a href="#services" onClick={(e) => { e.preventDefault(); handleOpenModal(); }}>{t.nav.groupTours}</a></li>
                <li><a href="#destinations">{t.nav.destinations}</a></li>
                <li><a href="#why-us">{t.nav.whyUs}</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h5>{t.footer.legalTitle}</h5>
              <ul className="footer-links">
                <li><a href="#">{t.footer.privacy}</a></li>
                <li><a href="#">{t.footer.terms}</a></li>
                <li><a href="#">{t.footer.companyData}</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h5>{t.footer.contactTitle}</h5>
              <div className="footer-contact-item">
                <IconPhone size={16} color="#0284c7" />
                <span>+374 99 XXX XXX / +49 170 XXX</span>
              </div>
              <div className="footer-contact-item">
                <IconMail size={16} color="#0284c7" />
                <span>info@mynexttrip.am</span>
              </div>
              <div className="footer-contact-item">
                <IconMapPin size={16} color="#0284c7" />
                <span>Yerevan • Berlin • Worldwide</span>
              </div>

              <div className="social-links">
                <div className="social-icon" title="Instagram">📷</div>
                <div className="social-icon" title="Facebook">📘</div>
                <div className="social-icon" title="Telegram">✈️</div>
                <div className="social-icon" title="WhatsApp">💬</div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div>© {new Date().getFullYear()} {t.brandName}. {t.footer.rights}</div>
            <div style={{ display: 'flex', gap: '16px' }}>
              <span style={{ cursor: 'pointer', color: lang === 'hy' ? '#38bdf8' : '#94a3b8' }} onClick={() => setLang('hy')}>Հայերեն</span>
              <span style={{ cursor: 'pointer', color: lang === 'de' ? '#38bdf8' : '#94a3b8' }} onClick={() => setLang('de')}>Deutsch</span>
              <span style={{ cursor: 'pointer', color: lang === 'en' ? '#38bdf8' : '#94a3b8' }} onClick={() => setLang('en')}>English</span>
            </div>
          </div>
        </div>
      </footer>

      {/* 9. Interactive Modal for Custom Tour Request (Matching User Screenshot Structure) */}
      {isModalOpen && (
        <div id="tour-modal-backdrop" className="modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <div className="modal-window" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header with Destination Photo Background */}
            <div 
              className="modal-header-banner" 
              style={{ backgroundImage: `url('/images/attractions/barcelona.jpg')` }}
            >
              <div className="modal-header-overlay"></div>
              <div className="modal-nav-bar">
                <div className="brand-logo" style={{ color: '#fff' }}>
                  <IconPlane size={22} color="#fff" />
                  <span style={{ fontWeight: 700, fontSize: '18px' }}>{t.brandName}</span>
                </div>
                <button id="modal-close-btn" className="modal-back-btn" onClick={() => setIsModalOpen(false)}>
                  <IconX size={15} color="#fff" />
                  <span>{t.modal.back}</span>
                </button>
              </div>

              <div className="modal-header-text">
                <h2>{t.modal.title}</h2>
                <p>{t.modal.subtitle}</p>
              </div>
            </div>

            {/* Modal Form Content */}
            <div className="modal-form-body">
              {modalFormSubmitted ? (
                <div className="success-alert">
                  <IconCheckCircle size={32} color="#16a34a" style={{ margin: '0 auto 12px', display: 'block' }} />
                  <p>{t.modal.successMsg}</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <div className="modal-form-grid">
                    {/* Left Column: Trip Details */}
                    <div className="form-column-card">
                      <div className="column-header">
                        <div className="column-badge">1</div>
                        <IconPlane size={18} color="#0284c7" />
                        <h4>{t.modal.step1Title}</h4>
                      </div>

                      <div className="form-group">
                        <label>{t.modal.destinationLabel}</label>
                        <div className="input-with-icon">
                          <IconMapPin size={16} color="#94a3b8" className="input-icon" />
                          <input 
                            className="form-input" 
                            type="text" 
                            required
                            placeholder={t.modal.destinationPlaceholder}
                            defaultValue={searchDest}
                          />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-group">
                          <label>{t.modal.departureDate}</label>
                          <div className="input-with-icon">
                            <IconCalendar size={16} color="#94a3b8" className="input-icon" />
                            <input className="form-input" type="date" required defaultValue={searchDepart} />
                          </div>
                        </div>

                        <div className="form-group">
                          <label>{t.modal.returnDate}</label>
                          <div className="input-with-icon">
                            <IconCalendar size={16} color="#94a3b8" className="input-icon" />
                            <input className="form-input" type="date" required defaultValue={searchReturn} />
                          </div>
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-group">
                          <label>{t.modal.adults}</label>
                          <div className="input-with-icon">
                            <IconUsers size={16} color="#94a3b8" className="input-icon" />
                            <select className="form-select" defaultValue="2">
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4+</option>
                            </select>
                          </div>
                        </div>

                        <div className="form-group">
                          <label>{t.modal.children}</label>
                          <div className="input-with-icon">
                            <IconUsers size={16} color="#94a3b8" className="input-icon" />
                            <select className="form-select" defaultValue="0">
                              <option value="0">0</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3+</option>
                            </select>
                          </div>
                          <div className="form-help">{t.modal.childrenHelp}</div>
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-group">
                          <label>{t.modal.hotelCategory}</label>
                          <div className="input-with-icon">
                            <IconBuilding size={16} color="#94a3b8" className="input-icon" />
                            <input className="form-input" type="text" placeholder={t.modal.hotelPlaceholder} />
                          </div>
                        </div>

                        <div className="form-group">
                          <label>{t.modal.mealType}</label>
                          <div className="input-with-icon">
                            <IconUtensils size={16} color="#94a3b8" className="input-icon" />
                            <input className="form-input" type="text" placeholder={t.modal.mealPlaceholder} />
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <label>{t.modal.budget}</label>
                        <div className="input-with-icon">
                          <IconDollar size={16} color="#94a3b8" className="input-icon" />
                          <input className="form-input" type="text" placeholder={t.modal.budgetPlaceholder} />
                        </div>
                      </div>

                      <div className="form-group">
                        <label>{t.modal.notes}</label>
                        <textarea 
                          className="form-textarea" 
                          rows={3} 
                          placeholder={t.modal.notesPlaceholder}
                        ></textarea>
                      </div>
                    </div>

                    {/* Right Column: Contact Data & Channels */}
                    <div>
                      <div className="form-column-card" style={{ marginBottom: '20px' }}>
                        <div className="column-header">
                          <div className="column-badge">2</div>
                          <IconUsers size={18} color="#0284c7" />
                          <h4>{t.modal.step2Title}</h4>
                        </div>

                        <div className="form-group">
                          <label>{t.modal.nameLabel}</label>
                          <div className="input-with-icon">
                            <IconUsers size={16} color="#94a3b8" className="input-icon" />
                            <input className="form-input" type="text" required placeholder={t.modal.namePlaceholder} />
                          </div>
                        </div>

                        <div className="form-group">
                          <label>{t.modal.phoneLabel}</label>
                          <div className="input-with-icon">
                            <IconPhone size={16} color="#94a3b8" className="input-icon" />
                            <input className="form-input" type="tel" required placeholder={t.modal.phonePlaceholder} />
                          </div>
                        </div>

                        <div className="form-group">
                          <label>{t.modal.emailLabel}</label>
                          <div className="input-with-icon">
                            <IconMail size={16} color="#94a3b8" className="input-icon" />
                            <input className="form-input" type="email" required placeholder={t.modal.emailPlaceholder} />
                          </div>
                        </div>
                      </div>

                      {/* Step 3: Preferred Contact Method */}
                      <div className="form-column-card">
                        <div className="column-header">
                          <div className="column-badge">3</div>
                          <IconMessage size={18} color="#0284c7" />
                          <h4>{t.modal.step3Title}</h4>
                        </div>

                        <div className="contact-channels">
                          <label 
                            className={`channel-option ${selectedContactMethod === 'phone' ? 'selected' : ''}`}
                            onClick={() => setSelectedContactMethod('phone')}
                          >
                            <input 
                              type="radio" 
                              name="contact" 
                              checked={selectedContactMethod === 'phone'} 
                              onChange={() => setSelectedContactMethod('phone')} 
                            />
                            <IconPhone size={16} color="#0284c7" />
                            <span style={{ fontSize: '13px', fontWeight: 600 }}>{t.modal.contactPhone}</span>
                          </label>

                          <label 
                            className={`channel-option ${selectedContactMethod === 'whatsapp' ? 'selected' : ''}`}
                            onClick={() => setSelectedContactMethod('whatsapp')}
                          >
                            <input 
                              type="radio" 
                              name="contact" 
                              checked={selectedContactMethod === 'whatsapp'} 
                              onChange={() => setSelectedContactMethod('whatsapp')} 
                            />
                            <IconMessage size={16} color="#16a34a" />
                            <span style={{ fontSize: '13px', fontWeight: 600 }}>{t.modal.contactWhatsapp}</span>
                          </label>

                          <label 
                            className={`channel-option ${selectedContactMethod === 'email' ? 'selected' : ''}`}
                            onClick={() => setSelectedContactMethod('email')}
                          >
                            <input 
                              type="radio" 
                              name="contact" 
                              checked={selectedContactMethod === 'email'} 
                              onChange={() => setSelectedContactMethod('email')} 
                            />
                            <IconMail size={16} color="#2563eb" />
                            <span style={{ fontSize: '13px', fontWeight: 600 }}>{t.modal.contactEmail}</span>
                          </label>
                        </div>

                        <div className="security-box">
                          <IconShieldCheck size={20} color="#16a34a" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <div>
                            <h5>{t.modal.securityBadge}</h5>
                            <p>{t.modal.securityText}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="modal-submit-wrap">
                    <button type="submit" className="modal-submit-btn">
                      <IconSend size={18} color="#fff" />
                      <span>{t.modal.submitBtn}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
