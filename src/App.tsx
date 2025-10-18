import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import { CircleCheckBig } from 'lucide-react'

function App() {

  return (
    <>
    <Navbar />
    <section className='hero'>
      <div style={{maxWidth: '75%', textAlign: 'center', margin: '0 auto'}}>
        <h2 style={{fontFamily:'Montserrat', fontSize: '2rem'}}>Capte. Filtre. Converta. A maneira moderna de gerar leads jurídicos.</h2>
        <h2 style={{fontFamily:'Montserrat', fontWeight: 500}}>Descubra como advogados estão conquistando novos clientes todos os dias com questionários inteligentes e captação automatizada de leads jurídicos.</h2>      
      </div>
      <div style={{position:'relative', width: '100%', display: 'flex', justifyContent: 'center', gap: '2rem'}}>
        <button style={{fontFamily:'Montserrat', fontSize: '1.2em', padding: '.8rem 1.5rem', borderRadius: '15px', backgroundColor: '#1b273f', color: '#fff', border: '1px #2d529cff solid', cursor: 'pointer'}}>Acessar painel</button>
        <button style={{fontFamily:'Montserrat', fontSize: '1.2em', padding: '.8rem 1.5rem', borderRadius: '15px', backgroundColor: '#111827e0', color: '#fff', border: '1px #4f4d4dcc solid', cursor: 'pointer', backdropFilter:'blur(25px)'}}>Ver Preços</button>
      </div>
    </section>
      <BlurredHeroEffect color='#7214FF' width={400} height={400} left={20} top={'25%'} />
      <BlurredHeroEffect color='#32CAFD' width={400} height={400} right={20} top={'25%'}/>
      <section className='resources' id='resources'>
        <h2 style={{fontFamily:'Montserrat', fontSize:'2em', fontWeight: 500}}>Recursos poderosos para te ajudar a gerenciar todos o seus leads.</h2>
        <div className='resource-cards'>
          <div className='resource-card'>
            <h3>Questionários Inteligentes</h3>
            <p>Crie questionários personalizados para captar informações essenciais dos seus potenciais clientes.</p>
          </div>
          <div className='resource-card'>
            <h3>Filtragem Avançada</h3>
            <p>Utilize filtros inteligentes para qualificar leads com base em critérios específicos do seu escritório.</p>
          </div>
          <div className='resource-card'>
            <h3>Automação de Marketing</h3>
            <p>Implemente campanhas automatizadas para nutrir seus leads e aumentar as chances de conversão.</p>
          </div>
          <div className='resource-card'>
            <h3>Automação de Marketing</h3>
            <p>Implemente campanhas automatizadas para nutrir seus leads e aumentar as chances de conversão.</p>
          </div>
        </div>
      </section>
      <section className='prices' id='prices'>
        <h2 style={{fontFamily:'Montserrat', fontSize:'2em', fontWeight: 500}}>Nossos Planos</h2>
        <div className='price-cards'>
          <div className='price-card'>
            <h3>Basico</h3>
            <p className='price'>R$ 40,00</p>
            <p><CircleCheckBig/> Conta gratuita</p>
            <p><CircleCheckBig/> Até 50 contatos gratuitos</p>
            <p><CircleCheckBig/> Filtros personalizáveis</p>
            <button>Assinar</button>
          </div>
          <div className='price-card'>
            <h3>Business</h3>
            <p className='price'>R$ 249,00</p>
            <p><CircleCheckBig/> Conta gratuita</p>
            <p><CircleCheckBig/> Contatos Ilimitados</p>
            <p><CircleCheckBig/> Filtros personalizáveis</p>
            <button>Assinar</button>
          </div>
          <div className='price-card'>
            <h3>Premium</h3>
            <p className='price'>R$ 502,00</p>
            <p><CircleCheckBig/> Conta gratuita</p>
            <p><CircleCheckBig/> Contatos Ilimitados</p>
            <p><CircleCheckBig/> Filtros personalizáveis</p>
            <p><CircleCheckBig/> Suporte e Personalização de conteúdos</p>
            <button>Assinar</button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

function BlurredHeroEffect({color, width, height, left, right,top}: {color: string, width: number | string, height: number | string, left?: number | string, right?: number | string, top: string | number | undefined}) {
  return (
    <div
      style={{ backgroundColor: color, width: width, height: height, position: 'absolute', left: left, right: right, top: top, zIndex: 1, borderRadius: '50%' }}
    />
  )
}

function Footer() {
  return (
    <footer id='contact' style={{
      backgroundColor: '#111827',
      color: '#fff',
      padding: '3rem 2rem',
      fontFamily: 'Montserrat, sans-serif',
      position: 'relative',
      zIndex: 2
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '2rem' }}>
        
        {/* Logo e descrição */}
        <div style={{ flex: '1 1 250px' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Helegis</h3>
          <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>
            A maneira moderna de captar e qualificar leads jurídicos, aumentando suas conversões e otimizando seu tempo.
          </p>
        </div>

        {/* Links rápidos */}
        <div style={{ flex: '1 1 150px' }}>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Links</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#cbd5e1' }}>
            <li style={{ marginBottom: '0.5rem', cursor: 'pointer' }}><a href='#resources'>Recursos</a></li>
            <li style={{ marginBottom: '0.5rem', cursor: 'pointer' }}><a href='#prices'>Planos</a></li>
            <li style={{ marginBottom: '0.5rem', cursor: 'pointer' }}><a href='#contact'>Contato</a></li>
          </ul>
        </div>

        {/* Contato */}
        <div style={{ flex: '1 1 200px' }}>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Contato</h4>
          <p style={{ color: '#cbd5e1', marginBottom: '0.5rem' }}>Email: contato@helegis.com</p>
          <p style={{ color: '#cbd5e1' }}>Telefone: +55 11 963101989</p>
        </div>
      </div>

      {/* Copyright */}
      <div style={{ textAlign: 'center', marginTop: '2rem', color: '#6b7280', fontSize: '0.9rem' }}>
        &copy; {new Date().getFullYear()} DYGO SISTEMAS DIGITAIS. Todos os direitos reservados.
      </div>
    </footer>
  )
}

export default App
