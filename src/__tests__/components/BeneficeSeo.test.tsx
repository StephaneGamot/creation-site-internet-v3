import { render, screen } from '@testing-library/react'
import { NextIntlClientProvider } from 'next-intl'
import BeneficeSeo from '@/components/Benefices/BeneficeSeo'

const mockMessages = {
  title: "Les bénéfices d’un SEO bien pensé",
  list: [
    { id: 1, title: "Meilleure visibilité", desc: "Votre site remonte dans les premiers résultats Google." },
    { id: 2, title: "Trafic qualifié", desc: "Vous attirez des visiteurs réellement intéressés." },
    { id: 3, title: "Conversion optimisée", desc: "Vos visiteurs deviennent plus facilement des clients." },
  ],
}

describe('BeneficeSeo', () => {
  it('affiche le titre et les éléments de la liste', () => {
    render(
      <NextIntlClientProvider locale="fr" messages={{ beneficeSeo: mockMessages }}>
        <BeneficeSeo />
      </NextIntlClientProvider>
    )

    expect(screen.getByRole('heading', {
      name: /Les bénéfices d’un SEO bien pensé/i,
    })).toBeInTheDocument()

    mockMessages.list.forEach(item => {
      expect(screen.getByText(item.title)).toBeInTheDocument()
      expect(screen.getByText(item.desc)).toBeInTheDocument()
    })
  })
})
