import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import { getServiceBySlug, getAllServiceSlugs, servicesList } from '@/lib/services-data'
import ServiceDetailContent from '@/components/services/ServiceDetailContent'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getServiceBySlug(params.slug)
  if (!service) {
    return { title: 'Service | BLACK ROCKS CONSULTANCY' }
  }
  return {
    title: `${service.title} | BLACK ROCKS CONSULTANCY`,
    description: service.shortDescription,
  }
}

export default function ServiceSlugPage({ params }: Props) {
  const service = getServiceBySlug(params.slug)
  if (!service) notFound()

  const other = servicesList.filter((s) => s.slug !== service.slug)

  return (
    <>
      <PageHeader
        title={service.title}
        subtitle={service.shortDescription}
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
        imageAlt="Professional services"
      />
      <ServiceDetailContent slug={service.slug} />
      {other.length > 0 && (
        <section className="section-padding bg-light border-t border-gray-100">
          <div className="container-custom">
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-dark mb-6">
              Other <span className="text-primary">services</span>
            </h2>
            <ul className="flex flex-wrap gap-3">
              {other.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="inline-block px-4 py-2 rounded-lg bg-white border border-gray-200 text-sm font-medium text-secondary hover:border-primary/30 hover:text-primary transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  )
}
